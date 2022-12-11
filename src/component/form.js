import React, { useState } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRadio,
    MDBFile,
    MDBTextArea,
} from "mdb-react-ui-kit";

import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Datatable from "./datatable";

function Form(props) {
    const date = new Date();
    const [formValue, setFormValue] = useState({
        fname: "",
        address: "",
        gender: "",
        birthdate: new Date(),
        cv: "",
        photo:"",
        certificate:""
    });

    const onChange = (e) => {
        const name = e.target.name;

        setFormValue({ ...formValue, [name]: e.target.value });
    };

    const handleChangeImage = (e) => {
        debugger
        setFormValue({ ...formValue, [e.target.name]: e.target.files[0].name });
    }

    const handleSubmit = () => {
        if(formValue.fname == "" || formValue.address == "" || formValue.gender == "" || formValue.birthdate == ""){
            alert("Semua inputan belum terisi");
        }else if(formValue.cv == "" || formValue.photo == "" || formValue.certificate == ""){
            alert("Semua file belum dimasukkan");
        }else{
            props.getData(formValue);
        }
    }

    const onReset = (e) => {
        e.preventDefault();
    
        setFormValue({
            fname: "",
            address: "",
            gender: "",
            birthdate: new Date(),
            cv: "",
            photo:"",
            certificate:""
        });
    
        document.getElementById('photo').value = ""
        document.getElementById('cv').value = ""
        document.getElementById('certificate').value = ""
        document.getElementById('fname').value = ""
        document.getElementById('address').value = ""
        
      };


    return (
        <MDBContainer fluid>
            <MDBRow className="d-flex justify-content-center align-items-center">
                <MDBCol lg="9" className="my-5">
                    <h1 className="text-white mb-4">Fill this form</h1>
                        <MDBCard>
                            <MDBCardBody className="px-4">
                                <MDBRow className="align-items-center pt-4 pb-3">
                                    <MDBCol md="3" className="ps-5">
                                        <h6 className="mb-0">Full name</h6>
                                    </MDBCol>

                                    <MDBCol md="9" className="pe-5">
                                        <MDBInput
                                            value={formValue.fname}
                                            name="fname"
                                            onChange={onChange}
                                            id="fname"
                                            required
                                            label="Full Name"
                                            size="lg"
                                            type="text"
                                        />
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                <MDBRow className="align-items-center pt-4 pb-3">
                                    <MDBCol md="3" className="ps-5">
                                        <h6 className="mb-0">Address</h6>
                                    </MDBCol>

                                    <MDBCol md="9" className="pe-5">
                                        <MDBTextArea name="address" onChange={(e) => onChange(e)} label="Address" id="address" rows={3} />
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                <MDBRow className="align-items-center pt-4 pb-3">
                                    <MDBCol md="3" className="ps-5">
                                        <h6 className="mb-0">Gender</h6>
                                    </MDBCol>

                                    <MDBCol md="9" className="pe-5">
                                        <MDBRadio
                                            name="gender"
                                            id="inlineRadio1"
                                            value="female"
                                            onChange={onChange}
                                            label="Female"
                                            inline
                                        />
                                        <MDBRadio
                                            name="gender"
                                            id="inlineRadio2"
                                            value="male"
                                            onChange={onChange}
                                            label="Male"
                                            inline
                                        />
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                <MDBRow className="align-items-center pt-4 pb-3">
                                    <MDBCol md="3" className="ps-5">
                                        <h6 className="mb-0">Date of birth</h6>
                                    </MDBCol>

                                    <MDBCol md="9" className="pe-5">
                                        <ReactDatePicker
                                            name="birthdate"
                                            selected={formValue.birthdate}
                                            onChange={(date) => setFormValue({ ...formValue, birthdate: date })}
                                        />
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                <MDBRow className="align-items-center pt-4 pb-3">
                                    <MDBCol md="3" className="ps-5">
                                        <h6 className="mb-0">Upload CV</h6>
                                    </MDBCol>

                                    <MDBCol md="9" className="pe-5">
                                        <MDBFile name="cv" onChange={(e) => handleChangeImage(e)} size="lg" id="cv" />
                                        <div className="small text-muted mt-2">
                                            Upload your CV/Resume. Max file size 50 MB (Allowed file
                                            extension: .doc, .pdf, .jpg, .jpeg, .png).
                                        </div>
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                <MDBRow className="align-items-center pt-4 pb-3">
                                    <MDBCol md="3" className="ps-5">
                                        <h6 className="mb-0">Upload Photo</h6>
                                    </MDBCol>

                                    <MDBCol md="9" className="pe-5">
                                        <MDBFile name="photo" onChange={(e) => handleChangeImage(e)} size="lg" id="photo" />
                                        <div className="small text-muted mt-2">
                                            Upload your photo. Max file size 50 MB (Allowed file
                                            extension: .jpg, .jpeg, .png).
                                        </div>
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                <MDBRow className="align-items-center pt-4 pb-3">
                                    <MDBCol md="3" className="ps-5">
                                        <h6 className="mb-0">Upload Certificate</h6>
                                    </MDBCol>

                                    <MDBCol md="9" className="pe-5">
                                        <MDBFile name="certificate" onChange={(e) => handleChangeImage(e)} size="lg" id="certificate" />
                                        <div className="small text-muted mt-2">
                                            Upload your certificate. Max file size 50 MB (Allowed file
                                            extension: .doc, .pdf, .jpg, .jpeg, .png).
                                        </div>
                                    </MDBCol>
                                </MDBRow>

                                <hr className="mx-n3" />

                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <MDBBtn onClick={handleSubmit} type="submit" className="my-4" size="lg">
                                        Submit
                                    </MDBBtn>
                                    <MDBBtn className="my-4 btn-warning" size="lg" onClick={onReset}>
                                        Reset
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Form;
