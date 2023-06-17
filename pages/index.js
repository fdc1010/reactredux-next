import { useState, useEffect } from "react"
import { cardVariant, parentVariant } from "@root/motion"
import UserModal from "@components/UserModal "
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import UserCard from "@components/UserCard"
import { Box, CircularProgress, SimpleGrid } from "@chakra-ui/react"
import { fetchUsers, selectAllUsers } from "@my-redux/usersSlice"

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

export default function Home() {
  const [modalData, setModalData] = useState({})
  const dispatch = useDispatch()
  const { loaded, entities } = useSelector(selectAllUsers)
  useEffect(() =>{
    dispatch(fetchUsers())
    },[dispatch])

  return (
    <>
      {!loaded && <CircularProgress isIndeterminate />}
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
          {loaded &&
            entities.map((user, i) => (
              <MotionBox variants={cardVariant} key={i}>
                <UserCard user={user} setModalData={setModalData} />
              </MotionBox>
            ))}
        </MotionSimpleGrid>
        <UserModal
          isOpen={(!!modalData?.id)}
          onClose={() => setModalData(null)}
          modalData={modalData}
        />
      </Box>
    </>
  )
}
