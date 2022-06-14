import styled from 'styled-components';
import InputGroup from '../shared/forms/InputGroup';
import Button from '../UI/buttons/Button';
import { useState } from 'react';
import Label from '../UI/inputs/Label';
import Option from '../UI/inputs/Option';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5rem;
    border: 1px solid blue;
    border-radius: 5px;
    margin: 1rem 10rem;
    padding: 1rem;
`

const initial = {
    time: '',
    timeZone: ''
}

const BaseClock = ({ baseClock, setBaseClock }) => {
    const [editCLock, setEditClock] = useState(false);

    const { time, timeZone } = baseClock;

    const [h, m, s] = time.split(":");
    const timeWithAMPM = (h % 12 + 12 * (h % 12 == 0)) + ":" + m + ":" + s;
    const AMPM = h >= 12 ? 'PM' : 'AM';

    const handleEdit = () => {
        setEditClock(!editCLock);
    }

    const handleChange = (e) => {
        setBaseClock({
            ...baseClock, [e.target.name]: e.target.value
        })
    }

    const handleEditClock = () => {
        setBaseClock({...baseClock});
        setEditClock(false);
    }
    return (
        <Container>
            <h2>Your Baseclock Time is {timeWithAMPM}{AMPM}</h2>
            <p>Timezone : {
                timeZone
            }</p>
            {editCLock && <>
                <InputGroup
                    value={time}
                    label={'Choose A Time'}
                    name={'time'}
                    placeholder={'Pick a Time'}
                    type={'time'}
                    id={'time'}
                    step={'1'}
                    onChange={handleChange}
                />
                <Label htmlFor="timeZone">Choose a Timezone</Label>
                <select value={timeZone} onChange={handleChange} name="timeZone" id="timeZone" style={{ padding: '0.5rem' }}>
                    <Option selected>Select a Timzone</Option>
                    <Option value={'UTC'}>UTC</Option>
                    <Option value={'GMT'}>GMT</Option>
                    <Option value={'EST'}>EST</Option>
                    <Option value={'PST'}>PST</Option>
                </select>
            <Button onClick={handleEditClock}>Edit Clock</Button>
            </>}
            {!editCLock && <Button onClick={handleEdit}>Edit Base Clock</Button>}
        </Container>
    );
};

export default BaseClock;