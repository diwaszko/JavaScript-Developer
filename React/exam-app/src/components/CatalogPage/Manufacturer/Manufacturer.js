import React from 'react';

const Manufacturer = (props) => {
    return (
        <div>
            <input type="radio" name="manufacture" id={props.manufacturer} value={props.manufacturer} checked={props.checked} onClick={props.checkRadio}/>
            <label for={props.manufacturer}>{props.labelName}</label>
        </div>
    );
};

export default Manufacturer;
