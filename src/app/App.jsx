import React, { useState } from 'react';
import BaseClock from '../components/baseClock/BaseClock';
import CreateClock from '../components/baseClock/CreateClock';

const App = () => {
    const [baseClock, setBaseClock] = useState({
        time: '',
        timeZone: ''
    });

    const { time, timeZone } = baseClock;

    return (
        <div>
            {
                time && timeZone ? <BaseClock></BaseClock> : <CreateClock></CreateClock>
            }
        </div>
    );
};

export default App;