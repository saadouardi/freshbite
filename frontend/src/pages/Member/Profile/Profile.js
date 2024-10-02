import React from 'react'
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../components/Public/common/Footer/Footer';
import { UserCard } from '../../../components/Member/UserCard/UserCard';
import './Profile.scss';

const Profile = () => {
    return (
        <>
            <Header/>
            <PageSection Title='My Profile' Description=''/>
            <main>
                <div className='Flex-Center Flex-Start'>
                    <UserCard/>
                    <div className='user-dashboard'>
                        <div className='dahsboard-title'>
                            <h1>My Profile</h1>
                            <p>Manage your account’s details.</p>
                        </div>
                        <div className='dashboard-inputs'>
                            <div className='personal-details'>
                                <h1>Personal details</h1>
                                <div className='Flex-Center'>
                                    <div className='Flex-Center Flex-Start Flex-Column'>
                                        <label>First name</label>
                                        <input type="text" placeholder='Your First name' />
                                    </div>
                                    <div className='Flex-Center Flex-Start Flex-Column'>
                                        <label>Last name</label>
                                        <input type="text" placeholder='Your Last name' />
                                    </div>
                                </div>
                                <div className='Flex-Center'>
                                    <div className='Flex-Center Flex-Start Flex-Column'>
                                        <label>Email address</label>
                                        <input type="email" placeholder='Your Email address' />
                                    </div>
                                    <div className='Flex-Center Flex-Start Flex-Column'>
                                        <label>Mobile number</label>
                                        <input type="text" placeholder='Your Mobile number' />
                                    </div>
                                </div>
                                <button>Save changes</button>
                            </div>
                            <div className='address'>
                                <h1>Address</h1>
                                <div className='Flex-Center'>
                                    <div className='Flex-Center Flex-Start Flex-Column'>
                                        <input type="address" placeholder='Address Line 1' />
                                    </div>
                                    <div className='Flex-Center Flex-Start Flex-Column'>
                                        <input type="address" placeholder='Address Line 2' />
                                    </div>
                                </div>
                                <div className='Flex-Center'>
                                    <div className='Flex-Center Flex-Start Flex-Column'>
                                        <input type="address" placeholder='City' />
                                    </div>
                                    <div className='double-inputs Flex-Center Flex-Start'>
                                        <input type="address" placeholder='Region' />
                                        <input type="address" placeholder='Postal Code' />
                                    </div>
                                </div>
                                <div className='Flex-Center'>
                                    <div className='Flex-Center Flex-Start'>
                                        <input type="address" placeholder='Country/Region' />
                                    </div>
                                </div>
                                <button>Save changes</button>
                            </div>
                            <div className='delete-account'>
                                <h1>Delete Account</h1>
                                <p>Are you sure you want to delete your account?</p>
                                <button className='Danger'>Request Account Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Profile;
