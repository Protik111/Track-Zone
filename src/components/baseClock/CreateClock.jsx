import { useState } from 'react';
import styled from 'styled-components';
import InputGroup from '../shared/forms/InputGroup';
import Button from '../UI/buttons/Button';
import Label from '../UI/inputs/Label';
import Option from '../UI/inputs/Option';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5rem;
`
const CreateClock = ({ baseClock, setBaseClock }) => {
    const [clock, setClock] = useState(false);

    const { time, timeZone } = baseClock;

    const handleClock = () => {
        setClock(!clock)
    }

    const handleChange = (e) => {
        setBaseClock({
            ...baseClock, [e.target.name]: e.target.value
        })
    }
    return (
        <>
            {
                !clock ? <Container>
                    <h2>You've Not Created Any Time.</h2>
                    <p>Let's Create A Time & TimeZone</p>
                    <Button onClick={handleClock}>Create Base Clock</Button>
                </Container> : <Container>
                    <InputGroup
                        value={time}
                        label={'Choose A Time'}
                        name={'time'}
                        placeholder={'Pick a Time'}
                        onChange={handleChange}
                        type={'time'}
                        id={'time'}
                        step={'1'}
                        min="2017-06-01T08:30"
                        max="2017-06-30T16:30"
                    />
                    <Label htmlFor="timeZone">Choose a Timezone</Label>
                    <select name="timeZone" id="timeZone" onChange={handleChange} style={{padding: '0.5rem'}}>
                        <Option selected>Select a Timzone</Option>
                        <Option value={'UTC'}>UTC</Option>
                        <Option value={'GMT'}>GMT</Option>
                        <Option value={'EST'}>EST</Option>
                        <Option value={'PST'}>PST</Option>
                    </select>
                </Container>
            }
        </>
    );
};

export default CreateClock;