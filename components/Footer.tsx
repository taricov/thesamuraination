import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
      {/* <div className="my-5 flex flex items-center opacity-60">Listen Now  */}
      {/* <span className="w-10 h-5 bg-[url('https://snippets.alexandru.so/squiggle.svg')] mb-2 ml-1"></span>  */}

      {/* <svg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 10 18'><style type='text/css'>.squiggle{animation:shift .5s linear infinite;}@keyframes shift{from{transform:translateX(-10px);}to{transform:translateX(0);}}</style><path fill='none' stroke='#E2E8F0' stroke-width='1' class='squiggle' d='M0,17.5 c 2.5,0,2.5,-1.5,5,-1.5 s 2.5,1.5,5,1.5 c 2.5,0,2.5,-1.5,5,-1.5 s 2.5,1.5,5,1.5'/></svg>

            </div> */}
      <svg viewBox="0 0 100 20">
  <defs>
    <linearGradient id="gradient">
      <stop color="#000"/>
    </linearGradient>
    <pattern id="wave" x="0" y="-0.5" width="100%" height="100%" patternUnits="userSpaceOnUse">
      <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)"> 
        <animateTransform
            attributeName="transform"
            begin="0s"
            dur="1.5s"
            type="translate"
            from="0,0"
            to="40,0"
            repeatCount="indefinite" />
      </path>
    </pattern>
  </defs>
  <text className='select-none' text-anchor="middle" x="50" y="15" font-size="17" fill="white" fill-opacity="0.1">Listen</text>
  <text className='select-none' text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)"  fill-opacity="1">Listen</text>
</svg>


        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="soundcloud" href={siteMetadata.soundcloudLink} size={6} />
          <SocialIcon kind="applePodcasts" href={siteMetadata.appleLink} size={6} />
          <SocialIcon kind="googlePodcasts" href={siteMetadata.googleLink} size={6} />
          <SocialIcon kind="spotify" href={siteMetadata.spotifyLink} size={6} />
          <SocialIcon kind="amazon" href={siteMetadata.amazonLink} size={6} />
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
