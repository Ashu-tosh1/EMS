import React from 'react'
import Header from '../other/Header'
import Taskno from '../other/Taskno'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#ICIC]'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <Taskno data={props.data}/>
        <Tasklist data={props.data}/>
      
    </div>
  )
}

export default EmployeeDashboard
