import React, { useState } from 'react';
import BaseClock from '../components/baseclock/BaseClock';
import CreateClock from '../components/baseclock/CreateClock';

const App = () => {
    const [baseClock, setBaseClock] = useState({
        time: '',
        timeZone: ''
    });
    console.log(baseClock);
    const { time, timeZone } = baseClock;

    return (
        <div>
            {
                time && timeZone ? <BaseClock baseClock={baseClock} /> : <CreateClock baseClock={baseClock} setBaseClock={setBaseClock}/>
            }
        </div>
    );
};

export default App;