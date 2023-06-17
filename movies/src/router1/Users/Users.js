import { Outlet, useLoaderData } from "react-router-dom";
import UserItem from "./UserItem"
import { USERS } from "./data"


export async function loader() {
  return USERS;
}

const UsersPage = () => {

    // const items = USERS.map(user => <UserItem user={user}/>)
    const usersData = useLoaderData()
    const items = usersData.map(user => <UserItem key={user.id} user={user}/>)

    return(
        <>
            <h2>Users page</h2>
            <ul>
                {items}
            </ul>
            <Outlet />
        </>
    )
}

export default UsersPage;