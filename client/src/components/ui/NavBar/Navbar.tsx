import { Link } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeCounter } from '@/store/cartSlice'
const Navbar = () => {
  let {counter} = useSelector((state)=>state.counterData)
  let dispatch =  useDispatch()

    return (
      <>
       {/* <!-- follow me on twitter @asad_codes --> */}

<div className="d-flex justify-between align-items-center">
  <section className="relative mx-auto">
      {/* <!-- navbar --> */}
    <nav className="flex justify-between bg-grey text-gray-700  w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="/">
           {/* <img className="h-9" src="logo.png" alt="logo"/>  */}
           <h2 className='text-primary'>Book<span className='text-danger'> Shop</span></h2>
          {/* Logo Here. */}
        </a>
        {/* <!-- Nav Links --> */}
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><Link className="hover:text-gray-950" to={'/'}>Home</Link></li>
          <li><a className="hover:text-gray-950" href="#">Shop</a></li>
          <li><a className="hover:text-gray-950" href="#">About Us</a></li>
          <li><a className="hover:text-gray-950" href="#">Contact </a></li>
        </ul>
        <div className="lg:flex hidden items-center space-x-2 border-2 border-gray-400 text-gray-600 py-1 px-2 rounded-full mx-5">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input className="outline-none text-dark " type="text" placeholder="Search" />
        </div>
        {/* <!-- Header Icons --> */}
        <div className="hidden xl:flex items-center space-x-5 items-center">
          <a className="hover:text-gray-950" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </a>
          <a className="flex items-center hover:text-gray-950" href="#" >
              <svg  onClick={()=>{dispatch(changeCounter(counter++))}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                <p className="flex absolute -mt-2 ml-0 text-light fw-bold"> {counter}</p>
                </span>
              </span>
          </a>
          {/* <!-- Sign In / Register      --> */}
          <a className="flex items-center hover:text-gray-950" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </a>
          
        </div>
      </div>
      {/* <!-- Responsive navbar --> */}
      <a className="xl:hidden flex mr-6 items-center" href="/" onClick={()=>{dispatch(changeCounter())}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="flex absolute -mt-5 ml-4" >
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
          </span>
        </span>
      </a>
      <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </a>
    </nav>
    
  </section>
</div>
{/* <!-- Does this resource worth a follow? --> */}
<div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Follow me on twitter" href="https://www.twitter.com/asad_codes" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"/>
        </a>
    </div>
</div>
      </>
    )
  }
  export default Navbar