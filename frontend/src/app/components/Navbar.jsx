import Link from "next/link"

function Navbar() {
  return (
    <nav className='navbar font-sans text-xl flex justify-between items-center text-white p-5'>
        <Link href="/">Medicus</Link>
        <ul className='navbar__list flex uppercase'>
            <li className='navbar__list__item'><Link href="/register">Register</Link></li>
            <li className='navbar__list__item ml-5'><Link href="/login">Log in</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar