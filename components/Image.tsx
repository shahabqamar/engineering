import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => <NextImage src={`/engineering${src}`} {...rest} />

export default Image
