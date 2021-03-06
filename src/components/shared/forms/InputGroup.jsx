import styled from 'styled-components';
import Label from '../../UI/inputs/Label';
import TextInput from '../../UI/inputs/TextInput';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: ${(props) => props.margin ? props.margin : '1rem'};
`;

const InputGroup = ({
    label,
    name,
    value,
    placeholder,
    onChange,
    onBlur,
    onFocus,
    type,
    id,
    step
}) => {
    return (
        <Container>
            <Label htmlFor={name}>{label}</Label>
            <TextInput
                name={name}
                id={id}
                placeholder={placeholder ?? ''}
                value={value}
                onChange={onChange}
                type={type}
                onBlur={onBlur}
                onFocus={onFocus}
                step={step}
            />
        </Container>
    );
};

export default InputGroup;