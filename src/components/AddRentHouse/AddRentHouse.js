import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {addRentHouse} from '../../store';
import '../../styles/AddRentHouse.scss';
import { Link, useHistory } from 'react-router-dom';
import shortid from 'shortid';

const AddRentHouse = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const new_house = {
            id: shortid.generate(),
            title: data.title,
            price: data.price
        };
        console.log(data);
        dispatch(addRentHouse(data));
        history.push("/addrenthouse");
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-md-10 col-sm-12 col-12 main-area p-0">
                    <div className="dashboard_header bg-white d-flex justify-content-between p-4">
                        <h5>Add Rent House</h5>
                        <h6>Mowmita Ahmed</h6>
                    </div>
                    <div className="add_rent_house_area p-4">
                        <div className="container">
                            <div className="row py-5">
                            <div class="bg-white rounded col-md-12">
                                <form className=" py-5 px-3" onSubmit={handleSubmit(onSubmit)} >
                                    <div className="add_rent_house">
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label className="add_rent_house_Label" for="inputTitle">Service Title</label>
                                                <input name="title" ref={register} className="form-control add_rent_house_Input" type="text" placeholder="Enter title" id="inputTitle" aria-describedby="titleHelp" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className="add_rent_house_Label" for="inputIcon">Price</label>
                                                <input name="price" ref={register} className="form-control add_rent_house_Input" type="number" placeholder="Price" id="inputTitle" aria-describedby="PriceHelp" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label className="add_rent_house_Label" for="inputLocation">Location</label>
                                                <input name="location" ref={register} className="form-control add_rent_house_Input" type="text" placeholder="Location" id="inputLocation" aria-describedby="locationHelp" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className="add_rent_house_Label" for="inputIcon">No of Bedroom</label>
                                                <input name="Bedroom" ref={register} className="form-control add_rent_house_Input" type="number" placeholder="No of Bedroom" id="inputBedroom" aria-describedby="bedroomHelp" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label className="add_rent_house_Label" for="inputLocation">No of Bathroom</label>
                                                <input name="bathroom" ref={register} className="form-control add_rent_house_Input" type="text" placeholder="No of Bathroom" id="inputBathroom" aria-describedby="bathroomHelp" />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label className="add_rent_house_Label" for="inputIcon">Icon</label>
                                                <br />
                                                <label className="custom-file-upload-service">
                                                    <input name="file" ref={register} type="file" />
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cloud-upload-alt" className="svg-inline--fa fa-cloud-upload-alt fa-w-20 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"></path></svg>Upload image</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary float-right mt-3 mb-5">Submit</button>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRentHouse;