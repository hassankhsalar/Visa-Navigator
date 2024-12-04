
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <div>
        <div>
        <Navbar></Navbar>
        </div>
        <div className='min-h-screen'>
        <Outlet></Outlet>
        </div>
        <div>
        <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App
