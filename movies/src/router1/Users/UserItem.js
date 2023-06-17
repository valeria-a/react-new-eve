import { Link } from "react-router-dom"

const UserItem = ({user}) => {
    return (
        <li>
            <Link to={`${user.id}`}>{user.name}</Link>
        </li>
    )
}

export default UserItem;