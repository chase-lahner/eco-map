import { useState } from "react";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { renderIntoDocument } from "react-dom/test-utils";

interface checkProp {
    
}

const  MainPage: React.FC<checkProp> = () => {

    const [RouteCount, setRouteCount] = useState(5);
    const position = {lat: 53.54992, lng: 10.00678};
    const sourceDest = useState([]);

    return (
        <div className="flex flex-row">
            <></>
            <div className="flex-initial basis-2/6">
                <h1 className="text-center">Enter Trip Routes</h1>
                <ul className="menu bg-base-200 rounded-box w-full">
                    <li><input type="text" placeholder="Enter Source " className="input w-full" /></li>
                    <li><input type="text" placeholder="Enter Destination " className="input w-full" /></li>

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

export default MainPage;