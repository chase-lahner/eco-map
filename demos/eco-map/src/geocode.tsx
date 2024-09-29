import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import {useMap, useMapsLibrary} from '@vis.gl/react-google-maps';

interface babyDestProp {
    updateParent : (newvalue: string) => void;
    type : string;
}
export const DestinationInput: React.FC<babyDestProp> = ({ updateParent, type })=> {
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
          placeholder={type}
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
    <div className="form-contro">
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

export interface geoReqInter {
  request: string
}


export const GeocodeFR : React.FC<geoReqInter> = ({request}) => {
  const [geoResult, setGeoResult] = useState('');

  const geocodingLib = useMapsLibrary('geocoding');
  const geocoder = useMemo(
    () => geocodingLib && new geocodingLib.Geocoder(),[geocodingLib]
    );

      
      if(!geocoder) return;


      geocoder.geocode({address: request})
      .then(result => {
        const {results} = result;

        let stringifiedResults : string = JSON.stringify(results[0].geometry.location, null, 2)
        setGeoResult(stringifiedResults);
      })
  return geoResult

  
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