import React from "react";


class UserClass extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            userInfo:{
                name: "Test",
                location: "xyz",
                email: "abc@test.com",
                avatar_url: "http://dummyphoto.com"
            },
        }
        // console.log(this.props.name +" Child Constructor");
    }

    async componentDidMount(){
        // console.log(this.props.name +" Child Component Mounted");
        const data = await fetch("https://api.github.com/users/chintan90fullstack");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
    }
    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount()
    {
        console.log("component will unmount");
    }

    render(){
        const{ name, location, email } = this.state.userInfo;

    //    debugger;
        return (
            <div className="Userwrapper">
                <span>This is Class based Component</span>
                <h1>UserName: {name}</h1>
                <h4>Location :{location}</h4>
                <h4>Find me: {email}</h4>
                <h4><img src={this.state.userInfo.avatar_url}></img></h4>
            </div>
        );
    }
}

export default UserClass;