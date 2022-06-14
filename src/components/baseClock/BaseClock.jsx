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

    const [h, m, s] = time.split(":");
    const timeWithAMPM = (h % 12 + 12 * (h % 12 == 0)) + ":" + m + ":" + s;
    const AMPM = h >= 12 ? 'PM' : 'AM'
    return (
        <Container>
            <h2>Your Baseclock Time is {timeWithAMPM}{AMPM}</h2>
            <p>Timezone : {
                timeZone
            }</p>
        </Container>
    );
};

export default BaseClock;