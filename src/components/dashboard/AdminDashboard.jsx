import React from 'react'
import Header from '../other/Header'
import Createtask from '../other/Createtask';
import Alltasks from '../other/Alltasks';

const AdminDashboard = (props) => {
    return (
<div className='p-10'>
    <Header changeUser={props.changeUser}/>
    <Createtask/>
    <Alltasks/>
</div>

     
      );
    
}

export default AdminDashboard
