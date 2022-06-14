import { useEffect, useState } from "react";

const TimeDifference = ({ h, localZone, time, timeZone }) => {
    const [timeDifference, setTimeDifference] = useState(null);
    console.log(h, localZone, time, timeZone, 'from time Difference');
    const [baseH, baseM, baseS] = time.split(":");

    const settime = () => {
        switch(localZone) {
            case 'PST' :
                if(timeZone === 'GMT') {
                    setTimeDifference((h - baseH) + 7);
                }else if (timeZone === 'UTC') {
                    setTimeDifference((h - baseH) + 7);
                }else if (timeZone === 'PST') {
                    setTimeDifference(h - h)
                }else if (timeZone=== 'EST') {
                    setTimeDifference((h - baseH) + 4)
                }
        }
    }
    useEffect(() => {
        settime()
    }, [])

    console.log(timeDifference);
    return (
        <>
            <small>Time Difference:{timeDifference}</small>
        </>
    );
};

export default TimeDifference;