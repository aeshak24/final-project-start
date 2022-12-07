import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM, { render } from "react-dom";
import Layout from "./layout";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AnimalDropDown } from "./AnimalDropDown";

ReactDOM.render(
    <React.StrictMode>
        <div>
            <Layout />
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();
