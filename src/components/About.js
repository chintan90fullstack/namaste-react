import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component
{
    constructor (props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Mounted");
    }

    render(){
        console.log("Parent Render");
        return (
            <div>
                <h1>About from Class</h1>
                <h6>Here about content will take place.</h6>
                
                <UserClass name={"First"}  location={"Indore class"} email={"component@class.com"} ></UserClass>
            </div>
        )
    };
}

/*const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <h6>Here about content will take place.</h6>
            
            <UserClass name={"Chintan Class"}  location={"Indore class"} email={"component@class.com"} ></UserClass>
        </div>
    )
};*/

export default About;