import React from "react";
import ReactDOM from "react-dom/client";


// React Element
/*
const heading = React.createElement("h1", { id: "heading"}, "Namaste React.");
console.log(heading);*/

// JSX written element
const jsxHeading = (<h1 id="heading" className="testclass" tabIndex="1">Namaste React using JSX.</h1>);
// console.log(jsxHeading);

// React Functional Component
// const Title = () => (<h1>This is Another Title.</h1>)
// const Title = () => { return <h1>This is Another Title.</h1>}
// const Title = () => <h1>This is Another Title.</h1>
// const Title = function() { return (<h1>This is Another Title.</h1>) } // not widely used

// above all are different ways to show a functional component
const num = 32;
const Title = () => (
    <div className="parentTitle">
        <h1>This is Another Title.</h1>
        <h2>My age is: {num}</h2>
        
    </div>
)

const NewComp = () => ( <div>Thiw will goes under another component</div>)


// This is Component Composition
const HeadingComponent1 = () => (
<div>
    {Title()}
    <Title></Title>
    <Title/>
    <NewComp/>
<h1>This is React Functional Component</h1>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
root.render(<HeadingComponent1/>);