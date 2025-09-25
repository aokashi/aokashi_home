import React, { ReactNode, useRef } from "react"
import { Badge, Card, CardBody, CardFooter, CardHeader, Center, ChakraProps, Heading } from "@chakra-ui/react"
import { BoxLink } from "./BoxLink";
import { BoxImageWrapper } from "./BoxImageWrapper";
import Image from "../Image";

type Props = {
  title?: string,
  titleBadge?: string,
  link?: string,
  imagePath?: string,
  /** 画像の縦幅が Box 自体の横幅を超過した場合、省略して表示するか？ */
  truncateImage: boolean,
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
  truncateImage,
  onImageClick,
  children,
  headerContent,
  footerContent,
  ...chakraProps
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null)
  return (
    <Card ref={cardRef} {...chakraProps}>
      {imagePath && (
        <BoxLink href={link} onClick={onImageClick}>
          {truncateImage ? (
            <BoxImageWrapper
              imagePath={imagePath}
              onImageClick={onImageClick}
              boxRef={cardRef}
            />
          ) : (
            <Center><Image src={imagePath} /></Center>
          )}
        </BoxLink>
      )}
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
  );
}

const BoxTitle = ({ title, titleBadge }: { title: string, titleBadge?: string }) => (
  <Heading as="h3" size="md">
    {title}
    {titleBadge && <Badge colorScheme="green" fontSize="sm" ml={2}>{titleBadge}</Badge>}
  </Heading>
)

export default Box
