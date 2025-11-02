
import Button from "./Button";
import {useState} from "react";

function ShowHideMessage() {
    const [show, setShow]=useState(false);

    return (
        <div>
            <Button
                type="button"
                text={show ? "Hide Message" : "Show Message"}
                onClick={()=> 
                    setShow(prev => !prev)
                }
            />
      {/* Keep the <p> mounted and fade it via a CSS class */}
           {show && <p> Secret message revealed! </p>  }          
        </div>        
    )
}
export default ShowHideMessage;
//Button({type='button', text, onClick, disabled}

    // show a title ok
    // show a button
    // create handle button when click show a message
    //depend on buttons message the message will be appear or hiden