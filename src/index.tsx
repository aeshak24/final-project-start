import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM, { render } from "react-dom";
import Layout from "./layout";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
ReactDOM.render(
    <React.StrictMode>
        <div>
            <Layout />
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();
/*
function App() {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <Layout />
            </DndProvider>
        </div>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
*/
