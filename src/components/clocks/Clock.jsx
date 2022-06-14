import { useState } from "react";
import styled from "styled-components";
import InputGroup from "../shared/forms/InputGroup";
import Button from "../UI/buttons/Button";
import Label from "../UI/inputs/Label";
import Option from "../UI/inputs/Option";
import TimeDifference from "./TimeDifference";

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid red;
    border-radius: 5px;
    margin: 1rem 10rem;
    padding: 1rem;
    line-height: 2rem;
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
const initial = {
    idE: '',
    localTitleE: '',
    localTimeE: '',
    localZoneE: '',
    eventE: '',
    errorE: ''
}

const Clock = ({ clock, handleDelete, allClock, setAllClock, localClock, setLocalClock, baseClock }) => {
    const [events, setEvents] = useState(false);
    const [eventName, setEventName] = useState('');
    const [editCLock, setEditClock] = useState(false);
    const [initialEdit, setInitialEdit] = useState({...initial});

    const { id, localTime, localZone, event, localTitle } = clock;
    const { idE, localTimeE, localZoneE, eventE, localTitleE } = initialEdit;
    const { time, timeZone } = baseClock;

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

    const [h, m, s] = localTime.split(":");
    const timeWithAMPM = (h % 12 + 12 * (h % 12 === 0)) + ":" + m + ":" + s;
    const AMPM = h >= 12 ? 'PM' : 'AM';

    const handleEdit = () => {
        setEditClock(!editCLock);
    }

    const handleChange = (e) => {
        setInitialEdit({
            ...initialEdit, [e.target.name]: e.target.value
        })
    }

    const handleEditClock = (id) => {
        const targetEditClock = allClock.filter(clc => clc.id === id);
        targetEditClock[0].localTime = localTimeE
        targetEditClock[0].localZone = localZoneE
        // setBaseClock({ ...baseClock });
        setEditClock(false);
    }

    return (
        <Container>
            <div>
                <h3>Title: {localTitle}</h3>
                <h5>Time: {timeWithAMPM}{AMPM}</h5>
                <small>Timezone: {localZone}</small>
                {/* <small>Timezone: {h}, {localZone}, {time}, {timeZone}</small> */}
                <TimeDifference localTime={localTime} localZone={localZone} time={time} timeZone={timeZone}></TimeDifference>
                {editCLock && <>
                    <InputGroup
                        value={localTimeE}
                        label={'Choose A Time'}
                        name={'localTimeE'}
                        placeholder={'Pick a Time'}
                        type={'time'}
                        id={'localTimeE'}
                        step={'1'}
                        onChange={handleChange}
                    />
                    <Label htmlFor="timeZone">Choose a Timezone</Label>
                    <select value={localZoneE} onChange={handleChange} name="localZoneE" id="timeZone" style={{ padding: '0.5rem' }}>
                        <Option selected>Select a Timzone</Option>
                        <Option value={'UTC'}>UTC</Option>
                        <Option value={'GMT'}>GMT</Option>
                        <Option value={'EST'}>EST</Option>
                        <Option value={'PST'}>PST</Option>
                    </select>
                    <Button onClick={() => handleEditClock(id)}>Edit Now</Button>
                </>}
                {!editCLock && <Button onClick={handleEdit}>Edit Clock</Button>}
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