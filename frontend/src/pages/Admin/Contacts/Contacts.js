import React from 'react';
import { Header } from '../../components/Common/Header/Header';
import { Sidebar } from '../../components/Common/Sidebar/Sidebar';
import { ContactsSection } from '../../sections/Contacts/Contacts';
import './Contacts.scss';

const Contacts = () => {
    return (
        <main>
            <Sidebar/>
            <div className='Main-Content'>
            <Header/>
                <div className="Sections">
                    <ContactsSection/>
                </div>
            </div>
        </main>
    );
};

export default Contacts;