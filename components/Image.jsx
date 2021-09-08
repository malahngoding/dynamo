import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <NextImage
    {...rest}
    placeholder="blur"
    blurDataURL="data:image/png;base64=iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
  />
)

export default Image
