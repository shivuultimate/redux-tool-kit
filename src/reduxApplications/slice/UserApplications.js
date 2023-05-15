import { useDispatch,useSelector } from "react-redux";
import { fetchUserDetails } from "./actionReducers";
import { useState } from "react";
import AppsModal from "../modal/AppsModal";

function UserApplications() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  }
  const handleOk = () => {
    setIsModalOpen(false);
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const dispatch=useDispatch();
  const {data, isLoading}=useSelector(state=>state.users);
  if(isLoading){
    return <h1>loading...</h1>
  }  

  return (
    <div className="App">
      <button onClick={(e)=>dispatch(fetchUserDetails())}>FETCH USER DETAILS</button>
      <AppsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {data?.map((e)=><li>{e}</li>)},
    </div>
   
    
 
  )
};

export default UserApplications;