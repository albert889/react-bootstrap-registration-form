import React  from "react";
import {MDBCol, MDBRow} from "mdb-react-ui-kit";

function Datatable(props) {
    console.log(props)
    let bodyTables = props.data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.fname}</td>
                    <td>{item.address}</td>
                    <td>{item.gender}</td>
                    <td>{item.birthdate?.toLocaleString()}</td>
                    <td>{item.cv}</td>
                    <td>{item.photo}</td>
                    <td>{item.certificate}</td>
                </tr>
            )
        })

    return (
        <MDBRow className="d-flex justify-content-center align-items-center">
                <MDBCol lg="9" className="my-5">
                    <h2 className="text-white">Data</h2>
                    <table className="table table-light">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>Jenis Kelamin</th>
                                <th>Tanggal Lahir</th>
                                <th>CV</th>
                                <th>Foto</th>
                                <th>Sertifikat</th>
                            </tr>
                        </thead>
                        <tbody>
                        {bodyTables}
                        </tbody>
                    </table>
                </MDBCol>
            </MDBRow>
        );

}

export default Datatable;
