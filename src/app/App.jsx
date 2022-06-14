import React, { useState } from 'react';
import BaseClock from '../components/baseclock/BaseClock';
import CreateClock from '../components/baseclock/CreateClock';
import Button from '../components/UI/buttons/Button';
import styled from 'styled-components';
import Label from '../components/UI/inputs/Label';
import Option from '../components/UI/inputs/Option';
import InputGroup from '../components/shared/forms/InputGroup';
import Clock from '../components/clocks/Clock';
import shortid from 'shortid';

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
    localTitle: '',
    localTime: '',
    localZone: '',
    event: '',
    error: ''
}

const App = () => {
    const [baseClock, setBaseClock] = useState({ ...initial });
    const [localClock, setLocalClock] = useState({ ...initial2 })
    const [allClock, setAllClock] = useState([])

    const { time, timeZone } = baseClock;
    const { localTime, localZone, id, error, localTitle } = localClock;

    const handleChange = (e) => {
        setLocalClock({
            ...localClock, [e.target.name]: e.target.value
        })
    }

    const hanldeClock = () => {
        if (!localTime && !localZone) {
            setLocalClock({ ...localClock, error: 'Please Provide Necessay Information' })
        }
        if (localTitle && localTime && localZone) {
            setAllClock([...allClock, { ...localClock, id: shortid.generate() }]);
            setLocalClock(initial2)
        }
    }

    const handleDelete = (id) => {
        setAllClock(allClock.filter(clock => clock.id !== id));
    }

    const handleBlur = () => {
        if (!localTitle) {
            setLocalClock({ ...localClock, error: 'Title is Requred!' })
        }
    }

    const handleFocus = () => {
        setLocalClock({ ...localClock, error: '' })
    }

    console.log(baseClock);
    return (
        <div>
            {
                time && timeZone ? <BaseClock baseClock={baseClock} /> : <CreateClock baseClock={baseClock} setBaseClock={setBaseClock} />
            }
            <Container>
                {time && timeZone && <h3>
                    Now you can create as many you want.
                </h3>}

                {time && timeZone && <>
                    <InputGroup
                        value={localTitle}
                        label={'Enter Name of The Clock'}
                        name={'localTitle'}
                        placeholder={'Enter a Title'}
                        onChange={handleChange}
                        type={'input'}
                        id={'localTitle'}
                        margin="0.1rem"
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                        <p style={{ color: 'red', marginTop: '1rem' }}>{error && error}</p>
                    <InputGroup
                        value={localTime}
                        label={'Choose A Time'}
                        name={'localTime'}
                        placeholder={'Pick a Time'}
                        onChange={handleChange}
                        type={'time'}
                        step={'1'}
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
            </Container>
            {
                allClock && allClock.length > 0 && allClock.map(clock => <Clock key={clock.id} clock={clock} handleDelete={handleDelete} allClock={allClock} setAllClock={setAllClock} localClock={localClock} setLocalClock={setLocalClock} baseClock={baseClock}></Clock>)
            }
        </div>
    );
};

export default App;