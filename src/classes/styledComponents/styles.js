import styled from 'styled-components';

export const Container = styled.div`

display: flex;
flex-direction:column;
width:100%;
height:500px;

`;

export const Head = styled.header`
width: 100%;
height: 70px;
background-color: brown;
align-items:center;
justify-content:center;

a{
	font-size:45px;
	color:#FFF;
}
`;

export const SubTitle = styled.a`
font-size:25px;
color:#00FF00;
text-align:center
`;

export const Welcome = styled.h1`
font-size: ${props => `${props.size}px`};
color: ${props => `#${props.colorWelcome}`};
`;