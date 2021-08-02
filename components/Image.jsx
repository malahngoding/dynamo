import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <NextImage {...rest} placeholder="blur" blurDataURL="data:image/png;base64=" />
)

export default Image
