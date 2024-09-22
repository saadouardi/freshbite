import React from 'react';
import './Schedule.scss';

export const Schedule = () => {
    return (
        <>
            <div class="main-schedule_container">
                <h1>OPENING HOURS</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing<br/>
                    elit. Et, inventore hic nulla, provident laudantium<br/>
                    voluptate ipsa eligendi commodi mollitia vero animi,<br/>
                    repudiandae quidem minima est sint sapiente quas iure deleniti.
                </p>

                {/* <!-- SCHEDULE DAYS --> */}
                <div class="schedule-list_container">
                    
                    <div class="schedule">
                        <h5>Monday-Friday</h5>
                        <h5>8AM-6PM</h5>
                    </div>
                    <hr/>

                    <div class="schedule">
                        <h5>Saturday</h5>
                        <h5>9AM - 5PM</h5>
                    </div>
                    <hr/>

                    <div class="schedule">
                        <h5>Sunday</h5>
                        <h5>9AM-4PM</h5>
                    </div>
                    <hr/>
                </div>
            </div>
        </>
    )
}

