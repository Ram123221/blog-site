import { useEffect } from "react";

function Error() {
  
    //to go to top of page each time component renders
  useEffect(()=>{
      window.scrollTo(0,0);
  },[])
  return (
    <div id="error">
      <h1>Error !!!!</h1>
    </div>
  )
}

export default Error
