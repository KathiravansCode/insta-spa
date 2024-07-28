import Users from "../Users"
import { useParams } from "react-router-dom"
import Feed from "../components/Feed"
function UserDetails(){
    let {username}=useParams();
    let user=Users.find(user=>user.username==username) // 
    return (
        <>
         <div className="w-[600px]  p-3 mx-auto my-16 ">
            <div className="flex items-center gap-3">
           <img src={user.profilePicture} className="h-[100px] w-[100px] rounded-full"/>
               <div>
                
                 <p>{user.username}</p>
                 <p>{user.description}</p>
                                               
              </div>
            </div>
            <div className="flex gap-2 items-center mt-1 justify-start ml-24">
                <div className="followers-box bg-lightgray p-2 rounded-lg">
                  <div>{user.followers} Followers</div>
                </div>
                <div className="following-box bg-lightgray p-2 rounded-lg">
                   <div>{user.following} Following</div>
                </div>
            </div>
           
           </div>
        <div className="w-[800px] mx-auto">
          <div className="flex gap-1 items-center">
          {
            user.posts.map(post=><Feed img={post.image} id={post.id}/>)
          }
        </div>
        </div>
        </>
    )
}

export default UserDetails