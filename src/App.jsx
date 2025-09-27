
import { Suspense, useEffect, useState } from "react"
import { ToastContainer} from 'react-toastify';
import Banner from "./components/Banner"
import CardContainer from "./components/CardContainer"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"





const fetchData = async ()=>{
  const result=await fetch('/data.json')
  return result.json();
  
}



function App() {

    const [countInProgress,setCountInProgress]=useState(0);
    const [selectedTasks,setSelectedTasks]=useState([]);
    const[tickets,setTickets]=useState([]);
    const [resolvedTasks,setResolvedTasks]=useState([]);

    
    useEffect(()=>{
      fetchData().then((data)=>setTickets(data));

    },[]);

  
  const handleInProgress =(clickedTicket)=>{
    setCountInProgress(countInProgress+1);
    if(!selectedTasks.find((t)=>t.id === clickedTicket.id)){
         setSelectedTasks(pre=> [...pre,clickedTicket])
    setTickets(pre=>pre.map(ticket=>
      ticket.id===clickedTicket.id ? {...ticket,status:"In-Progress"}:ticket
    ))
    }
 
  };

  const handleComplete = (ticket)=>{
    setTickets((pre)=>pre.filter(t=>t.id !== ticket.id))
   
    setSelectedTasks((pre)=> pre.filter((t)=>t.id !== ticket.id));
    setResolvedTasks((pre)=>[...pre,{...ticket,status:"Resolved"}]);
  }

  const fetchPromise = fetchData();
  
  return (
    <>
     


     <Navbar></Navbar>
<div className="bg-gray-100">
  <Banner countInProgress={selectedTasks.length}
  countResolved = {resolvedTasks.length} ></Banner>
  <Suspense fallback={"Loading........"}>

    <CardContainer fetchPromise={fetchPromise}
    handleInProgress={handleInProgress}
    selectedTasks={selectedTasks}
    tickets={tickets}
    resolvedTasks={resolvedTasks}
    handleComplete={handleComplete}
    setTickets={setTickets}></CardContainer>
  </Suspense>

  <Footer></Footer>
</div>
     <ToastContainer></ToastContainer>
     
    </>
  )
}

export default App
