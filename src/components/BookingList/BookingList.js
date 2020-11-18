import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../../styles/BookingList.scss';
import {useSelector} from 'react-redux';

const BookingList = () => {
    const bookingList = useSelector(state => state.bookingList);
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-md-10 col-sm-12 col-12 main-area p-0">
                    <div className="dashboard_header bg-white d-flex justify-content-between p-4">
                        <h5>MyRent</h5>
                        <h6>Mowmita Ahmed</h6>
                    </div>
                    <div className="booking_list_area p-4">
                        <div className="container">
                            <div className="row py-5">
                                <div class="col-md-12 col-12">
                                    <div class="booking_list_table rounded bg-white p-3">
                                        <table class="table table-borderless">
                                            <thead class="booking_list_Table_Header">
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email ID</th>
                                                    <th scope="col">Phone No</th>
                                                    <th scope="col">Massage</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody class="booking_list_Table_Body">
                                                {
                                                    bookingList.map(bl => (
                                                        <tr>
                                                            <td class="text-dark" scope="row">{bl.name}</td>
                                                            <td class="text-dark">{bl.email}</td>
                                                            <td class="text-dark">{bl.phone}</td>
                                                            <td class="text-dark">{bl.massage}</td>
                                                            <td>{(() => {
                                                                    switch (bl.status) {
                                                                    case "1":   return <select name="status" className="btn-select text-done">
                                                                                        <option selected="selected" className="text-done" value="1">Done</option>
                                                                                        <option className="text-pending" value="0">Pending</option>
                                                                                        <option className="text-onGoing" value="2">On Going</option>
                                                                                        </select>;
                                                                    case "0": return <select name="status" className="btn-select text-pending">
                                                                                        <option className="text-done" value="1">Done</option>
                                                                                        <option selected="selected" className="text-pending" value="0">Pending</option>
                                                                                        <option className="text-onGoing" value="2">On Going</option>
                                                                                        </select>;
                                                                    case "2":  return <select name="status" className="btn-select text-onGoing">
                                                                                    <option className="text-done" value="1">Done</option>
                                                                                    <option className="text-pending" value="0">Pending</option>
                                                                                    <option selected="selected" className="text-onGoing" value="2">On Going</option>
                                                                                    </select>;
                                                                    default:  return <select name="status" className="btn-select text-pending">
                                                                                        <option className="text-done" value="1">Done</option>
                                                                                        <option selected="selected" className="text-pending" value="0">Pending</option>
                                                                                        <option className="text-onGoing" value="2">On Going</option>
                                                                                    </select>;
                                                                    }
                                                                })()}
                                                            </td>
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

export default BookingList;