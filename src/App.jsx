import { useState } from "react";

import "./App.css";
import Aside from "./components/Aside";
import Current from "./components/Current";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex ">
            <Aside />
            <Current />
        </div>
    );
}

export default App;
