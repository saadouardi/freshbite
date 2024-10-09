import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Common/Loading/Loading'
import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import './Users.scss';

export const UsersSection = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate  = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Server down or network issue');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        navigate('/error');
        setLoading(false);
      });
  }, [navigate ]);

  const handleEditUser = (userId) => {
    console.log(`Editing user with ID: ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    console.log(`Deleting user with ID: ${userId}`);
  };

  if (loading) {
    return <Loading/>;
  }

  return (
    <section className='Flex-Column'>
      <div className='Title-Section'>
        <h1>User List</h1>
      </div>

      <div className='Content-Section'>
        <table className='User-Table'>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td><img src={user.image} alt='User Avatar' className='User-Avatar' /></td>
                <td>{`${user.firstname} ${user.lastname}`}</td>
                <td>{user.email}</td>
                <td>--/--</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
