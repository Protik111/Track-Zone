import { useState } from "react";
import styled from "styled-components";
import InputGroup from "../shared/forms/InputGroup";
import Button from "../UI/buttons/Button";

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
    text-align: center;
`;

const ActionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center
`

const Clock = ({ clock, handleDelete, allClock, setAllClock, localClock, setLocalClock }) => {
    const [events, setEvents] = useState(false);
    const [eventName, setEventName] = useState('');
    const { id, localTime, localZone, event } = clock;

    const handleEventChange = (e) => {
        setEventName(e.target.value)
    }

    const handleEvent = (id) => {
        const targetEvent = allClock.filter(clc => clc.id === id);
        targetEvent[0].event = eventName;
        setAllClock([...allClock])
        setEventName('');
    }

    const handleDeleteEvent = (id) => {
        const targetDeletedEvent = allClock.filter(clc => clc.id === id);
        targetDeletedEvent[0].event = '';
        setAllClock([...allClock])
    }
    console.log(eventName, 'from eventNAme');
    console.log(allClock, 'from allclock');
    console.log(localClock, 'from localClock');
    return (
        <Container>
            <div>
                <h4>Time: {localTime}</h4>
                <small>Timezone: {localZone}</small>
                <ButtonContainer>
                    <p>Event Title: {event ? event : 'Not Created.'}</p>
                    {event && <Button bg={'red'} padding={'0.3rem 0.5rem'} onClick={() => handleDeleteEvent(id)}>Delete Event</Button>}
                </ButtonContainer>
            </div>
            <ActionContainer>
                {
                    events ? <><InputGroup
                        value={eventName}
                        label={'Type Event'}
                        name={'eventName'}
                        placeholder={'Input Event'}
                        type={'text'}
                        id={'event'}
                        onChange={handleEventChange}
                    /> <Button onClick={() => handleEvent(id)}>{event ? 'Edit Event' : 'Add Events'}</Button></> :
                        <Button onClick={() => { setEvents(!events) }}>Add Events</Button>
                }
            </ActionContainer>
            <Button onClick={() => handleDelete(id)} bg={'#ce2525'}>Delete Clock</Button>
        </Container>
    );
};

export default Clock;