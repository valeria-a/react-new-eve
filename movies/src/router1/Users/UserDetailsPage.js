import { useLoaderData } from "react-router-dom"
import { USERS } from "./data"

export async function loader({params}) {
    console.log(params)
    // note the diff between == and ===
    const f = USERS.find(u => u.id === Number(params.userId))
    console.log(f)
    return f
}

const UserDetailsPage = () => {

    const userDetails = useLoaderData()

    return (
        <>
            <h2>User details page</h2>
            <p>User id: {userDetails.id}</p>
            <p>User name: {userDetails.name}</p>
        </>
    )
}

export default UserDetailsPage