import React from 'react';
import { Sidebar } from '../../../components/Admin/Common/Sidebar/Sidebar';
import { Header } from '../../../components/Admin/Common/Header/Header';
import { Statistics } from '../../../sections/Admin/Statistics/Statistics';
import './Dashboard.scss';
const Dashboard = () => {
  return (
    <div className='admin-page'>
      <aside className='admin'>
        <Sidebar/>
      </aside>
      <main className='admin'>
        <Header/>
        <div className='Flex-Center'>
            <Statistics/>
            <Statistics/>
            <Statistics/>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;