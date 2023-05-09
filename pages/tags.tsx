import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { kebabCase } from 'pliny/utils/kebabCase'
import { getAllTags } from 'pliny/utils/contentlayer'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'

export const getStaticProps: GetStaticProps<{ tags: Record<string, number> }> = async () => {
  const tags = await getAllTags(allBlogs)

  return { props: { tags } }
}

export default function Tags({ tags }: InferGetStaticPropsType<typeof getStaticProps>) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />

      <div className="mt-20">
      <div className="flex-col items-center justify-center">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="opacity-[.04] sm:text-[130px] text-[80px] font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:leading-10  md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg mx-auto flex-wrap items-center justify-center">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                <Tag text={t} />
                <Link
                  href={`/tags/${kebabCase(t)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  aria-label={`View posts tagged ${t}`}
                >&nbsp;
                  {` (${tags[t]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    </>
  )
}

