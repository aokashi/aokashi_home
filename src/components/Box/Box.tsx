import React, { ReactNode } from "react"
import Link from "../Link"
import Image from "../Image"
import { Badge, Card, CardBody, CardFooter, CardHeader, ChakraProps, Heading, chakra, Center } from "@chakra-ui/react"

type Props = {
  title?: string,
  titleBadge?: string,
  link?: string,
  imagePath?: string,
  imageWrapper?: (image: ReactNode) => ReactNode,
  onImageClick?: VoidFunction,
  children?: React.ReactNode,
  headerContent?: React.ReactNode,
  footerContent?: React.ReactNode
} & ChakraProps;

/**
 * カード形ボックスコンポーネントです。
 * Chakra UI の Box コンポーネントとは異なります。
 * @todo 今後は Chakra UI の Box コンポーネントとの混在を防ぐため、 BoxCard コンポーネントに改称する。
 */
const Box = ({
  title = "",
  titleBadge,
  link = "",
  imagePath,
  imageWrapper,
  onImageClick,
  children,
  headerContent,
  footerContent,
  ...chakraProps
}: Props) => (
  <Card {...chakraProps}>
    {imagePath &&
      <BoxLink href={link} onClick={onImageClick}>
        {imageWrapper
          ? imageWrapper(<Image src={imagePath} />)
          : <Center><Image src={imagePath} /></Center>
        }
      </BoxLink>
    }
    {(title || headerContent) && (
      <CardHeader>
        {title && (
          link ? (
            <BoxLink href={link}>
              <BoxTitle title={title} titleBadge={titleBadge} />
            </BoxLink>
          ) : (
            <BoxTitle title={title} titleBadge={titleBadge} />
          )
        )}
        {headerContent}
      </CardHeader>
    )}
    <CardBody>
      {children}
    </CardBody>
    {footerContent &&
      <CardFooter>
        {footerContent}
      </CardFooter>
    }
  </Card>
)

const BoxTitle = ({ title, titleBadge }: { title: string, titleBadge?: string }) => (
  <Heading as="h3" size="md">
    {title}
    {titleBadge && <Badge colorScheme="green" fontSize="sm" ml={2}>{titleBadge}</Badge>}
  </Heading>
)

/**
 * Box 内でリンクの出力が必要な際に利用するコンポーネントです。
 * @param {Object} props href: リンク先, onClick: クリックイベント
 */
const BoxLink = ({ href, onClick, children }: { href?: string, onClick?: VoidFunction, children: React.ReactNode }) => {
  if (href) {
    return <Link href={href}>{children}</Link>
  }
  if (onClick) {
    return <chakra.div role="button" mx="auto" onClick={onClick} onKeyDown={onClick}>{children}</chakra.div>
  }
  return <>{children}</>
}

export default Box
