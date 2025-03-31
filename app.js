const heading1 = React.createElement(
    "h1",
    {
        class:"heading1", 
    }, 
    "I am the h1"
);

const heading2 = React.createElement(
    "h2",
    {
        class:"heading2", 
    }, 
    "I am the h2"
);

const child1 = React.createElement(
    "div",
    {
        id:"child1", 
    }, 
    [heading1, heading2]
);

const child2 = React.createElement(
    "div",
    {
        id:"child2", 
    }, 
    [heading1, heading2]
);

const parent = React.createElement(
    "div",
    {
        id: "parent",
    },
    [child1, child2]
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);