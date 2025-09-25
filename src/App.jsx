
import { Suspense } from "react"
import Banner from "./components/Banner"
import CardContainer from "./components/CardContainer"
import Navbar from "./components/Navbar"



const fetchData = async ()=>{
  const result=await fetch('/data.json')
  return result.json()
}


function App() {

  const fetchPromise = fetchData();
  
  return (
    <>
     


     <Navbar></Navbar>
<div className="bg-gray-100">
  <Banner></Banner>
  <Suspense fallback={"loading..."}>

    <CardContainer fetchPromise={fetchPromise}></CardContainer>
  </Suspense>
</div>
     
    </>
  )
}

export default App
