import A from "../atoms/Direction";
import Text from "../atoms/InfoEntrance";
function Card(props) {
    return ( <>
    <div>
        <A href={props.href}><Text>{props.texts}</Text></A>
    </div>
    </> )
}

export default Card;