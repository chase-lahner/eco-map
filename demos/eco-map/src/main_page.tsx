import { useState } from "react";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { DestinationInput, CheckBox} from "./geocode.tsx";
interface checkProp {
    
}
    const [RouteCount, setRouteCount] = useState(5);
    const [source, setSource] = useState('')
    const [destination, setDestination] = useState('')
    const [bike, setBike] = useState(false)
    const [car, setCar] = useState(false)
    const [transit, setTransit] = useState(false)
    const [twoWheel, setTwoWheel] = useState(false)
    const [walk, setWalk] = useState(false)
const  MainPage: React.FC<checkProp> = () => {
    const position = {lat: 53.54992, lng: 10.00678};

    return (
        <div className="flex flex-row">
            <></>
            <div className="flex-initial basis-2/6">
                <h1 className="text-center">Enter Trip Routes</h1>
                <ul className="menu bg-base-200 rounded-box w-full">
                    <li><DestinationInput updateParent={setSource} type={"Source:"} /></li>
                    <li><DestinationInput updateParent={setDestination} type={"Destination: "}/></li>
                    <li><CheckBox updateParent={setBike} type={"Biking:"} /></li>
                    <li><CheckBox updateParent={setCar} type={"Driving:"} /></li>
                    <li><CheckBox updateParent={setTransit} type={"Public Transit:"} /></li>
                    <li><CheckBox updateParent={setTwoWheel} type={"Motor Biking:"} /></li>
                    <li><CheckBox updateParent={setWalk} type={"Walking:"} /></li>
                </ul>
            </div>
            <div className="basis-1/2 bg-green-400">
                <Map defaultCenter={position} defaultZoom={10} mapId="DEMO_ID">
                    <AdvancedMarker position={position}></AdvancedMarker>
                </Map>
                <h1>This is where map will be</h1>
            </div>
        </div>
    )
}

interface buttonProp {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const RouteButton = () => {
    const handleEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(source == '' || destination == ''){return null;}// need a start and end!
        if(!bike && !car && !walk && )
    }
    return <button className="btn btn-primary">
            GO!</button>
}

let geoOut = {
    "origin":{
      "location":{
        "latLng":{
          "latitude": 37.419734,
          "longitude": -122.0827784
        }
      }
    },
    "destination":{
      "location":{
        "latLng":{
          "latitude": 37.417670,
          "longitude": -122.079595
        }
      }
    },
    "travelMode": "DRIVE",
    "routingPreference": "TRAFFIC_AWARE",
    "computeAlternativeRoutes": false,
    "routeModifiers": {
      "avoidTolls": false,
      "avoidHighways": false,
      "avoidFerries": false
    },
    "languageCode": "en-US",
    "units": "IMPERIAL"
  }
export default MainPage;