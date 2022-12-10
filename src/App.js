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
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";

import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());

  const [formValue, setFormValue] = useState({
    fname: "",
    address: "",
    gender: "",
    state: "",
    zip: "",
  });

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" className="my-5">
          <h1 class="text-white mb-4">Fill this form</h1>

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
                    id="validationCustom01"
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
                  <MDBTextArea label="Address" id="textAreaExample" rows={3} />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Gender</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio1"
                    value="option1"
                    label="Female"
                    inline
                  />
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio2"
                    value="option2"
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
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Upload CV</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBFile size="lg" id="customFile" />
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
                  <MDBFile size="lg" id="customFile" />
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
                  <MDBFile size="lg" id="customFile" />
                  <div className="small text-muted mt-2">
                    Upload your certificate. Max file size 50 MB (Allowed file
                    extension: .doc, .pdf, .jpg, .jpeg, .png).
                  </div>
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <MDBBtn className="my-4" size="lg">
                  Submit
                </MDBBtn>
                <MDBBtn className="my-4 btn-warning" size="lg">
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

export default App;
