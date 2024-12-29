import React from 'react'
import Accepttask from './Accepttask'
import NewTask from './NewTask'
import Completetask from './Completetask'
import Failed from './Failed'

const Tasklist = ({data}) => {
  return (
    <div >
      <div id="tasklist"  className=" h-[270px] flex justify-start items-center gap-5  py-5  mt-10 w-[100%] overflow-x-auto">
      
    {data.tasks.map((elem,idx)=>{
      if(elem.active){
        return <Accepttask key={idx} data={elem}/>
      }
      if(elem.newTask){
        return <NewTask key={idx} data={elem}/>
      }
      if(elem.completed){
        return <Completetask key={idx} data={elem}/>
      }
      if(elem.failed){
        return <Failed key={idx} data={elem}/>
      }
    })}
    
    </div>
      
    </div>
  )
}

export default Tasklist
