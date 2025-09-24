import React, { useEffect, useRef, useState } from "react";
import { Box as ChakraBox, Button, Center, BoxProps } from "@chakra-ui/react";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import Image from "../Image";

interface Props {
  imagePath: string | FileNode;
  /** このコンポーネントを囲う Card コンポーネントの Ref (横幅の測定に必要) */
  boxRef?: React.RefObject<HTMLDivElement>;
  onImageClick?: VoidFunction;
}

/**
 * Box コンポーネントの上部の画像部分です。
 * 高さが超過した場合は「全体を見る」ボタンが表示されます。
 */
export const BoxImageWrapper = ({ imagePath, boxRef, onImageClick }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [overSize, setOverSize] = useState(false);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      // 画像の切り詰め機能は GatsbyImage では要素に ref を渡せないため機能しない
      // 現状素材で利用する場合全部 ChakraImage での表示のため、 GatsbyImage で対応する必要がないため
      if (imageRef.current && boxRef.current) {
        const imageRefElement = imageRef.current;
        const boxRefElement = boxRef.current;
        setOverSize(
          () => imageRefElement.clientHeight > boxRefElement.clientWidth
        );
      }
    });
    resizeObserver.observe(boxRef.current!);
    return () => {
      resizeObserver.disconnect();
    };
  }, [boxRef]);

  const wrapperProps: BoxProps = overSize
    ? {
        aspectRatio: "1 / 1",
        overflowY: "hidden",
        position: "relative",
        textAlign: "center",
      }
    : {
        textAlign: "center",
      };

  return (
    <ChakraBox {...wrapperProps}>
      <Image chakraImageRef={imageRef} src={imagePath} style={{ display: "inline" }} />
      {overSize && (
        <Center
          position="absolute"
          bottom={0}
          width="full"
          height="50%"
          bgGradient="linear(to-b, #c0c0c000, #c0c0c0ff)"
        >
          <Button position="absolute" bottom={0} mb={2} onClick={onImageClick}>
            全体を見る
          </Button>
        </Center>
      )}
    </ChakraBox>
  );
};
