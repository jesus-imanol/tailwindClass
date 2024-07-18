import styled from "styled-components";

const TextStyled = styled.p `
    color: #ffffff;

`

function Text(props) {
    return ( <>
    <p>{props.texts}</p>
    </> );
}

export default Text;