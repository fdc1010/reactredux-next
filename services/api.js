import axios from "axios"

export async function getUserList({id=0}){
  const query = !!id ? `/${id}` : ""
  return await axios
    .get(`https://jsonplaceholder.typicode.com/users${query}`)
    .then((resp) => resp.data.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1))
    .catch((err) => (err?.message ?? "unknown error occured"))      
}