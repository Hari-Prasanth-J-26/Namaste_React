const heading = React.createElement("h1", {id : "heading"}, "Hello world from React");
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

const parent = React.createElement("div", {id : "parent"},[ 
    React.createElement("div", {id : "child1"},[ 
        React.createElement("h1", {}, "I'm h1 tag in child1"),
        React.createElement("h2", {}, "I'm h2 tag in child1")
        ]
    ),
    React.createElement("div", {id : "child2"},[ 
        React.createElement("h1", {}, "I'm h1 tag in child2"),
        React.createElement("h2", {}, "I'm h2 tag in child2")
        ]
    )
    ]
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
