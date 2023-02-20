import React, { useEffect, useState } from "react";

const Aside = () => {
    const [input, setInput] = useState("");

    function fetchCoordinates() {
        let apiCall =
            "https://api.openweathermap.org/geo/1.0/direct?q=" +
            input +
            "&appid=e757412b6a4d63da3a66b29d23f46628";

        fetch(apiCall)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                let lat = data[0].lat;
                let lon = data[0].lon;
                let city = data[0].name;
                console.log(lat);
                console.log(lon);
                console.log(city);
            });
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className="w-1/3 pr-10">
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
