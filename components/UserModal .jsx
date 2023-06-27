import Image from "next/image"
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
  Flex,
} from "@chakra-ui/react"

export default function UserModal({ isOpen, onClose, modalData }) {
  const { id, name, email, phone } = modalData || {}
  const toast = useToast()

  const handleModalClose = () => {
    toast({
      title: "Purchase successsful.",
      description: "Fashion ++",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
    setTimeout(() => {
      onClose()
    }, 1000)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Product Details</ModalHeader>
        <ModalBody>
          <Box w="full" h="full">
            <Flex w="full" h="300px" position="relative">
            {name}
            </Flex>

            <Box pt="3">
              <Box
                mt="3"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {email}
              </Box>
              {phone}
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="cyan.700"
            color="white"
            w="150px"
            size="lg"
            onClick={handleModalClose}
            _hover={{ bg: "cyan.800" }}
          >
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
