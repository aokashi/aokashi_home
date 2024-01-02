import React from "react"
import PropTypes from "prop-types"
import { Box, ChakraProps, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from "@chakra-ui/react"

type Props = {
  src: string,
  alt: string,
  name?: string,
  description?: string,
  imageBg?: ChakraProps["bgColor"],
  onOutsideClick: VoidFunction
}

const ImageModal = ({ src, alt, name, description, imageBg, onOutsideClick }: Props) => (
  <Modal isCentered isOpen onClose={onOutsideClick} scrollBehavior="inside">
    <ModalOverlay bg="blackAlpha.700" />
    <ModalContent>
      {name && (
        <ModalHeader>{name}</ModalHeader>
      )}
      <ModalCloseButton />
      <ModalBody>
        <VStack spacing={6}>
          <Box bgColor={imageBg}>
            <img src={src} alt={alt} />
          </Box>
          {description &&
            <Text>{description}</Text>
          }
        </VStack>
      </ModalBody>
    </ModalContent>
  </Modal>
)

ImageModal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  onOutsideClick: PropTypes.func,
}

ImageModal.defaultProps = {
  alt: "",
}

export default ImageModal
