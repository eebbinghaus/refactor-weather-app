import { useState, useEffect } from "react";

import "./App.css";
import Aside from "./components/Aside";
import Current from "./components/Current";
import API from "./components/API";
import { ApiProvider } from "./utils/apiContext";
import { LocalStorageProvider } from "./utils/localStorageContext";

function App() {
    

    return (
        <div>
            <LocalStorageProvider>

            <ApiProvider>
                <API />
            </ApiProvider>
            </LocalStorageProvider>
        </div>
    );
}

export default App;
