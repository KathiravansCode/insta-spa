import {Link} from "react-router-dom"
function Feed({img,id}){
    return (
        <Link to={`/post/${id}`}>
          <>
             <img src={img} className="w-[260px] h-[260px] object-cover"/>
          </>
          </Link>
    )
}
export default Feed