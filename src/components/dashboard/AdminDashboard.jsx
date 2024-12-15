import React from 'react'
import Header from '../other/Header'
import Createtask from '../other/Createtask';
import Alltasks from '../other/Alltasks';

const AdminDashboard = () => {
    return (
<div className='p-10'>
    <Header/>
    <Createtask/>
    <Alltasks/>
</div>

     
      );
    
}

export default AdminDashboard
