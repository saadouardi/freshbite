import React  from 'react';
import { Header } from '../../../components/Admin/Common/Header/Header';
import { Sidebar } from '../../../components/Admin/Common/Sidebar/Sidebar';
import Person from '../../../assets/images/author/a-1.png'

const headers = ["ID", "Name", "Email", "Phone", "Location", "Actions"];
const Contacts = () => {
    return (
        <div className='admin-page'>
            <aside className='admin'>
                <Sidebar/>
            </aside>
            <main className='admin'>
                <Header/>
                <div className='Flex-Center'>
                    <table>
                        <thead>
                            <tr key="">
                                {headers.map((header, index) =>(
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="">
                                <td>#12345</td>
                                <td>
                                    <div className='Flex-Center'>
                                        <img src={Person} alt="" className='Profile' />
                                        <span>John Doe</span>
                                    </div>
                                </td>
                                <td>john@gmail.com</td>
                                <td>+4915216422700</td>
                                <td>Frankfurt</td>
                                <td>
                                    <div className='Flex-Center'>
                                    <button type="button" class="btn btn-dark">View</button>
                                    <button type="button" className="btn btn-danger">Cancel</button>
                                    </div>
                                </td>
                            </tr>
                            <tr key="">
                                <td>#12345</td>
                                <td>
                                    <div className='Flex-Center'>
                                        <img src={Person} alt="" className='Profile' />
                                        <span>John Doe</span>
                                    </div>
                                </td>
                                <td>john@gmail.com</td>
                                <td>+4915216422700</td>
                                <td>Frankfurt</td>
                                <td>
                                    <div className='Flex-Center'>
                                    <button type="button" class="btn btn-dark">View</button>
                                    <button type="button" className="btn btn-danger">Cancel</button>
                                    </div>
                                </td>
                            </tr>
                            <tr key="">
                                <td>#12345</td>
                                <td>
                                    <div className='Flex-Center'>
                                        <img src={Person} alt="" className='Profile' />
                                        <span>John Doe</span>
                                    </div>
                                </td>
                                <td>john@gmail.com</td>
                                <td>+4915216422700</td>
                                <td>Frankfurt</td>
                                <td>
                                    <div className='Flex-Center'>
                                    <button type="button" class="btn btn-dark">View</button>
                                    <button type="button" className="btn btn-danger">Cancel</button>
                                    </div>
                                </td>
                            </tr>
                            <tr key="">
                                <td>#12345</td>
                                <td>
                                    <div className='Flex-Center'>
                                        <img src={Person} alt="" className='Profile' />
                                        <span>John Doe</span>
                                    </div>
                                </td>
                                <td>john@gmail.com</td>
                                <td>+4915216422700</td>
                                <td>Frankfurt</td>
                                <td>
                                    <div className='Flex-Center'>
                                    <button type="button" class="btn btn-dark">View</button>
                                    <button type="button" className="btn btn-danger">Cancel</button>
                                    </div>
                                </td>
                            </tr>
                            <tr key="">
                                <td>#12345</td>
                                <td>
                                    <div className='Flex-Center'>
                                        <img src={Person} alt="" className='Profile' />
                                        <span>John Doe</span>
                                    </div>
                                </td>
                                <td>john@gmail.com</td>
                                <td>+4915216422700</td>
                                <td>Frankfurt</td>
                                <td>
                                    <div className='Flex-Center'>
                                    <button type="button" class="btn btn-dark">View</button>
                                    <button type="button" className="btn btn-danger">Cancel</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                        </tfoot>
                    </table>
                </div>
            </main>
        </div>
    );
};
export default Contacts;
