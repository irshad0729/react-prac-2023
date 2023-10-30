import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import About from "./About";
import React from "react";
function Autocomplete() {
  const [jsonData, setJsonData] = useState();
  // const top100Films = [
  //   { label: "The Shawshank Redemption", year: 1994 },
  //   { label: "The Godfather", year: 1972 },
  //   { label: "The Godfather: Part II", year: 1974 },
  //   { label: "The Dark Knight", year: 2008 },
  //   { label: "12 Angry Men", year: 1957 },
  //   { label: "Schindler's List", year: 1993 },
  //   { label: "Pulp Fiction", year: 1994 },
  // ];

  console.log("test console");

  var Data = 5;
  let response = "response test";

  useEffect(() => {
    async function getData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await data.json();
      console.log(response);
      setJsonData(response);
    }
    getData();
  }, []);
  return (
    <div className="">
      <Button variant="contained" color="success" startIcon={<SendIcon />}>
        Contained
      </Button>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={jsonData}
        getOptionLabel={(jsonData) =>
          `${jsonData.id} (${jsonData.username}) +${jsonData.name}`
        }
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
}

export default Autocomplete;
