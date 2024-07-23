

const NavBar  = ({setPage}:{setPage:(page:'home' | 'products' | 'about' |'useeffect')=>void}) => {
  return (
    <nav>
    <ul className="flex items-center justify-center space-x-3">
      <li className="underline cursor-pointer hover:text-indigo-200 duration-300 "onClick={()=>{
         setPage("home")
      }}>home</li>
      <li className="underline cursor-pointer hover:text-indigo-200 " onClick={()=>setPage("products")}>products</li>
      <li className="underline cursor-pointer hover:text-indigo-200 "onClick={()=>{setPage("about")}}>About US</li>
      <li className="underline cursor-pointer hover:text-indigo-200 "onClick={()=>{setPage("useeffect")}}>UseEffect</li>
    </ul>
    </nav>
  )
}

export default NavBar