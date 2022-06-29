import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
       <div>
            <Link href="/">
                <img  className="w-44 object-contain cursor-pointer"src='https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60' alt="" />
            </Link>
       </div>
       <div>

       </div>
    </header>
  )
}
