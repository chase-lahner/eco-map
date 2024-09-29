import { useState } from "react";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { DestinationInput, CheckBox} from "./geocode.tsx";
import { GeocodeFR, geoReqInter } from "./geocode.tsx";
interface checkProp {
    type: string;

}




   
const  MainPage: React.FC = () => {
    const [source, setSource] = useState<string>('')
    const [destination, setDestination] = useState('')
    const [bike, setBike] = useState(false)
    const [car, setCar] = useState(false)
    const [transit, setTransit] = useState(false)
    const [twoWheel, setTwoWheel] = useState(false)
    const [walk, setWalk] = useState(false)
    const position = {lat: 53.54992, lng: 10.00678};
    const [click, setClick] = useState(false);
    
    let test_address = "3609 Dawson St, Pittsburgh, PA 15213";
    

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
                    <li><RouteButton updateClick={setClick} click={click} source={source} destination={destination} 
                    bike={bike} car={car} walk={walk} transit={transit} twoWheel={twoWheel}/></li>
                </ul>
            </div>
            <div className="basis-1/2 bg-green-400">
                <Map defaultCenter={position} defaultZoom={10} mapId="DEMO_ID">
                    <AdvancedMarker position={position}></AdvancedMarker>
                </Map>
                <h1>This is where map will be</h1>
                <>
                <GeocodeFR request={test_address} />
                    
                </>
                
            </div>
        </div>
    )
}

interface buttonProp {
    updateClick: (newvalue : boolean) => void;
    source:string
    destination:string
    bike: boolean
    car:boolean
    walk:boolean
    transit:boolean
    twoWheel:boolean
    click:boolean
}
const RouteButton: React.FC<buttonProp> = ({updateClick, source,destination,bike,car,walk,transit,twoWheel,click}) => {
    const clickHandle = () => {
        updateClick(!click);
    }
    if(click) {
        updateClick(!click)
        const toReqSource : geoReqInter =  {request : source}
        console.log(toReqSource)
        const resultSource = GeocodeFR(toReqSource);
        const toReqDest : geoReqInter = {request : destination}
        console.log(toReqDest)
        const resultDest = GeocodeFR(toReqDest);
        console.log("result source" + resultSource);
        if(source == '' || destination == ''){return null;}// need a start and end!
        if(!bike && !car && !walk && !transit && !twoWheel){return null;}// need A mode of transport!
        let routes: []
        let geoOut = {
            "origin":{
              "location":{
                "latLng":{resultSource}
              }
            },
            "destination":{
              "location":{
                "latLng":{resultDest}
            }
            },
            "travelMode": null,
            "routingPreference": "TRAFFIC_AWARE",
            "computeAlternativeRoutes": true,
            "routeModifiers": {
              "avoidTolls": false,
              "avoidHighways": false,
              "avoidFerries": false
            },
            "languageCode": "en-US",
            "units": "IMPERIAL"
          }
        if(bike)
        {

        }

    }
    return <button onClick={clickHandle} className="btn btn-primary">GO!</button>
}

    

export default MainPage;