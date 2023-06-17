import { useLoaderData } from "react-router-dom"
import { USERS } from "./data"
import { Stack } from "@mui/material"

export async function loader({params}) {
    console.log(params)
    // note the diff between == and ===
    const f = USERS.find(u => u.id === Number(params.userId))
    console.log(f)
    return f
}

const UserDetails = () => {

    const userDetails = useLoaderData()

    return (
        <Stack border={'1px grey solid'} width={'fit-content'}>
            <h2>Selected user details:</h2>
            <p>User id: {userDetails.id}</p>
            <p>User name: {userDetails.name}</p>
        </Stack>
    )
}

export default UserDetails