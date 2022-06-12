import styled from 'styled-components';
import { formatDistance, subDays, formatRelative, format } from 'date-fns'

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

const BaseClock = ({ baseClock }) => {
    const { time, timeZone } = baseClock;

    return (
        <Container>
            <h2>Your Baseclock Time is {time}</h2>
            <p>Timezone : {
                timeZone
            }</p>
        </Container>
    );
};

export default BaseClock;