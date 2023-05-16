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
          <h1 className="text-3xl">Recently Published</h1>
        <div className="flex-col space-y-4 items-start  xl:grid-cols-3">
        <iframe referrerPolicy="no-referrer-when-downgrade" width="560" height="315" src="https://www.youtube.com/embed/17K9cZukfBY" title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/17K9cZukfBY" title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/17K9cZukfBY" title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          
      </div>
    </>
  )
}
