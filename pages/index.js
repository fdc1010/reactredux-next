import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CircularProgress } from "@chakra-ui/react"
import { fetchUsers, selectUserIds } from "@my-redux/usersSlice"
import UserList from "@components/UserList"

export default function Home() {
  const dispatch = useDispatch()
  const ids = useSelector(selectUserIds)
  
  useEffect(()=>{
    dispatch(fetchUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return ids.length === 0 ? <CircularProgress isIndeterminate /> : <UserList userIds={ids} /> 
}
