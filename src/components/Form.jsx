import { useState } from "react";

const Form = () => {
   const [age, setAge] = useState();
   const [error, setError] = useState("");

   const handleOnChange = (e) => {
      setAge(e.target.value);
      if (e.target.value < 18) {
         setError("age must be greater than 18");
      } else {
         setError("");
      }
   };

   return (
      <>
         <h1>Registration Page {age} </h1>
         <input type="text" value={age} onChange={handleOnChange} />
         <p>{error}</p>
      </>
   );
};

export default Form;
