import React, { useState , useEffect } from 'react';
import './User.scss';

export const User = ({userId}) => {
    const [Profile, setProfile] = useState(false);
    const handleProfile = () => {
        setProfile(!Profile);
    }
    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userId');
        localStorage.removeItem('userType');
        window.location.href = '/login';
    };
    const [Member,setMember] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/user')
            .then(response =>{
                if(!response.ok){
                    throw new Error(`error! status: ${response.status}`)
                }
                return response.json()
            })
            .then(data =>{
                setMember(data);
            })
            .catch(error =>{
                console.error(`error fetching member ${error}`)
            })

    }, [])
    return (
        <>
            <>
                <div className='User-Profile'>
                    <div className='icon' onClick={handleProfile}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>                    
                    </div>
                    {Profile &&
                        <div className='DropdownMenu'>
                            <div className='Dropdown User-Loggedin'>
                                <a href='/profile'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>                    
                                    <span>Saad Ouardi</span>
                                </a>
                                <hr/>
                                <a href='/order'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi wishlist__icon" viewBox="0 0 16 16"><path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/></svg>
                                    <span>Order</span>
                                </a>
                                <a href='/wishlist'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi wishlist__icon" viewBox="0 0 16 16"><path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/></svg>
                                    <span>Wishlist</span>
                                </a>
                                <a href='/notifications'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 20H2V18H3V11.0314C3 6.04348 7.02944 2 12 2C16.9706 2 21 6.04348 21 11.0314V18H22V20ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path></svg>
                                    <span>Notifications</span>
                                </a>
                                <a href='/settings'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.68637 4.00008L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348L15.3138 4.00008H19.0001C19.5524 4.00008 20.0001 4.4478 20.0001 5.00008V8.68637L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L20.0001 15.3138V19.0001C20.0001 19.5524 19.5524 20.0001 19.0001 20.0001H15.3138L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L8.68637 20.0001H5.00008C4.4478 20.0001 4.00008 19.5524 4.00008 19.0001V15.3138L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L4.00008 8.68637V5.00008C4.00008 4.4478 4.4478 4.00008 5.00008 4.00008H8.68637ZM12.0001 15.0001C13.6569 15.0001 15.0001 13.6569 15.0001 12.0001C15.0001 10.3432 13.6569 9.00008 12.0001 9.00008C10.3432 9.00008 9.00008 10.3432 9.00008 12.0001C9.00008 13.6569 10.3432 15.0001 12.0001 15.0001Z"></path></svg>
                                    <span>Settings</span>
                                </a>
                                <hr/>
                                <a href='/support'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"></path></svg>                                        
                                    <span>Help & support</span>
                                </a>
                                <hr/>
                                <button onClick={handleLogout} className='Logout Flex-Center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"></path></svg>
                                    <span>Logout</span>
                                </button>
                            </div>
                            {/* <div className='Dropdown UserNotLoggedIn'>
                                <p className='Flex-Center'>Sign in<a href="/forgot-password">Create an Account</a></p>
                                <form>
                                    <div className='Flex-Center Flex-Column Flex-Start'>
                                        <label>Username or email <sup>*</sup></label>
                                        <input type="text" placeholder='Username' />
                                    </div>
                                    <div className='Flex-Center Flex-Column Flex-Start'>
                                        <label>Password <sup>*</sup></label>
                                        <input type="password" placeholder='Password' />
                                    </div>
                                    <div>
                                        <buthrefn>LOGIN</buthrefn>
                                    </div>
                                </form>
                                <p><a href="/forgot-password">Last your password?</a></p>
                            </div> */}
                        </div>
                    }
                </div>
            </>
        </>
    )
}