import styled from "styled-components";

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid red;
    border-radius: 5px;
    margin: 1rem 10rem;
    padding: 1rem;
    line-height: 1rem;
`;

const Clock = ({ clock }) => {
    const { id, localTime, localZone } = clock;
    return (
        <Container>
            <h5>Clock Number: {id}</h5>
            <h4>Time: {localTime}</h4>
            <small>Timezone: {localZone}</small>
        </Container>
    );
};

export default Clock;