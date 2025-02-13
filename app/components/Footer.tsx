import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter,FaSquareInstagram  } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto px-4 mt-8 p-12">
        <div className="flex justify-between gap-8">
          {/* Company Info */}
         
            <h3 className=" text-4xl font-bold mb-4">FinApp</h3>
            <p className="text-slate-300 text-sm">
              Your trusted partner in personal finance management since 2024.
            </p>
            <div className="flex space-x-4">
              <FaFacebook  className="w-5 h-5 text-slate-300 hover:text-white cursor-pointer" />
              <FaXTwitter className="w-5 h-5 text-slate-300 hover:text-white cursor-pointer" />
              <FaSquareInstagram  className="w-5 h-5 text-slate-300 hover:text-white cursor-pointer" />
            </div>
            </div>
          </footer>
  )
}
