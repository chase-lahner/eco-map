import { useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";


function MainPage() {

    const [RouteCount, setRouteCount] = useState(5);

    return (
        <div className="flex flex-row">
            <></>
            <div className="flex-initial basis-2/6">
                <h1 className="text-center">Enter Trip Routes</h1>
                <ul className="menu bg-base-200 rounded-box w-full">
                    <li><input type="text" placeholder={"Enter Destination " } className="input w-full" /></li>
                    <li><input type="text" placeholder="Enter Destination " className="input w-full" /></li>
                    <li><input type="text" placeholder="Enter Destination " className="input w-full" /></li>

                </ul>
            </div>
            <div className="basis-1/2 bg-green-400">
                <h1>This is where map will be</h1>

            </div>

        </div>
    )


}

export default MainPage;