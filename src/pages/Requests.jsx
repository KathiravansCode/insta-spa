import Users from "../../src/Users"
import UserCard from "../components/UserCard"

function Requests(){
    return (
        <>
        <h1 className="text-center mt-4 text-3xl">Manage your requests</h1>
        {
            Users.map(User=><UserCard name={User.username} img={User.profilePicture} job={User.profession}/>)
        }
        </>
    )
}

export default Requests