import React, { useState } from 'react';
import BaseClock from '../components/baseclock/BaseClock';
import CreateClock from '../components/baseclock/CreateClock';
import Button from '../components/UI/buttons/Button';
import styled from 'styled-components';
import Label from '../components/UI/inputs/Label';
import Option from '../components/UI/inputs/Option';
import InputGroup from '../components/shared/forms/InputGroup';
import Clock from '../components/clocks/Clock';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
`

const initial = {
    time: '',
    timeZone: ''
}

const initial2 = {
    id: '',
    localTime: '',
    localZone: '',
    error: ''
}

const App = () => {
    const [baseClock, setBaseClock] = useState({ ...initial });
    const [localClock, setLocalClock] = useState({ ...initial2 })
    const [allClock, setAllClock] = useState([])

    const { time, timeZone } = baseClock;
    const { localTime, localZone, id, error } = localClock;

    const handleChange = (e) => {
        setLocalClock({
            ...localClock, [e.target.name]: e.target.value
        })
    }

    const hanldeClock = () => {

        if (!localTime && !localZone) {
            setLocalClock({ ...localClock, error: 'Please Choose Option and Time' })
        }
        if (localTime && localZone) {
            setAllClock([...allClock, { ...localClock, id: allClock.length + 1 }]);
            setLocalClock({ ...localClock, error: '' })
        }
    }
    return (
        <div>
            {
                time && timeZone ? <BaseClock baseClock={baseClock} /> : <CreateClock baseClock={baseClock} setBaseClock={setBaseClock} />
            }
            <Container>
                {time && timeZone && <h3>
                    Now you can create as many you want.
                </h3>}
                {time && timeZone && <><InputGroup
                    value={localTime}
                    label={'Choose A Time'}
                    name={'localTime'}
                    placeholder={'Pick a Time'}
                    onChange={handleChange}
                    type={'time'}
                    id={'localTime'}
                    min="2017-06-01T08:30"
                    max="2017-06-30T16:30"
                    margin="0.1rem"
                />
                    <Label htmlFor="localZone">Choose a Timezone</Label>
                    <select name="localZone" id="localZone" onChange={handleChange} style={{ padding: '0.5rem' }}>
                        <Option selected>Please Select a Value</Option>
                        <Option value={'UTC'}>UTC</Option>
                        <Option value={'GMT'}>GMT</Option>
                        <Option value={'EST'}>EST</Option>
                        <Option value={'PST'}>PST</Option>
                    </select>
                    <Button onClick={hanldeClock}>Create Clock</Button>
                </>}
                <p style={{ color: 'red', margin: '1rem' }}>{error && error}</p>
            </Container>
            {
                allClock && allClock.length > 0 && allClock.map(clock => <Clock clock={clock}></Clock>)
            }
        </div>
    );
};

export default App;