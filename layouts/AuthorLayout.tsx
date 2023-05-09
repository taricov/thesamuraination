import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

const myProjects = [
  {
    id: 0,
    item: "Titanic - A data experience project about titanic dataset  ",
    href: "https://titanic-eta.vercel.app/"
  },
  {
    id: 1,
    item: "Mars Orbits - A 3D play with ThreeJs",
    href: "https://github.com/"
  },
  {
    id: 2,
    item: "Playful presentation - A report for a year quarter and achievements I have done.",
    href: "https://taricov.github.io/website_achievement_data_presentation/"
  },
]


export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="mt-20">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="opacity-[.04] text-[130px] font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-[150px] sm:leading-10 md:text-[200px] md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width={100}
              height={100}
              className="h-30 w-30 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl !m-auto font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400 text-center max-w-md">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
        <div className="w-full text-center my-2">
          <h2 className="text-xl font-semibold opacity-90 my-2">Products/Projects</h2>
          <ul className="list-none text-sm">
            {
              myProjects.map(project =>(
                <li className="hover:translate-x-2 hover:opacity-100 trasform opacity-60 hover:transform hover:traslate-x-[4px] hover:opcity-100 transition-all duration-500">
                  <Link target="_blank" href={project.href}>{project.id +1+ ")"} {project.item}
                  </Link>
                  </li>
              )
              )
            }
          </ul>
        </div>
      </div>
    </>
  )
}
