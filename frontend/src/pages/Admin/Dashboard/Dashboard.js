import React from 'react';
import { Sidebar } from '../../../components/Admin/Common/Sidebar/Sidebar';
import { Statistics } from '../../../sections/Admin/Statistics/Statistics';

const Dashboard = () => {
  return (
    <main>

      <div className='Main-Contents Flex-Center'>
        <aside>
          <Sidebar/>
        </aside>
        <div className=''>
          <Statistics/>
          <Statistics/>
          <Statistics/>
          <Statistics/>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
