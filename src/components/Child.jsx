import { useState, useEffect } from "react";

const Child = ({ passData }) => {
   const [data, setData] = useState([]);
   const stringToArray = passData.split(" ");

   const [count, setCount] = useState(0);
   useEffect(() => {
      const interval = setInterval(() => {
         if (!(passData === "") && count < stringToArray.length) {
            setData((prev) => [...prev, stringToArray[count]]);
            setCount((prev) => prev + 1);
         } else {
            clearInterval(interval);
         }
      }, 2000);

      return () => {
         clearInterval(interval);
      };
   }, [stringToArray, count, passData]);

   return (
      <>
         <h2>Child component</h2>
         {data?.map((el, i) => (
            <h1
               key={i}
               style={{
                  display: "inline",
                  color: "red",
                  marginRight: "10px",
               }}
            >
               {el}
            </h1>
         ))}
      </>
   );
};

export default Child;
