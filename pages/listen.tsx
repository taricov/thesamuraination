import { ReactNode } from 'react'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function Listen() {


  return (
    <>
      <PageSEO title={`Listen - Listen to the podcast; providing links to all available platforms`} description={`Listen to the podcast; providing links to all available platforms `} />
      <div className="mt-20">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="opacity-[.04] text-[130px] font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-[150px] sm:leading-10 md:text-[200px] md:leading-14">
            Listen
          </h1>
        </div>
          <h1 className="text-2xl font-bold">Recently Published</h1>
        <div className="flex-col space-y-4 items-start  xl:grid-cols-3">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/17K9cZukfBY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <h1 className="text-2xl font-bold">Top Episodes:</h1>
        <div className="flex-col space-y-4 items-start  xl:grid-cols-3">
        <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1511639362&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{fontSize: "10px", color: "#cccccc", lineBreak:"anywhere", wordBreak: "normal",overflow: "hidden",whiteSpace: "nowrap",textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/samurai-nation-664714853" title="Samurai Nation" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Samurai Nation</a> · <a href="https://soundcloud.com/samurai-nation-664714853/intro-to-the-ai-everyday-series" title="[EN] Intro to the AI Everyday series" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>[EN] Intro to the AI Everyday series</a></div>
          </div>
          
      </div>
    </>
  )
}
