
import { Suspense, useState } from "react"
import { ToastContainer} from 'react-toastify';
import Banner from "./components/Banner"
import CardContainer from "./components/CardContainer"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card";




const fetchData = async ()=>{
  const result=await fetch('/data.json')
  return result.json()
}


function App() {

    const [countInProgress,setCountInProgress]=useState(0);
    const [selectedTasks,setSelectedTasks]=useState([]);
  
  const handleInProgress =(ticket)=>{
    setCountInProgress(countInProgress+1);
    setSelectedTasks(pre=> [...pre,ticket])
  }

  const fetchPromise = fetchData();
  
  return (
    <>
     


     <Navbar></Navbar>
<div className="bg-gray-100">
  <Banner countInProgress={countInProgress} ></Banner>
  <Suspense fallback={"Loading........"}>

    <CardContainer fetchPromise={fetchPromise}
    handleInProgress={handleInProgress}
    selectedTasks={selectedTasks}></CardContainer>
  </Suspense>

  <Footer></Footer>
</div>
     <ToastContainer></ToastContainer>
     
    </>
  )
}

export default App
