import * as React from "react";
import * as ReactDOM from "react-dom";

import { Greet } from "./components/Greet";

ReactDOM.render(
    <Greet compiler="TypeScript" framework="React" />,
    document.getElementById("example"),
);
