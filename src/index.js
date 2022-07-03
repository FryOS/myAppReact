import React from "react";
import reactDom from "react-dom";
import Counter from "./components/counter";
import "bootstrap/dist/css/bootstrap.css";


const App = () => {
    return <Counter/>;
}

reactDom.render(<App/>, document.getElementById("root"));

