import Header from "@components/Header"
import { Box, useDisclosure } from "@chakra-ui/react"

export default function Layout({ children }) {
  const { onOpen } = useDisclosure()
  return (
    <Box minH="100vh" bg="gray.100">
      <Header onOpen={onOpen} />
      <Box p="4">
        {children}
      </Box>
    </Box>
  )
}
