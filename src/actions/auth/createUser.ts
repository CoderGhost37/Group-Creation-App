'use server'

import { db } from '@/lib/prisma'
import { resend } from '@/lib/resend'
import bcrypt from 'bcryptjs'

function generateRandomPassword(length = 8): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
  let password = ''
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

export async function createUser(name: string, email: string) {
  try {
    const randomPassword = generateRandomPassword()
    const hashedPassword = await bcrypt.hash(randomPassword, 10)

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        student: {
          create: {},
        },
      },
      include: {
        student: true,
      },
    })

    await resend.emails.send({
      from: `Cinnavo Portal <${process.env.SENDING_EMAIL}>`,
      to: email,
      subject: 'Account Created',
      html: `
                        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              color: #333;
              margin: 0;
              padding: 0;
            }
        
            .container {
              background-color: #fff;
              width: 80%;
              max-width: 600px;  /* added max-width */
              margin: 20px auto; /* added top/bottom margin */
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
            }
        
            .header {
              background-color: #006EE6; /* Brand color */
              color: white;
              padding: 10px;
              text-align: center;
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;
            }
        
            .content {
              padding-top: 10px;
              padding-left: 20px;
              padding-right: 20px;
              padding-bottom: 5px;
              line-height: 1.6;
            }
        
            .signature {
              text-align: left;
              padding-top: 5px;
              padding-left: 20px;
              padding-right: 20px;
              color: #006EE6; /* Brand color */
            }
        
            ul {
              list-style-type: disc; /* Use bullets for list */
              padding-left: 30px; /* Indent the list */
            }
        
            ol {
              list-style-type: decimal; /* Use numbers for list */
              padding-left: 30px; /* Indent the list */
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Account Created</h1>
            </div>
            <div class="content">
              <p>Hello ${name},</p>
              <p>Your new Student account on the Cinnavo app has been successfully created. Here are your login details:</p>
              <ul>
                <li>Email: ${email}</li>
                <li>Temporary Password: ${randomPassword}</li>
                <li>Login URL: ${process.env.NEXT_PUBLIC_URL}/login</li>
              </ul>
              <p>Login to the Cinnavo app using the provided credentials.</p>
            </div>
            <div class="signature">
              <p>Best regards,</p>
              <p><strong>Cinnavo Team</strong></p>
            </div>
          </div>
        </body>
        </html>
                      `,
    })

    return {
      success: true,
      message: 'User created successfully',
      user: newUser,
    }
  } catch (error) {
    console.error('Error creating user:', error)
    return {
      success: false,
      message: 'Error creating user',
    }
  }
}
