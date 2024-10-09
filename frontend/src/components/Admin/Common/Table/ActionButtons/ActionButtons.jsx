import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ActionButtons.scss';

export const Update = ({link,id}) => {
    return (
        <Link to={`/${link}/update/${id}`}>
            <button className='Update-Btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4C9.25144 4 6.82508 5.38626 5.38443 7.5H8V9.5H2V3.5H4V5.99936C5.82381 3.57166 8.72764 2 12 2C17.5228 2 22 6.47715 22 12H20C20 7.58172 16.4183 4 12 4ZM4 12C4 16.4183 7.58172 20 12 20C14.7486 20 17.1749 18.6137 18.6156 16.5H16V14.5H22V20.5H20V18.0006C18.1762 20.4283 15.2724 22 12 22C6.47715 22 2 17.5228 2 12H4Z"></path></svg>
            </button>
        </Link>
    )
}


export const Delete = ({id,ItemImage,ItemName}) => {
    const [Delete,setDelete] = useState(false)
    const handleDelete = () =>{
        setDelete(!Delete);
        console.log(`delete item with id ${id}`)
    }

    return (
        <>
            <button className='Delete-Btn' onClick={handleDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path></svg>            
            </button>

            { Delete &&
                <div className='Box'>

                    <div className='Delete-Container'>
                        <div className='Icon-Bg' onClick={handleDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                        </div>
                    </div>

                    <h3>Are you sure you want to delete this item?</h3>

                    <div className='Flex-Center'>
                        <img src={ItemImage} alt={ItemName} />
                        <p>{ItemName}</p>
                        <p>{id}</p>
                    </div>

                    <button className='Delete-Yes'>Yes</button>
                    <button className='Delete-No'>No</button>
                </div>
            }

            
        </>
    )
}