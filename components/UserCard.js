import { Box, Flex } from "@chakra-ui/react"

export default function UserCard({ user, onDelete }) {
  const { id, name, email, phone } = user

  return (
    <Flex
      w="full"
      h="full"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      bg="white"
      rounded="xl"
      shadow="lg"
      borderWidth="1px"
      onClick={() => onDelete(id)}
    >
      <Box w="full" h="full">
        <Box
          w="100%"
          position="relative"
          overflow="hidden"
          roundedTop="lg"
        >
        </Box>

        <Box p="6">
          <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {name}
          </Box>

          <Box>{email}</Box>

          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {phone}
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
