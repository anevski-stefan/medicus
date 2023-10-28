import "../../../public/styles/dashboard.css"
import Link from "next/link"


function LeftMenu({ className }) {
  return (
    <div className={`menu-wrapper font-mono ${className}`}>
        <Link className="logo text-4xl flex justify-center pt-5" href="/">Medicus</Link>
        <ul className='actions-menu text-center flex flex-col justify-between text-xl h-5/6'>
            <div className="h-full flex flex-col justify-center">
              <li className='actions-menu__item'><Link href="/">Appointments</Link></li>
              <li className='actions-menu__item'><Link href="/">Medication Management</Link></li>
              <li className='actions-menu__item'><Link href="/">Symptom Checker</Link></li>
              <li className='actions-menu__item'><Link href="/">Emergency</Link></li>
            </div>
            <li className='actions-menu__item'><Link href="/">Log out</Link></li>
        </ul>
    </div>
  )
}

export default LeftMenu