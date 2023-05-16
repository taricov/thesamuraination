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
    item: "Titanic - A data experience project about titanic dataset",
    href: "https://titanic-eta.vercel.app/",
    cat: "data",
    hint: "data Experience",
    published: true
    
  },
  {
    id: 1,
    item: "Mars Orbits - A 3D play with ThreeJs",
    href: "https://github.com/",
    cat: "art",
    hint: "art/graphics",
    published: false
    
  },
  {
    id: 3,
    item: "Playful presentation - A report for a year quarter and achievements I have done.",
    href: "https://taricov.github.io/website_achievement_data_presentation/",
    cat: "data",
    hint: "data prez",
    published: false
    
  },
  {
    id: 4,
    item: "A playground for coding cool and fun stuff using different programming languages.",
    href: "https://zesty-lily-203f48.netlify.app/",
    cat: "art",
    hint: "art gallery",
    published: false
    
  },
  {
    id: 5,
    item: "[Archived] My old data job portfolio ",
    href: "https://taricov.github.io/My_Data_Portfolio/",
    cat: "data",
    hint: "honorable mention",
    published: false
    
  },
  {
    id: 6,
    item: "Web application for managing time in 3 different scenarios",
    href: "https://github.com/taricov/webApp__entertainment_center",
    cat: "app",
    hint: "Web Application",
    published: false
    
  },
  {
    id: 7,
    item: "[Archived] A website portfolio I coded earlier in my career ",
    href: "",
    cat: "website",
    hint: "portfolio website",
    published: false
    
  },
  {
    id: 8,
    item: "[Archived] What it tells was a project to storytell data and provide user-friendly educational experience.",
    href: "https://what-it-tells.vercel.app/",
    cat: "website",
    hint: "digital publication",
    published: false
    
  },
  {
    id: 9,
    item: "[Archived] Another iteration for 'What it tells' - the digital publication",
    href: "https://taricov.github.io/wp_whatittells/",
    cat: "website",
    hint: "Website",
    published: false
    
  },
  {
    id: 10,
    item: "Tayara website - A startup that specializes in Quick Commerce",
    href: "https://reactjs-tayara-website.vercel.app/",
    cat: "website",
    hint: "landing page",
    published: false
    
  },
  {
    id: 1,
    item: "eCalenda - SaaS startup and a business tool for time management and resource allocation.",
    href: "https://github.com/taricov/Reactjs_eCalenda_app",
    cat: "data",
    hint: "Startup",
    published: true
    
  },
  {
    id: 12,
    item: "eCalenda - A separate and custom-made website to serve for the main product.",
    repo: "https://github.com/taricov/Reactjs_eCalenda_app",
    href: "https://e-calenda-website-9muivz6dw-taricov.vercel.app/",
    cat: "website",
    hint: "website",
    published: false
    
  },
  {
    id: 2,
    item: "ERP Builder",
    repo: "https://github.com/taricov/react__ERP_builder/",
    href: "https://react-erp-builder-9jc7kpz07-taricov.vercel.app/App_name/builder",
    cat: "data",
    hint: "startup",
    published: true
    
  },
]

const catColors = {
  data: "red",
  art: "indigo",
  app: "teal",
  website: "",
  ai: "blue",
}

const statsList =[
  {
    title: "Side Apps",
    figure: "3+",
    updated: "10/05/2023"
  },
  {
    title: "Tools/Utilities",
    figure: "12+",
    updated: "10/05/2023"
  },
  {
    title: "On Production",
    figure: "5+",
    updated: "10/05/2023"
  }
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
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}
          
           <div>
          <h2 className="text-xl text-center font-semibold opacity-90 my-2 lg:mt-10">in Numbers ➚ (Stats)</h2>
        <div className="lg:mb-13 w-full text-center text-gray-200 flex justify-center space-x-20 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 py-6">
          {statsList.map(stat=> (

            <div className="flex-col justify-around row-gap-8 sm:grid-cols-3">
        <div className="text-center">
          <h6 className="text-5xl font-bold text-center">{stat.figure}</h6>
          <p className="font-bold text-sm mt-3">{stat.title}</p>
          <p className="italic text-[10px] capitalize">last updated: {stat.updated}</p>
        </div>
        </div>
        ))}
        </div>
       
          </div>
        </div>
        </div>
       {/* 
        <div className="w-full text-center my-2">
          <h2 className="text-xl font-semibold opacity-90 my-2">Products/Projects</h2>
          <ul className="list-none text-sm">
            {
              myProjects.map(project =>(
              project.published &&
                  <>
                <li className="xl:text-center text-left hover:translate-x-2 hover:opacity-100 trasform opacity-60 hover:transform hover:traslate-x-[4px] hover:opcity-100 transition-all duration-500">
                  <Link target="_blank" href={project.href}>{project.id +1+ "/"} {project.item}
                   &nbsp;<span className={`capitalize italic text-sm bg-${catColors[project.cat]}-500 bg-opacity-30 rounded-lg px-[6px]`}> {project.hint}&nbsp;</span></Link>
                  </li>
                  {
                    project.repo &&
                  <div className="xl:text-center text-left hover:translate-x-2 hover:opacity-100 trasform opacity-60 hover:transform -mt-1 hover:traslate-x-[4px] hover:opcity-100 transition-all duration-500 pl-5"><Link target="_blank" href={project.repo}>↳ <span className="underline text-xs">visit the project repo for more info</span>
                  </Link></div>
                  }
                  </>
                
              )
              )
            }
          </ul>
        </div>
         */}

      </div>
    </>
  )
}
