import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../../styles/MyRent.scss';
import {useSelector} from 'react-redux';

const MyRent = () => {
    const myRent = useSelector(state => state.myRent);
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-md-10 col-sm-12 col-12 main-area p-0">
                    <div className="dashboard_header bg-white d-flex justify-content-between p-4">
                        <h5>MyRent</h5>
                        <h6>Mowmita Ahmed</h6>
                    </div>
                    <div className="my_rent_house_area p-4">
                        <div className="container">
                            <div className="row py-5">
                                <div class="col-md-12 col-12">
                                    <div class="my_rent_table bg-white rounded p-3 mb-5">
                                        <table class="table table-borderless">
                                            <thead class="my_rent_Table_Header rounded">
                                                <tr>
                                                    <th scope="col" className="text-left">House Name</th>
                                                    <th scope="col">Price</th>
                                                    <th className="text-center" scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody class="my_rent_Table_Body">
                                                {
                                                    myRent.map(mr => (
                                                        <tr>
                                                            <td class="text-dark" scope="row">{mr.houseName}</td>
                                                            <td class="text-dark">{mr.price}</td>
                                                            <td className="text-center"><button className="btn btn-primary radius-5">View Details</button></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRent;