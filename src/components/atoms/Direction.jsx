import styled from "styled-components";

const AStyled = styled.a`
    color: #ffffff;

`;

function A(props) {
    return ( 
        <AStyled href={props.direction}>{props.children}</AStyled>
     )
}

export default A;