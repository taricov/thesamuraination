import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="soundcloud" href={siteMetadata.soundcloudLink} size={6} />
          <SocialIcon kind="applePodcasts" href={siteMetadata.appleLink} size={6} />
          <SocialIcon kind="googlePodcasts" href={siteMetadata.googleLink} size={6} />
          <SocialIcon kind="spotify" href={siteMetadata.spotifyLink} size={6} />
          <SocialIcon kind="podcastAddict" href={siteMetadata.additctLink} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
        </div>
        <div className="mb-0 flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/">{siteMetadata.title}</Link>
          <div>{`©${new Date().getFullYear()}`}</div>
          {/* <div>{`• - `}</div> */}
        </div>
        <div className="mb-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <span>Podcast & Blog By </span>
          <Link href={siteMetadata.linkedin}>
          <span className='dark:text-slate-300 text-slate-900 font-bold dark:font-normal hover:opacity-50 transition-all durtation-400'>{siteMetadata.author}</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
