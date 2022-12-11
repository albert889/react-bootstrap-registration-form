import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Datatable from "./component/datatable";
import Form from "./component/form";

function App() {
  const [data, setData] = useState([]);

  const handleGetData = (newData) => {
    setData(data.concat(newData))
  }


  return (
      <>
        <Form getData={(newData) => handleGetData(newData)} />
        <Datatable data={data}/>
      </>
  );
}

export default App;
