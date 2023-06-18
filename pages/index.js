import { useEffect } from "react"
import { cardVariant, parentVariant } from "@root/motion"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import UserCard from "@components/UserCard"
import { Box, CircularProgress, SimpleGrid, useToast } from "@chakra-ui/react"
import { deleteFailed, deleteUser, fetchUsers, selectAllUsers } from "@my-redux/usersSlice"

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

export default function Home() {
  const toast = useToast()
  const dispatch = useDispatch()
  const { loaded, entities, error } = useSelector(selectAllUsers)
  const toastMessage = (title, message, status) => {
    toast({
      title,
      description: message,
      status: status,
      duration: 3000,
      isClosable: true,
    })
  }
  useEffect(() =>{
    dispatch(fetchUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  useEffect(() =>{
    if(!!error){
      toastMessage("Error Catched.", error, "error")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error])

  const handleOnDelete = (id) => {
    try{
      dispatch(deleteUser(id))
      toastMessage("User Deletion", "Successful", "success")
    }catch(err){
      dispatch(deleteFailed(err?.message ?? "Opps there seems to be an error"))
    }
  }

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
                <UserCard user={user} onDelete={handleOnDelete} />
              </MotionBox>
            ))}
        </MotionSimpleGrid>
      </Box>
    </>
  )
}
