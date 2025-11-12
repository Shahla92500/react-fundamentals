
import { useState } from "react";

function Togger(){
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <button onClick={ (e) => setIsOn(!isOn)} >Toggle</button>
            <h3>Status {isOn ? 'On' : 'Off'}</h3>
            {isOn && (
                <div style={{backgroundColor: "pink"}}> Hi it is on</div>
            )}
            <div></div>
        </div>
    )
}

export default Togger;