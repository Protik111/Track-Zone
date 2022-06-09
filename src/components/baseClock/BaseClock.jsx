import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5rem;
`

const BaseClock = () => {
    return (
        <Container>
            <h1>This is BaseClock</h1>
        </Container>
    );
};

export default BaseClock;