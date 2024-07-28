import {Link} from 'react-router-dom'

function Navbar(){
    return (
        <>
        <div className="p-3 border-b">
        <div className="w-full mx-auto flex items-center  justify-between mt-0 p-3">
            {/* <a href="/" className="font-bold ">React App</a> */}
            <Link to={'/'} className="font-bold text-2xl">Instagram</Link>
            <div className="flex gap-2 text-left">
                <Link to={'/requests'}>Requests</Link>
                <Link to={'/contact'}>Contact us</Link>
            </div>
          </div>
          </div>
        </>
      
    )
}
export default Navbar