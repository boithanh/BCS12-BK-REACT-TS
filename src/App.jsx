import { useState } from 'react'
//Xóa 2 dòng không sử dụng đi
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import HeaderDemo from './components/HeaderDemo'
import Navigation from './components/Navigation'
import Content from './components/Content'
import Footer from './components/Footer'
import Home from './components/Home'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container mx-auto w-2/5 my-40 rounded-md">
    <Home/>
    <HeaderDemo/>
   
    <div class="grid grid-cols-3"> 
    <Navigation/>
    <Content/>
    </div>
  
    <Footer/>
  {/* <h1 className='text-red-600'>Tôi là quách khải</h1>; */}
    </div>
  )
}

export default App
