import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const[alertVisibility, setAlertVisibilty] = useState(false)
  return (
    <>
      {alertVisibility && <Alert onClose={()=>setAlertVisibilty(false)}>My Alret</Alert>}
      <Button color ="danger" handleClick={()=>setAlertVisibilty(true)}>ClickMe</Button>
    </>

  
  );
}
export default App;
