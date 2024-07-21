

const NavBar  = () => {
  return (
    <nav>
    <ul className="flex items-center justify-center space-x-3">
      <li className="underline cursor-pointer hover:text-indigo-200 duration-300 ">home</li>
      <li className="underline cursor-pointer hover:text-indigo-200 ">products</li>
      <li className="underline cursor-pointer hover:text-indigo-200 ">About US</li>
    </ul>
    </nav>
  )
}

export default NavBar