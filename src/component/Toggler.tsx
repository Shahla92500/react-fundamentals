
import Button from "./Button";
import {useState} from "react";

function Toggler() {
    const [isOn, setIsOn]=useState(false);
    let message = "Status OFF"
    if (isOn) {
        message="Status ON"

    } else{ 
      message= "Status OFF"
    }
    console.log("status is ",isOn,"-", message)
    return (
        <div>
              <Button 
                type="button"
                text={message}
                onClick={()=> setIsOn(prev => !prev)
                    
                }
            />   

                {isOn &&   <p style={ { color: 'red'}}> Status:On </p> }
          
        </div>
    )
}

export default Toggler;