import React from 'react';
import { useState } from 'react';

interface babyDestProp {
    updateParent : (newvalue: string) => void;
}
export const DestinationInput: React.FC<babyDestProp> = ({ updateParent })=> {
    const [text, setText] = useState('');
    
    function handleChange(e: { target: { value: React.SetStateAction<string>; }; }) {
        setText(e.target.value);
        updateParent(text)
        console.log("destination changed")
    }

    return (
        <>
        <input 
          type="text"
          placeholder="Enter Destination: "
          onChange={handleChange}
          className="input input-bordered input-primary w-full max-W-xs"/>
        </>
      
    );
}


interface checkProp {
  updateParent : (newvalue : boolean) => void;
  type : string;
}

export const CheckBox: React.FC<checkProp> = ({updateParent, type})=> {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
      setIsChecked(!isChecked);
      updateParent(isChecked);
    }
    return (
    <>
    <div className="form-control">
    <label className="label cursor-pointer">
      <span className="label-text">{type}</span>
      <input  type="checkbox" 
              checked={isChecked} 
              className="checkbox checkbox-primary"
              onChange={handleChange} />
    </label>
  </div>
  </>);
}

function geocode(request: google.maps.GeocoderRequest): any {
  const geocoder = new google.maps.Geocoder();

  geocoder
    .geocode(request)
    .then((result) => {
      const { results } = result;
      return results;
    })
    .catch((e) => {
      alert("Geocode was not successful for the following reason: " + e);
    });
    return 0;
}

// function geocodeLatLng(request:) {
//   const input = (document.getElementById("latlng") as HTMLInputElement).value;
//   const latlngStr = input.split(",", 2);
//   const latlng = {
//     lat: parseFloat(latlngStr[0]),
//     lng: parseFloat(latlngStr[1]),
//   };

//   geocoder
//     .geocode({ location: latlng })
//     .then((response) => {
//       if (response.results[0]) {

        

//         return response.results[0].formatted_address;
//       } else {
//         window.alert("No results found");
//       }
//     })
//     .catch((e) => window.alert("Geocoder failed due to: " + e));
// }