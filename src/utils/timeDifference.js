function findDifference({ h, localZone, time, timeZone }) {
    console.log(h, localZone, time, timeZone, 'from time Difference');
    // const { time, timeZone } = baseClock;
    const [baseH, baseM, baseS] = time.split(":");
    switch(localZone) {
        case 'PST' :
            if(timeZone === 'GMT') {
                return (h - baseH) + 7;
            }else if (h === 'UTC') {
                return (h - baseH) + 7;
            }else if (h === 'PST') {
                return (h - h)
            }else if (h === 'EST') {
                return (h - baseH) + 4
            }
    }
}

export default findDifference;