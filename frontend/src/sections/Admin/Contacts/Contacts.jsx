import React ,{useState , useEffect } from 'react';
import { Table } from '../../components/Common/Table/Table';
import './Contacts.scss';

export const ContactsSection = () => {

    const [Contacts, setContacts] = useState([]);
    
        useEffect(() => {
            fetchContacts();
        }, []);
    
        const fetchContacts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch contacts');
                }
                const data = await response.json();
                setContacts(data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };
    
    const HeaderTitles = [
        'ID',
        'Profile',
        'Name',
        'Email',
        'Joined at'
    ];
    const RowTitles = Contacts.map(contact => ({
        id: contact.id.toString(),
        profile: contact.image,
        userFullname: contact.firstname.toString() + contact.lastname.toString(),
        useremail: contact.email.toString(),
        userJoinedat: contact.created_at.toString()
    }));
    

    return (
        <section className='Flex-Column'>
            <div className='Title-Section'>
                <h1>CONTACTS</h1>
            </div>
            <div className='Content-Section'>
                <Table NumofRows={HeaderTitles.length} HeaderTitles={HeaderTitles} RowTitles={RowTitles} />
            </div>
        </section>
    );
};

