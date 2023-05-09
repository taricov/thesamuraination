import Link from 'next/link'
import { kebabCase } from 'pliny/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-1 text-sm capitalize text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-500 transition duration-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
