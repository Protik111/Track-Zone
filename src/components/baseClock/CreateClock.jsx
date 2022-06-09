import { useState } from 'react';
import styled from 'styled-components';
import Button from '../UI/buttons/Button';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5rem;
`
const CreateClock = () => {
    const [clock, setClock] = useState(false);

    const handleClock = () => {
        setClock(!clock)
    }
    return (
        <>
            {
                !clock ? <Container>
                    <h2>You've Not Created Any Time.</h2>
                    <p>Let's Create A Time & TimeZone</p>
                    <Button onClick={handleClock}>Create Clock</Button>
                </Container> : <Container>
                    <label for="time">Choose A Time</label>
                    <input type="datetime-local" id="time"
                        name="time" value="2018-06-12T19:30"
                        min="2018-06-07T00:00" max="2018-06-14T00:00" />
                </Container>

            }
        </>
    );
};

export default CreateClock;