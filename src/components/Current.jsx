import React, { useState } from "react";

const Current = (props) => {
    // function fetchWeather(lat, lon) {
    //     let dailyWeather =
    //         "https://api.openweathermap.org/data/3.0/onecall?lat=" +
    //         lat +
    //         "&lon=" +
    //         lon +
    //         "&units=imperial" +
    //         "&appid=e757412b6a4d63da3a66b29d23f46628";

    //     fetch(dailyWeather)
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (data) {
    //             console.log(data);
    //             let temp = Math.round(data.current.temp);
    //             console.log(temp);
    //             let wind = Math.round(data.current.wind_speed);
    //             console.log(wind);
    //             let humidity = data.current.humidity;
    //             console.log(humidity);
    //             let emoji = data.current.weather[0].icon;
    //             console.log(emoji);

    //             $("#emojiCurrent").attr(
    //                 "src",
    //                 "https://openweathermap.org/img/wn/" + emoji + ".png"
    //             );

    //             tempCurrent.textContent = "Temp: " + temp + "°F";

    //             windCurrent.textContent = "Wind Speed: " + wind + " MPH";

    //             humidityCurrent.textContent = "Humidity: " + humidity + "%";
    //         });
    // }

    return (
        <div className="w-1/2 z-[5] bg-[#42666E] p-10 shadow-[0_20px_80px_20px_#42666E] rounded-xl border-[#cbf83e] border-solid border-2">
            <section className="pb-4">
                <h3 className="p-2">Current Forecast:</h3>
                <div className="bg-white border-black rounded-xl w-1/3">
                    <h3>{props.city}</h3>
                    <img
                        src={"https://openweathermap.org/img/wn/" + `${props.emoji}` + ".png"}
                        alt="weather emoji"
                    />
                    <h6>Temp: {props.temp}°F</h6>
                    <h6>Wind Speed: {props.wind} MPH</h6>
                    <h6>Humidity: {props.humidity}%</h6>
                </div>
            </section>
            <section>
                <h3>5-Day Forecast:</h3>
                <div className="flex p-2">
                    <div className="bg-white border-black rounded-xl w-1/5 m-2">
                        <h3>Atlanta</h3>
                        <h6>Temp</h6>
                        <h6>Wind</h6>
                        <h6>Humidity</h6>
                    </div>
                    <div className="bg-white border-black rounded-xl w-1/5 m-2">
                        <h3>Atlanta</h3>
                        <h6>Temp</h6>
                        <h6>Wind</h6>
                        <h6>Humidity</h6>
                    </div>
                    <div className="bg-white border-black rounded-xl w-1/5 m-2">
                        <h3>Atlanta</h3>
                        <h6>Temp</h6>
                        <h6>Wind</h6>
                        <h6>Humidity</h6>
                    </div>
                    <div className="bg-white border-black rounded-xl w-1/5 m-2">
                        <h3>Atlanta</h3>
                        <h6>Temp</h6>
                        <h6>Wind</h6>
                        <h6>Humidity</h6>
                    </div>
                    <div className="bg-white border-black rounded-xl w-1/5 m-2">
                        <h3>Atlanta</h3>
                        <h6>Temp</h6>
                        <h6>Wind</h6>
                        <h6>Humidity</h6>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Current;
