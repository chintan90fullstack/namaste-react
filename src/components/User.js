import { useState } from "react";

const User = (props) => {
    const {name, location, email} = props;
    const [count, setCount] = useState(1);
    return (
        <div className="Userwrapper">
            <h1>{props.name}</h1>
            <h2>Count: {count}</h2>
            <h4>Location :{props.location}</h4>
            <h4>Find me: {email}</h4>
        </div>
    );
};

export default User;