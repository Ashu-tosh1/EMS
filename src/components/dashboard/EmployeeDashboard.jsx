import React from 'react'
import Header from '../other/Header'
import Taskno from '../other/Taskno'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#ICIC]'>
        <Header/>
        <Taskno/>
        <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard
