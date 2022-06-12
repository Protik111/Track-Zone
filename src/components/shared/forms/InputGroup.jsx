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

// const ErrorMessage = styled.div`
// 	font-size: 0.8rem;
// 	color: red;
// `;

const InputGroup = ({
    label,
    name,
    value,
    placeholder,
    onChange,
    type,
    id
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
            />
        </Container>
    );
};

export default InputGroup;