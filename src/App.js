import React from "react";

export default function App() {
   
   function a() {
      return(
      <div>
         <p>취업하고 싶다</p>
         <span>집가고 싶다</span>
      </div>
      );
   }

   return(
      <>
         <h1>h1</h1>
         <div>{a()}</div>
      </>
   );
}