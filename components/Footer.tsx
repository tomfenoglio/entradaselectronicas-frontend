import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs"


const Footer = () => {
  return (
    <footer className="w-full z-10 ease-in duration-300 font-inter mt-20 border-t border-gray-200 bg-white/50 py-8 backdrop-blur-lg rounded-t-[140px]">
      <div className="text-center md:flex md:flex-row items-center md:mx-10"> {/* todo metido aca */}

        {/* logo + social networks */}
        <div className="space-y-8 flex flex-col items-center">
          <Link href="/" className="flex gap-2 flex-left text-red-500">
            <Image
              src="/assets/images/ee-full-logo-black.svg"
              alt="logo"
              width={300}
              height={30}
              className="object-contain"
              style={{ filter: "brightness(100) saturate(100%) hue-rotate(0deg) contrast(200%)", color: "red" }}
            />
          </Link>

          <div className="flex items-center space-x-2">
            <a
              href="https://twitter.com/dubdotsh"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
            >
              <span className="sr-only">Facebook</span>
              <BsFacebook size={20} />

            </a>
            <div className="h-8 border-l border-gray-200" />
            <a
              href="https://www.instagram.com/entradaselectronicas/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
            >
              <span className="sr-only">Instagram</span>
              <BsInstagram size={20} />
            </a>
            <div className="h-8 border-l border-gray-200" />
            <a
              href="https://www.linkedin.com/company/dubhq/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
            >
              <span className="sr-only">LinkedIn</span>
              <BsLinkedin size={20} />

            </a>
          </div>
        </div>

        {/* bloque con todos los textos */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:items-center md:m-12 justify-items-center flex-grow">
          <div className="">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Servicios</h3>
              <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <Link href='/' className="text-sm text-gray-500 hover:text-gray-900">
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link href='/' className="text-sm text-gray-500 hover:text-gray-900">
                      FAQ's
                    </Link>
                  </li>
                  <li>
                    <Link href='/' className="text-sm text-gray-500 hover:text-gray-900">
                      Botón de Arrepentimiento
                    </Link>
                  </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div>
              <h3 className="text-sm font-semibold text-gray-600">Legales</h3>
              <ul role="list" className="mt-4 space-y-2">
                  <li>
                  <Link href='/' className="text-sm text-gray-500 hover:text-gray-900">
                      Términos y Condiciones
                    </Link>
                  </li>
                  <li>
                  <Link href='/' className="text-sm text-gray-500 hover:text-gray-900">
                      Politicas de Privacidad
                  </Link>
                  </li>
                  <li>
                  <Link href='/' className="text-sm text-gray-500 hover:text-gray-900">
                      Defensa al Consumidor
                  </Link>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-900/10 pt-8 text-center px-4">
        <p className="text-sm leading-5 text-gray-500">
        entradaselectronicas © {new Date().getFullYear()}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer