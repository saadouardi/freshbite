import React from 'react';
import { Header } from '../../components/Common/Header/Header';
import { Sidebar } from '../../components/Common/Sidebar/Sidebar';
import { UsersSection } from '../../sections/Users/Users';
import './Users.scss';

const Users = () => {


  return (
    <main>
        <Sidebar/>
        <div className='Main-Content'>
        <Header/>
            <div className="Sections">
                <UsersSection/>
            </div>
        </div>
    </main>
  );
};

export default Users;
