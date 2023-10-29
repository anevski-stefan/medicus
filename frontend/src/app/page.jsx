import Navbar from "./components/Navbar"
import "../../public/styles/home.css"
import "../../public/styles/navbar.css"


export default function Home() {
  return (
    <div className="bg flex w-full h-screen flex justify-center">
      <div className="content-wrapper w-9/12">
        <div className="navigation-wrapper">
          <Navbar/>
          <header className='header text-2xl text-center text-white leading-relaxed'>
            <h1>
              Welcome to your personal healtcare assistant. 
            </h1>
            <p>You have to register/sign in for you to use the application.</p>
          </header>
        </div>
      </div>
    </div>
  )
}
