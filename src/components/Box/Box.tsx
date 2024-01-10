import React from "react"
import PropTypes from "prop-types"
import Link from "../Link"
import Image from "../Image"
import { Card, CardBody, CardFooter, CardHeader, Center, ChakraProps, Heading, chakra } from "@chakra-ui/react"

type Props = {
  title?: string,
  link?: string,
  imagePath?: string,
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
const Box = ({ title, link, imagePath, onImageClick, children, headerContent, footerContent, ...chakraProps }: Props) => (
  <Card {...chakraProps}>
    {imagePath &&
      <BoxLink href={link} onClick={onImageClick}>
        <Center>
          <Image src={imagePath} />
        </Center>
      </BoxLink>
    }
    {(title || headerContent) && (
      <CardHeader>
        {title && (
          link ? (
            <BoxLink href={link}>
              <Heading as="h3" size="md">{title}</Heading>
            </BoxLink>
          ) : (
            <Heading as="h3" size="md">{title}</Heading>
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

Box.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  imagePath: Image.propTypes.src,
  onImageClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  headerContent: PropTypes.node,
  footerContent: PropTypes.node,
}

Box.defaultProps = {
  title: "",
  link: "",
  imagePath: null,
  className: "",
}

export default Box
