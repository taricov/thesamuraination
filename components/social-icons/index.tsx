import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import Amazon from './amazon.svg'
import Spotify from './spotify.svg'
import Soundcloud from './soundcloud.svg'
import ApplePodcasts from './applepodcasts.svg'
import GooglePodcasts from './googlepodcasts.svg'
import PodcastAddict from './podcastaddict.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  amazon: Amazon,
  googlePodcasts: GooglePodcasts,
  applePodcasts: ApplePodcasts,
  spotify: Spotify,
  podcastAddict: PodcastAddict,
  soundcloud: Soundcloud,
}

const SocialIcon = ({ kind, href, size = 5 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:opacity-50 dark:text-gray-200 transition-all duration-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
