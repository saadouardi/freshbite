import React from 'react';
import './Form.scss';

export const Form = () => {
    return (
        <>
            <div class="Form">
                <form action="">
                    {/* <!-- FULL NAME --> */}
                    <div class="input__container">
                        <input type="text" id="fullname__input" class="fullname__input" placeholder="Full Name" minlength="3" maxlength="30" required/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi form__icon" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                    </div>

                    {/* <!-- PHONE --> */}
                    <div class="input__container">
                        <input type="number" id="fullname__input" class="fullname__input" placeholder="Phone number" minlength="3" maxlength="30" required/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi form__icon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/></svg>
                    </div>

                    {/* <!-- EMAIL --> */}
                    <div class="input__container">
                        <input type="email" id="fullname__input" class="fullname__input" placeholder="Email" minlength="3" maxlength="30" required/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/></svg>
                    </div>

                    {/* <!-- DATE --> */}
                    <div class="input__container">
                        <input type="date" id="date__input" class="fullname__input" placeholder="" minlength="3" maxlength="30" required/>
                    </div>

                    {/* <!-- TIME --> */}
                    <div class="input__container">
                        <input type="time" id="fullname__input" class="fullname__input" placeholder="Time" minlength="3" maxlength="30" required/>
                    </div>

                    {/* <!-- SUBMIT --> */}
                    <div class="input__container">
                        <input type="submit" value="BOOK A TABLE" id="" class=""/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/></svg>
                    </div>
                </form>
            </div>
        </>
    )
}

