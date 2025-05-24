import { Github, Globe, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { SiPeerlist } from 'react-icons/si'

import { getUserProfileInfo } from '@/actions/profile/getUserProfileInfo'
import { UserAvatar } from '@/components/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export async function ProfileInfo({ userId }: { userId: string }) {
  const { data: userProfile, success } = await getUserProfileInfo(userId)
  if (!success || !userProfile) {
    return <div className="text-red-500">Profile not found</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>User profile details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <UserAvatar name={userProfile.name} size="50" />
          <div>
            <h3 className="text-lg font-medium">{userProfile.name}</h3>
            <p className="text-sm text-muted-foreground">{userProfile.email}</p>
          </div>
        </div>
        {userProfile.bio && (
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Bio</h4>
            <p className="mt-1">{userProfile.bio}</p>
          </div>
        )}
        <div className="grid gap-4 md:grid-cols-2">
          {userProfile.linkedIn && (
            <div className="flex items-center space-x-2">
              <Linkedin className="h-4 w-4 text-muted-foreground" />
              <Link
                href={`https://linkedin.com/in/${userProfile.linkedIn}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                linkedin.com/in/{userProfile.linkedIn}
              </Link>
            </div>
          )}
          {userProfile.github && (
            <div className="flex items-center space-x-2">
              <Github className="h-4 w-4 text-muted-foreground" />
              <Link
                href={`https://github.com/${userProfile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                github.com/{userProfile.github}
              </Link>
            </div>
          )}
          {userProfile.twitter && (
            <div className="flex items-center space-x-2">
              <Twitter className="h-4 w-4 text-muted-foreground" />
              <Link
                href={`https://twitter.com/${userProfile.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                twitter.com/{userProfile.twitter}
              </Link>
            </div>
          )}
          {userProfile.peerlist && (
            <div className="flex items-center space-x-2">
              <SiPeerlist className="h-4 w-4 text-muted-foreground" />
              <Link
                href={`https://peerlist.io/${userProfile.peerlist}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                {userProfile.peerlist}
              </Link>
            </div>
          )}
          {userProfile.website && (
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <Link
                href={`https://${userProfile.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                {userProfile.website}
              </Link>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
