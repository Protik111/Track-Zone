import { useEffect, useState } from "react";

const TimeDifference = ({ localTime, localZone, time, timeZone }) => {
    const [timeDifference, setTimeDifference] = useState('');

    const [h, m, s] = localTime.split(":");
    const [baseH, baseM, baseS] = time.split(":");

    const setTime = () => {
        switch(localZone) {
            case 'PST' :
                if(timeZone === 'GMT') {
                    setTimeDifference((h > baseH ? ((h - baseH) + 7) : ((baseH - h) + 7)) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }else if (timeZone === 'UTC') {
                    setTimeDifference((h > baseH ? ((h - baseH) + 7) : ((baseH - h) + 7)) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }else if (timeZone === 'PST') {
                    setTimeDifference(h > baseH ? (h - baseH) : (baseH - h) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }else if (timeZone=== 'EST') {
                    setTimeDifference((h > baseH ? ((h - baseH) + 4) : ((baseH - h) + 4)) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }
                break;
            case 'GMT' :
                if(timeZone === 'GMT') {
                    setTimeDifference(h > baseH ? (h - baseH) : (baseH - h) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }else if (timeZone === 'UTC') {
                    setTimeDifference(h > baseH ? (h - baseH) : (baseH - h) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }else if (timeZone === 'PST') {
                    setTimeDifference((h > baseH ? ((h - baseH) + 7) : ((baseH - h) + 7)) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }else if (timeZone=== 'EST') {
                    setTimeDifference((h > baseH ? ((h - baseH) + 4) : ((baseH - h) + 4)) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }
                break;
            case 'UTC' :
                if(timeZone === 'GMT') {
                    setTimeDifference(h > baseH ? (h - baseH) : (baseH - h) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }else if (timeZone === 'UTC') {
                    setTimeDifference(h > baseH ? (h - baseH) : (baseH - h) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }else if (timeZone === 'PST') {
                    setTimeDifference((h > baseH ? ((h - baseH) + 7) : ((baseH - h) + 7)) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }else if (timeZone=== 'EST') {
                    setTimeDifference((h > baseH ? ((h - baseH) + 4) : ((baseH - h) + 4)) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }
                break;
            case 'EST' :
                if(timeZone === 'GMT') {
                    setTimeDifference((h > baseH ? ((h - baseH) + 4) : ((baseH - h) + 4)) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }else if (timeZone === 'UTC') {
                    setTimeDifference((h > baseH ? ((h - baseH) + 7) : ((baseH - h) + 7)) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }else if (timeZone === 'PST') {
                    setTimeDifference((h > baseH ? ((h - baseH) + 3) : ((baseH - h) + 3)) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }else if (timeZone=== 'EST') {
                    setTimeDifference(h > baseH ? (h - baseH) : (baseH - h) + ":" + (m > baseM ? (m - baseM) : (baseM - m)) + ":" + (s > baseS ? (s - baseS) : (baseS - s)));
                }
                break;
            default:
                setTimeDifference('Error Occured')
        }
    }
    useEffect(() => {
        setTime()
    }, [])
    return (
        <div>
            <small>Time Difference:<b>{timeDifference} hours</b></small>
        </div>
    );
};

export default TimeDifference;