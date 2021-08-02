import { BrandGithub, BrandTiktok, BrandYoutube, BrandInstagram } from 'tabler-icons-react'

const components = {
  github: BrandGithub,
  youtube: BrandYoutube,
  instagram: BrandInstagram,
  tiktok: BrandTiktok,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href) return null

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
        className={`text-gray-700 dark:text-gray-200 hover:text-blue-800 dark:hover:text-yellow-800 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
