import { useState } from 'react'
import { useRouter } from 'next/router'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog, allBlogs } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const router = useRouter()
  const basePath = router.pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-20 text-gray-800 bg-gray-300 dark:bg-gray-600 px-2 py-1 shadow-md rounded-md" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
          className="group text-gray-800 bg-gray-300 dark:bg-gray-600 px-2 text-center py-1 hover:text-gray-200 hover:bg-gray-600 transition duration-700 shadow-md rounded-md pr=3"
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            >
            <span aria-hidden="true" className="inline-block translate-x-0 group-hover:-translate-x-1 transition-transform ease-in-out duration-200 text-md px-1 rotate-180">➤</span>
            Previous
          </Link>
        )}
        <span className="flex items-center justify-center">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-20 text-gray-800 bg-gray-300 dark:bg-gray-600 px-2 py-1 shadow-md rounded-md" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next" className="group text-gray-800 bg-gray-300 dark:bg-gray-600 px-2 text-center py-1 hover:text-gray-200 hover:bg-gray-600 transition duration-700 shadow-md rounded-md ">
            Next
            <span aria-hidden="true" className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200 text-md px-1">➤</span>
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>

<div className="mt-20">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="opacity-[.04] sm:text-[130px] text-[80px] font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:leading-10  md:leading-14">
            {title}
          </h1>
          <div className="pt-10 relative w-full flex justify-center">
            <label className="relative w-7/12">
              <span className="sr-only">Search articles</span>
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search Things..."
                className="placeholder:text-center text-center duration-700 block w-full rounded-md border border-gray-200 focus:border-gray-100 bg-white px-4 py-2 text-gray-900  transition-all outline-none focus:bg-gray-200 focus:ring-gray-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
          <div className="px-[2px] py-[2px] text-[11px] opacity-40 select-none">{filteredBlogPosts.length+"/"+allBlogs.length}</div>

    <div className="data__arrow">
        <p>Search here</p>
        <svg width="80" height="80" viewBox="0 0 534 534" xmlns="http://www.w3.org/2000/svg"><g><path d="m402.586 185.369c-8.047.188-15.469.182-22.865.623-6.311.376-12.583 1.399-18.894 1.818-1.289.085-2.673-1.241-4.013-1.916 1.271-1.026 2.483-2.85 3.822-2.948 10.017-.737 14.278-9.011 20.289-15.013 5.989-5.981 11.786-12.202 18.269-17.595 1.247-1.038 5.932.495 7.908 2.17 9.167 7.768 17.989 15.949 26.798 24.13 1.393 1.293 2.084 3.341 3.1 5.041-1.652.38-3.286.949-4.959 1.108-9.6.915-19.211 1.732-29.455 2.582zm5.736-20.407c-1.062 1.004-2.124 2.007-3.187 3.011 1.528.231 3.056.462 4.583.694-.253-1.022-.506-2.045-1.396-3.705z"/><path d="m104.332 344.798c12.908 4.201 25.131 8.553 37.488 12.486 2.694.858 5.923-.112 8.793.396 1.623.288 3.016 1.871 4.513 2.871-1.282.701-2.563 1.996-3.846 1.998-5.064.006-10.355.458-15.146-.818-10.249-2.728-20.241-6.422-30.332-9.739-.554-.182-1.022-.625-1.576-.802-2.065-.662-4.149-1.263-6.226-1.887 1.8981-1.502 3.796-3.004 6.332-4.505z"/><path d="m386.016 266.996c.85-6.849 1.542-13.089 2.636-19.258.375-2.108 2.323-3.321 3.486-.595 1.135 2.664 1.635 5.717 1.823 8.637.226 3.524.807 7.506-.491 10.553-3.148 7.384-7.203 14.394-11.148 21.411-.546.972-2.536 1.132-3.857 1.669-.168-1.597-.947-3.453-.399-4.745 2.443-5.766 5.265-11.371 7.95-17.672z"/><path d="m348.735 339.377c-4.946 4.949-9.549 9.602-14.225 14.181-.678.664-1.738 1.412-2.565 1.352-1.755-.129-3.473-.765-5.206-1.193.782-1.202 1.422-2.53 2.368-3.585 8.039-8.968 16.071-17.945 24.288-26.75 1.071-1.147 3.174-1.331 4.799-1.961-.196 1.751.139 3.822-.687 5.194-2.582 4.289-5.603 8.315-8.772 12.762z"/><path d="m262.381 381.785c-2.259-1.883-1.587-4.604.962-5.036 8.56-1.449 17.148-2.815 25.775-3.734 1.85-.197 3.966 1.533 5.785 2.657.156.096-.823 3.271-1.581 3.416-7.909 1.512-15.861 2.848-23.847 3.869-2.069.264-4.3-.747-7.094-1.172z"/><path d="m192.596 377.64c-.863-.532-1.497-.631-1.938-.976-1.952-1.53-5.677-3.541-5.433-4.632.822-3.667 4.429-2.086 6.772-1.629 7.366 1.437 14.647 3.314 21.968 4.987.602.137 1.55-.251 1.846.065 1.439 1.542 2.711 3.24 4.043 4.882-2.122.483-4.334 1.613-6.348 1.33-6.901-.969-13.733-2.433-20.91-4.027z"/><path d="m405.453 211.834c-2.449 4.93-4.364 5.47-5.776 1.613-2.232-6.1-3.552-12.608-4.492-19.055-.215-1.477 2.684-3.41 4.15-5.133 1.083 1.204 2.879 2.276 3.128 3.633 1.128 6.164 1.821 12.408 2.99 18.942z"/></g></svg>
    </div>
            {/* <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg> */}
            </label>
          </div>
        </div>
        <ul className="pt-10">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((post) => {
            const { path, date, title, summary, tags } = post
            return (
              <li key={path} className="relative rounded-3xl w-10/12 mx-auto md:w-full my-4 shadow-2xl hover:shadow-md py-10 px-5 transition duration-700">
                      {/* <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100"> */}
                    
                <article className="relative space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-sm italic text-gray-600 dark:text-gray-200">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                      <div className="flex flex-wrap my-2">
                       <span className="text-sm capitalize text-gray-600 dark:text-gray-500">Tags:&nbsp;</span>
                        {tags.map((tag) => (
                          <>
<Tag key={tag} text={tag} />
<span className='text-gray-500 -mt-[2px]'> •&nbsp;</span>
</>
                        ))}
                      </div>
                      
                    </div>
                    <a className="max-w-none text-gray-600 dark:text-gray-400 text-ellipsis">
                      {summary}
                    </a>
                  </div>
                </article>
                {/* </Link> */}

                    <div className={`absolute bg-green-400 top-15 -left-2 transform rotate-[270deg] origin-top-left text-gray-600 dark:text-gray-800 text-[12px] px-1 font-semibold py-[.2px] shadow-lg rounded-md hover:shodow-xl transition duration-400 ${tags.includes("ai") ? "!bg-red-500 text-red-100 dark:bg-red-600 dark:text-red-50" : tags.includes("front") ? "bg-indigo-500 text-indigo-100 dark:bg-indigo-700 dark:!text-indigo-50": ""}`}>

                    {tags.includes("ai") ? "Artificial Intellgence" : tags.includes("front") ? "Tech": "Others"}
                    </div>
              </li>
            )
          })}
        </ul>
      </div>


      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
