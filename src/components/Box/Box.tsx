import React from "react"
import PropTypes from "prop-types"
import Link from "../Link"
import Image from "../Image"
import { Card, CardBody, CardFooter, CardHeader, ChakraProps, chakra } from "@chakra-ui/react"

type Props = {
  title?: string,
  link?: string,
  imagePath?: string,
  onImageClick?: VoidFunction,
  children?: React.ReactNode,
  footerContent?: React.ReactNode
} & ChakraProps;

/**
 * カード形ボックスコンポーネントです。
 * Chakra UI の Box コンポーネントとは異なります。
 */
const Box = ({ title, link, imagePath, onImageClick, children, footerContent, ...chakraProps }: Props) => (
  <Card {...chakraProps}>
    {imagePath &&
      <div className="card-image has-text-centered has-background-light">
        <BoxLink href={link} onClick={onImageClick}>
          <Image src={imagePath} />
        </BoxLink>
      </div>
    }
    {title &&
      <CardHeader>
        <BoxLink onClick={() => {}} href={link}>
          <h3 className="card-header-title">{title}</h3>
        </BoxLink>
      </CardHeader>
    }
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
const BoxLink = ({ href, onClick, children }: { href?: string, onClick: VoidFunction, children: React.ReactNode }) => {
  if (href) {
    return <Link href={href}>{children}</Link>
  }
  if (onClick) {
    return <chakra.div role="button" tabIndex={0} onClick={onClick} onKeyDown={onClick}>{children}</chakra.div>
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
  footerContent: PropTypes.node,
}

Box.defaultProps = {
  title: "",
  link: "",
  imagePath: null,
  onImageClick: () => {},
  width: "one-quater",
  className: "",
}

export default Box
