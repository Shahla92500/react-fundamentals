
import Button from "./Button";
import {useState} from "react";

function StatusShowHide() {
    const [isOn, setIsOn]=useState(false);
    // let message ='';
    const displayOn = {
    color: 'grey',
    backgroundColor: '#c9e9b5ff', // camelCase for background-color
    padding: '10px',           // String value for padding
    border: '1px solid red',
    fontSize: '16px' ,
    width:   '400px'     
    };
    return (
        <div>
            <Button
                type="button"
                text={"Toggle Status"}
                onClick={()=> setIsOn(prev => !prev)
                }
            />
      {/* Keep the <p> mounted and fade it via a CSS class */}
           {isOn ? 
                <p> Status:OFF! </p> : 
                <div>
                    <p> Status:On </p> 
                    <input type="text" placeholder= "This content is only visible when the status is ON" style={displayOn} />
                </div>  
            }        
        </div>        
    )
}
export default StatusShowHide;
