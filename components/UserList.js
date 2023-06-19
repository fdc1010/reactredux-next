import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { cardVariant, parentVariant } from "@root/motion"
import { motion } from "framer-motion"
import UserCard from "@components/UserCard"

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

export default function UserList({ userIds }) {
  return (
    <Box>
      <MotionSimpleGrid
        mt="4"
        minChildWidth="250px"
        spacing="2em"
        minH="full"
        variants={parentVariant}
        initial="initial"
        animate="animate"
      >            
        {userIds.map((id, i) => (
          <MotionBox variants={cardVariant} key={i}>
            <UserCard id={id} />
          </MotionBox>
        ))}
      </MotionSimpleGrid>
    </Box>
  )
}
