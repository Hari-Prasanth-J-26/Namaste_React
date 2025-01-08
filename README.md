# Namaste_React

# VSC

It has "Emmet" -> It basically generates some code
Type html:5 -> It will generates you a skeleton of basic code to start

# Javascript
Whenever you are using the javascript for writing something, you have to write it inside the <script></script> tag
The appendChild() method appends a node (element) as the last child of an element.
# Code
```html
<body>
    <div id="root">
        <!--<h1>Hello World!</h1>-->
        <script>
            const heading = document.createElement("h1");
            heading.innerHTML = "Hello World from Javascript"
            const root = document.getElementById("root");
            root.appendChild(heading)
        </script>
    </div>
</body>
```
Browsesr understands and know about the javascript, because it already has engines to understands and executes the javascript codes

# Node.js

The main role of Node.js in React is to serve as the runtime environment and ecosystem that supports the development, building, and running of React applications. While React is a front-end library, Node.js plays a crucial role in its workflow. 

While React itself is a library that can run in the browser, Node.js is critical for:

Development Workflow: Running dev servers, managing dependencies, and using modern tools.

1. Transpilation: Converting JSX and ES6+ code into browser-compatible JavaScript.
2. Optimization: Bundling and minifying assets for production.
3. Flexibility: Enabling server-side rendering and full-stack applications.


# React

-> React is a Javascript library -> independantly works on small portion of the page (header, body, footer, sidebar). It's not a framework.
Copyrights from Facebook

-> CDN - It is the website, which holds the react library. We are just pulling it from CDN

-> CDN - Content Delivery Network (CDN) links are an integral part of modern web development. 

-> CDNs are distributed networks of servers strategically placed around the world to deliver web content efficiently

-> Cross-Origin ->In ReactJS, Cross-Origin Resource Sharing or CORS requests refers to the method that allows you to make requests to the server deployed at a different domain.

-> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

-> In React, Render is the technique that can redirect a page with the help of function render(). 

-> Most importantly, render a function we can use to define the HTML code within the HTML element. 

-> It helps to display certain views in the UI using certain logic defined in the render function and returns the output
Injecting react in the code / project ->
```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script> -> Core react framework
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> 
```
-> React dom elements

React.createElement() -> three parameters 1.tags" " 2.{}object 3." " Whatever we need to put inside the 1. tags
ReactDom.createRoot()
```html
<script>
    const heading = React.createElement("h1", {}, "Hello world from React"); {} -> object is a place where we will give attributes 
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
</script>
```

we can use .js file to write all the react / js codes without using 
```html
<script></script> 
```

Render method is used to convert object and put it into heading tag (Based on which tag we are using)

React Element Objects -> HTML browser understands
```h
const parent = React.createElement("div", {id : "parent"},
    [ 
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
```
Order of the lines are always matter in React

root.render() in App.js will replace the value in index.html 
```html
<div id = "root"> 
    <h1>Hello World</h1>
</div>
```

# NPM

It's not an abbreviation of Node Package Manager
package.json file is just a configuration for npm

There are two types of dependencies or packages
1. Dev dependency -> development
2. Normal dependency -> Production

-> npm install -D parcel -> -D Dev dependency

-> ^2.13.3 -> caret will take the minor updates automatically

-> ~2.13.3 -> tilde will take the major updates automatically. By default ^ caret will be present.

-> package.json defines the project’s basic dependencies and configuration, while package-lock.json locks down the entire dependency tree to specific versions, ensuring consistent and reproducible builds.

-> node modules -> Is like database, it contains all the code from npm
When you install a package in Node. js using npm or Yarn, that package might depend on other packages. 

-> These other packages are called transitive dependencies. 
For example, if your project depends on package A, and package A depends on package B, then package B is a transitive dependency of your project.

# NPX

NPX stands for Node Package eXecute. It is simply an NPM package runner. 

It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2

# NPM vs NPX

npm is primarily for installing and managing dependencies.

npx is for executing packages on-demand.

# HMR

-> HMR (Hot Module Replacement) is a feature in modern web development tools that allows developers to update code in a running application without requiring a full page reload. It is widely used in frameworks and build tools like Webpack, Vite, and Parcel, and is particularly useful in React development.

# How HMR Works

1. The development server (e.g., Webpack or Vite) tracks changes to files in the project.
2. When a file changes, the server recompiles only the modified module.
3. The updated module is sent to the browser via WebSocket or similar communication.
4. The browser replaces the old module with the updated one, without reloading the entire page.

# File watching algorithm - written in C++

-> In React development, file watching is handled by build tools like Webpack, Vite, and Parcel, which watch for changes in source code files and trigger rebuilding, hot reloading, or HMR as appropriate. 

-> The process relies on different strategies like polling, file system events, and recursive watching to ensure real-time updates during development. Optimizing these strategies is important for maintaining performance, especially in large projects.

# Caching

Caching in both Vite and Parcel is a critical component of their performance strategies, designed to speed up development workflows and optimize production builds. Each tool provides robust caching mechanisms, with Parcel favoring a persistent approach and Vite focusing on speed and simplicity.

# Minification

Minification in React refers to the process of reducing the size of your JavaScript, CSS, and HTML files by removing unnecessary characters, such as whitespace, comments, and unused code. This process is crucial for optimizing the performance of your React applications, especially in production, as it leads to faster loading times and reduced bandwidth usage.

# Why Minification Matters in React

1. Reduced File Size: Smaller files are faster to download.
2. Improved Performance: Faster loading times and improved rendering performance in browsers.
3. Obfuscation: Minification slightly increases the difficulty of reverse-engineering your code.
4. Better SEO: Faster load times can positively impact search engine rankings.

# Tree Shaking

Tree shaking is a feature that removes unused code during the bundling process, reducing the final bundle size. This is especially important in modern React applications to eliminate unused components, libraries, and functions.

Tree shaking relies on ES modules (ESM) to determine which code can be safely removed.
Bundlers like Webpack, Vite, and Parcel support tree shaking if the code is written in ES module syntax.





