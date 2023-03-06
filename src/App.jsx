import { useState } from "react";

import "./App.css";
import Aside from "./components/Aside";
import Current from "./components/Current";
import API from "./components/API";
import { ApiProvider } from "./utils/apiContext";

function App() {
    

    return (
        <div>
            <ApiProvider>
                <API />
            </ApiProvider>
        </div>
    );
}

export default App;
