
import React from 'react'
import me from "../../public/assets/teacher.jpg"

const Footer = () => {
  return (
    <footer>
    <div className="flex flex-col md:flex-row gap-[10vw] py-4 px-16 bg-gray-400 w-screen relative">
      <div className="copyright">© 2024 - Neelarjun Engineering College All Rights Reserved.</div>
      <div className="Created by text-sm absolute right-10 bottom-0">Need Website - gm4063420@gmail.com</div>
    </div>
    </footer>
  )
}

export default Footer