import styled from 'styled-components';

const Button = styled.button`
    border: none;
    margin-top: 1rem;
	outline: none;
	background: #FF5733;
	color: white;
	border-radius: 0.15rem;
	padding: 0.5rem 1rem;
	font-size: 0.9rem;
	font-family: Arial;
	font-weight: 500;
	letter-spacing: 0.1rem;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background: #C24327;
	}  
`;
export default Button;