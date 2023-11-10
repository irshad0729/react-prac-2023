import { Button } from "@mui/material";
import Child from "./components/Child";
import { useEffect, useState } from "react";
const Parent = () => {
   const [passData, setPassData] = useState("");
   const [value, setValue] = useState("");

   const handleClick = () => {
      setPassData(value);
   };
   return (
      <>
         <h1>Parent Component</h1>
         <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
         <button onClick={handleClick}>Click Me</button>
         <Child passData={passData} />
      </>
   );
};

export default Parent;
