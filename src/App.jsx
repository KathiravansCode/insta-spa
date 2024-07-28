import {Route,Routes} from "react-router-dom"
import Requests from "./pages/Requests"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import UserDetails from "./pages/UserDetails"
import Post from "./pages/Post"
function App() {

  return (
    <>
    
    <Navbar></Navbar>
    
    <Routes>
      <Route path='/' element={<Requests/>}/>
      <Route path="/requests" element={<Requests/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/:username" element={<UserDetails/>}/>
      <Route path="/post/:id" element={<Post/>}/>
    </Routes>
        
    </>
  )
}

export default App
