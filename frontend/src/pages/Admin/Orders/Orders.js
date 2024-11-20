import React  from 'react';
import { Header } from '../../../components/Admin/Common/Header/Header';
import { Sidebar } from '../../../components/Admin/Common/Sidebar/Sidebar';
import Person from '../../../assets/images/author/a-1.png'
import Burger from '../../../assets/images/menu/burgers/BeefBurger.png'
import './Orders.scss';

const headers = ["Order ID", "Order Name", "Customer Name", "Location", "Order Status", "Order Date", "Actions"];
const Orders = () => {
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
                                        <img src={Burger} alt="" className='medium' />
                                        <span>Cheese Burger</span>
                                    </div>
                                </td>
                                <td>
                                    <div className='Flex-Center'>
                                        <img src={Person} alt="" className='Profile' />
                                        <span>John Doe</span>
                                    </div>
                                </td>
                                <td>Frankfurt</td>
                                <td>Pending</td>
                                <td>2020-01-01</td>
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
                                        <img src={Burger} alt="" className='medium' />
                                        <span>Cheese Burger</span>
                                    </div>
                                </td>
                                <td>
                                    <div className='Flex-Center'>
                                        <img src={Person} alt="" className='Profile' />
                                        <span>John Doe</span>
                                    </div>
                                </td>
                                <td>Frankfurt</td>
                                <td>Pending</td>
                                <td>2020-01-01</td>
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
                                        <img src={Burger} alt="" className='medium' />
                                        <span>Cheese Burger</span>
                                    </div>
                                </td>
                                <td>
                                    <div className='Flex-Center'>
                                        <img src={Person} alt="" className='Profile' />
                                        <span>John Doe</span>
                                    </div>
                                </td>
                                <td>Frankfurt</td>
                                <td>Pending</td>
                                <td>2020-01-01</td>
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
                                        <img src={Burger} alt="" className='medium' />
                                        <span>Cheese Burger</span>
                                    </div>
                                </td>
                                <td>
                                    <div className='Flex-Center'>
                                        <img src={Person} alt="" className='Profile' />
                                        <span>John Doe</span>
                                    </div>
                                </td>
                                <td>Frankfurt</td>
                                <td>Pending</td>
                                <td>2020-01-01</td>
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
                                        <img src={Burger} alt="" className='medium' />
                                        <span>Cheese Burger</span>
                                    </div>
                                </td>
                                <td>
                                    <div className='Flex-Center'>
                                        <img src={Person} alt="" className='Profile' />
                                        <span>John Doe</span>
                                    </div>
                                </td>
                                <td>Frankfurt</td>
                                <td>Pending</td>
                                <td>2020-01-01</td>
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
export default Orders;