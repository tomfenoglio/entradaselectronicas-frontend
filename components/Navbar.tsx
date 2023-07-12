"use client"; // para renderizar el componente desde el cliente y poder usar los hooks de react

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {signIn, signOut, useSession, getProviders} from "next-auth/react";
import { images } from "@next.config";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"


const Nav = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState("transparent")
  const [textColor, setTextColor] = useState("white")

  const handleNav = () => {
    setNav (!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90) {
        setColor("border-b border-gray-200 bg-white/60 backdrop-blur-lg")
        setTextColor("#000000")
      } else {
        setColor("transparent")
        setTextColor("#ffffff")
      }
    };
    window.addEventListener("scroll", changeColor);
    const scrollPosition = window.scrollY;

  }, []);


  return (
    <div className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 sm:px-8 font-inter ${color}`}>
    <nav className="max-w-[1240px] m-auto flex justify-between items-center sm:p-1 p-4 px-6">
      <Link href='/' className='flex gap-2 flex-left'>

        <Image
          src='/assets/images/ee-logo-black-onlytext.svg'
          alt='logo'
          width={240}
          height={30}
          className="object-contain text-red-500"
        />
      </Link>
      <ul className="hidden sm:flex items-center">
        <li className="p-3 text-gray-500 hover:text-black text-sm">
          <Link href='/'>Soporte</Link>
        </li>
        <li className="p-3 text-gray-500 hover:text-black text-sm">
          <Link href='/'>Ingresar</Link>
        </li>
        <li className="p-3">
          <Link
              href={
                process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
                  ? "https://app.dub.sh/register"
                  : "http://app.localhost:3000/register"
              }
              className="rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
            >
              Registrar
          </Link>
        </li>

      </ul>
      {/* Mobile Button */}
      <div onClick={handleNav} className="block sm:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

      </div>

      {/* Mobile Menu */}
      <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-white" : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-white"}>
      <ul>
        <li className="p-4 text-4xl hover:text-gray-500">
          <Link href='/'>Home</Link>
        </li>
        <li className="p-4 text-4xl hover:text-gray-500">
          <Link href='/'>Ingresar</Link>
        </li>
        <li className="p-4 text-4xl hover:text-gray-500">
          <Link href='/'>Registrar</Link>
        </li>
        <li className="p-4 text-4xl hover:text-gray-500">
          <Link href='/'>Crear Evento</Link>
        </li>
      </ul>
      </div>
    </nav>
    </div>
  )
}




export default Nav

