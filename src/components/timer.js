import { useState } from "react";

export default function Timer(){
    var currentTime = new Date().toLocaleTimeString();
    var [time, getTime] = useState(currentTime);

    setInterval(updateTime, 1000);
    function updateTime(){
        var upToDateTime = new Date().toLocaleTimeString();
        getTime(upToDateTime);
    }
    return(<span className="button">{time}</span>);
}