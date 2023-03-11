import React, { useState, useEffect } from "react";
import { useLocalStorageContext } from "../utils/localStorageContext";

const Aside = ({ input, handleChange, fetchCoordinates }) => {
    const { cities, setCities } = useLocalStorageContext;

    // useEffect(() => {
    //     setCities(
    //         localStorage.getItem("cities")
    //             ? JSON.parse(localStorage.getItem("cities"))
    //             : []
    //     );
    // }, []);

    return (
        <div className="w-1/2 pr-10">
            <form className="w-full z-[5] bg-[#42666E] p-10 shadow-[0_20px_80px_20px_#42666E] rounded-xl border-[#cbf83e] border-solid border-2">
                <div>
                    <h1 className="text-[#cbf83e] p-4">Search for a City:</h1>
                    <input
                        type="text"
                        name="city"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        value={input}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button
                        className="shadow bg-[#cbf83e] hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-[#42666E] font-bold py-2 px-4 rounded w-[100%]"
                        type="button"
                        value="Send"
                        onClick={fetchCoordinates}
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Aside;
