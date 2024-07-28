import {Link} from 'react-router-dom'


function UserCard({img,job,name}){
    return (
        <>
        <Link to={`/${name}`} className="hover:cursor-pointer">
        <div className="w-[300px] mx-auto mt-12 bg-lightgray rounded-lg p-2">
              <div className="flex  gap-3 items-center ml-2">
                  <img src={img} alt="" className="w-[40px] h-[40px] rounded-full" />
                  <div>
                    <p>{name}</p>
                    <p className="text-sm">{job}</p>
                  </div>
              </div>
          
        </div>
        </Link>
        </>
    )
}
export default UserCard