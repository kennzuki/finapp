import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
      <div>
          <nav className="flex place-content-end p-6 bg-white shadow">
              <button className="bg-blue-400 text-white py-2 px-4 font-bold rounded-xl">
                  <Link href={'./dashboard'}>Dashboard</Link>
         </button>
          </nav>
    </div>
  )
}

