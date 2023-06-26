import {
  Avatar,
  Flex,
  HStack,
  VStack,
  Text,
  Menu,
  MenuButton
} from "@chakra-ui/react"

export default function UserProfile() {
  return (
    <HStack spacing={{ base: "0", md: "6" }}>
      <Flex alignItems="center">
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack spacing="4">
              <Avatar
                size="md"
                src={
                  "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                }
              />
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="lg">Franklin Caruana</Text>
                <Text fontSize="md" color="gray.600">
                  Admin
                </Text>
              </VStack>
            </HStack>
          </MenuButton>
        </Menu>
      </Flex>
    </HStack>
  )
}
