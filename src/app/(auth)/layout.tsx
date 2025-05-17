import Image from 'next/image'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen w-full lg:grid lg:grid-cols-2 bg-gray-100">
      <div className="flex items-center justify-center py-12">
        <div className="mt-8 lg:mt-0">{children}</div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/images/auth-img.jpg"
          alt="Image"
          width="1920"
          height="1080"
          priority
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
