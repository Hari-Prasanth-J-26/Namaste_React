import React from "react";
import ReactDOM from "react-dom/client"

//const heading = React.createElement("h1", { id: "heading" }, "Hello world from React");
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
/*
const parent = React.createElement("div", {id : "parent"},[ 
    React.createElement("div", {id : "child1"},[ 
        React.createElement("h1", {}, "I'm doing react"),
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
*/

// React Functional Component

const TitleComponent = () => {
    return <h1>Namaste React from Title</h1>;
};

const HeadingComponent = () => {
    <div id="container">
    <TitleComponent />
        return <h1 className="heading">Hello World from functional component!</h1>
    </div>
};

const Header = () => <h1>Welcome to My Website</h1>;
const Footer = () => <footer>© 2025 My Website</footer>;

const Layout = () => (
  <div>
    <Header />
    <p>This is the main content.</p>
    <Footer />
  </div>
); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
