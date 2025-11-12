import { useState } from "react";
import ColorInput from "./ColorInput Old";



function ColorPicker(){
    const [color, setColor] = useState('white');
    const handleColorChange = (newColor: string) => {
        setColor(newColor);
    }
    return (
        <div >
            <h2>Color Picker: {color}</h2>
            <img src="" alt="" />
            <ColorInput onColorChange={handleColorChange}/>
            <div 
            style={{backgroundColor:color , height:"20px", marginTop:"10px"}}
            >
                {color}
            </div>
        </div>
    )
}
export default ColorPicker;