'use client'

import { Github, Globe, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useState, useTransition } from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { SiPeerlist } from 'react-icons/si'

import { updateUserProfile } from '@/actions/profile/updateUserProfile'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { UserAvatar } from '../avatar'

interface UserProfileInfoViewProps {
  userId: string
  userProfile: {
    name: string
    email: string
    bio: string | null
    linkedIn: string | null
    github: string | null
    website: string | null
    twitter: string | null
    peerlist: string | null
  }
}

export function UserProfileInfoView({ userId, userProfile }: UserProfileInfoViewProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: userProfile.name,
    email: userProfile.email,
    bio: userProfile.bio || '',
    linkedIn: userProfile.linkedIn || '',
    github: userProfile.github || '',
    website: userProfile.website || '',
    twitter: userProfile.twitter || '',
    peerlist: userProfile.peerlist || '',
  })
  const [isPending, startTransition] = useTransition()

  const handleSave = () => {
    startTransition(() => {
      const { bio, linkedIn, github, website, twitter, peerlist } = profile
      const values = {
        bio: bio.trim() || undefined,
        linkedIn: linkedIn.trim() || undefined,
        github: github.trim() || undefined,
        website: website.trim() || undefined,
        twitter: twitter.trim() || undefined,
        peerlist: peerlist.trim() || undefined,
      }

      updateUserProfile(userId, values).then((res) => {
        if (res.success) {
          toast.success(res.message)
          setIsEditing(false)
        } else {
          toast.error(res.message || 'Failed to update profile')
        }
      })
    })
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your profile details and social links</CardDescription>
          </div>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button loading={isPending} onClick={handleSave}>
                Save
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {isEditing ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <UserAvatar name={profile.name} size="50" />
              <div>
                <h3 className="text-lg font-medium">{profile.name}</h3>
                <p className="text-sm text-muted-foreground">{profile.email}</p>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="min-h-[100px]"
              />
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <div className="flex items-center rounded-md border border-input px-3 py-2">
                  <Linkedin className="mr-2 h-6 w-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground mr-2">linkedin.com/in/</span>
                  <Input
                    id="linkedin"
                    value={profile.linkedIn}
                    onChange={(e) => setProfile({ ...profile, linkedIn: e.target.value })}
                    className="border-0 p-0 shadow-none focus-visible:ring-0"
                    placeholder="username"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="github">GitHub</Label>
                <div className="flex items-center rounded-md border border-input px-3 py-2">
                  <Github className="mr-2 h-6 w-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground mr-2">github.com/</span>
                  <Input
                    id="github"
                    value={profile.github}
                    onChange={(e) => setProfile({ ...profile, github: e.target.value })}
                    className="border-0 p-0 shadow-none focus-visible:ring-0"
                    placeholder="username"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="twitter">Twitter</Label>
                <div className="flex items-center rounded-md border border-input px-3 py-2">
                  <FaXTwitter className="mr-2 h-6 w-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground mr-2">x.com/</span>
                  <Input
                    id="twitter"
                    value={profile.twitter}
                    onChange={(e) => setProfile({ ...profile, twitter: e.target.value })}
                    className="border-0 p-0 shadow-none focus-visible:ring-0"
                    placeholder="username"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="peerlist">Peerlist</Label>
                <div className="flex items-center rounded-md border border-input px-3 py-2">
                  <SiPeerlist className="mr-2 h-6 w-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground mr-2">peerlist.io/</span>
                  <Input
                    id="peerlist"
                    value={profile.peerlist}
                    onChange={(e) => setProfile({ ...profile, peerlist: e.target.value })}
                    className="border-0 p-0 shadow-none focus-visible:ring-0"
                    placeholder="username"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="website">Website</Label>
                <div className="flex items-center rounded-md border border-input px-3 py-2">
                  <Globe className="mr-2 h-6 w-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground mr-2">https://</span>
                  <Input
                    id="website"
                    value={profile.website}
                    onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                    className="border-0 p-0 shadow-none focus-visible:ring-0"
                    placeholder="example.com"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <UserAvatar name={profile.name} size="50" />
              <div>
                <h3 className="text-lg font-medium">{profile.name}</h3>
                <p className="text-sm text-muted-foreground">{profile.email}</p>
              </div>
            </div>
            {profile.bio && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Bio</h4>
                <p className="mt-1">{profile.bio}</p>
              </div>
            )}
            <div className="grid gap-4 md:grid-cols-2">
              {profile.linkedIn && (
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`https://linkedin.com/in/${profile.linkedIn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    linkedin.com/in/{profile.linkedIn}
                  </a>
                </div>
              )}
              {profile.github && (
                <div className="flex items-center space-x-2">
                  <Github className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`https://github.com/${profile.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    github.com/{profile.github}
                  </a>
                </div>
              )}
              {profile.twitter && (
                <div className="flex items-center space-x-2">
                  <FaXTwitter className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`https://twitter.com/${profile.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    twitter.com/{profile.twitter}
                  </a>
                </div>
              )}
              {profile.peerlist && (
                <div className="flex items-center space-x-2">
                  <SiPeerlist className="h-4 w-4 text-muted-foreground" />
                  <Link
                    href={`https://peerlist.io/${userProfile.peerlist}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    {profile.peerlist}
                  </Link>
                </div>
              )}
              {profile.website && (
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`https://${profile.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    {profile.website}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
