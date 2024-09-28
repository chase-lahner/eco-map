let map: google.maps.Map;
let marker: google.maps.Marker;
let geocoder: google.maps.Geocoder;
let responseDiv: HTMLDivElement;
let response: HTMLPreElement;

import { useState } from 'react';

export default function DestinationInput() {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);

    }

    return (
      <>
        <input value={text} onChange = {handleChange}/>
      </>
    );
}

function geocode(request: google.maps.GeocoderRequest): void {
  geocoder
    .geocode(request)
    .then((result) => {
      const { results } = result;
      return results;
    })
    .catch((e) => {
      alert("Geocode was not successful for the following reason: " + e);
    });
}

function geocodeLatLng(geocoder: google.maps.Geocoder) {
  const input = (document.getElementById("latlng") as HTMLInputElement).value;
  const latlngStr = input.split(",", 2);
  const latlng = {
    lat: parseFloat(latlngStr[0]),
    lng: parseFloat(latlngStr[1]),
  };

  geocoder
    .geocode({ location: latlng })
    .then((response) => {
      if (response.results[0]) {

        

        return response.results[0].formatted_address;
      } else {
        window.alert("No results found");
      }
    })
    .catch((e) => window.alert("Geocoder failed due to: " + e));
}