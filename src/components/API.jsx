import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import Current from "./Current";
import { useApiContext } from "../utils/apiContext";

const API = () => {
    

    // const [input, setInput] = useState("");
    // const [lat, setLat] = useState("");
    // const [lon, setLon] = useState("");
    // const [city, setCity] = useState("");

    const {
        input,
        lat,
        lon,
        city,
        temp,
        wind,
        humidity,
        emoji,
        setInput,
        setLat,
        setLon,
        setCity,
        setTemp,
        setWind,
        setHumidity,
        setEmoji,
    } = useApiContext();

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
                setLat(lat);
                setLon(lon);
                setCity(city);
                console.log(lat);
                console.log(lon);
                console.log(city);

                fetchWeather(lat, lon);
            });
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        console.log(e.target.value);
    };

    function fetchWeather(lat, lon) {
        let dailyWeather =
            "https://api.openweathermap.org/data/3.0/onecall?lat=" +
            lat +
            "&lon=" +
            lon +
            "&units=imperial" +
            "&appid=e757412b6a4d63da3a66b29d23f46628";

        fetch(dailyWeather)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                let temp = Math.round(data.current.temp);
                console.log(temp);
                let wind = Math.round(data.current.wind_speed);
                console.log(wind);
                let humidity = data.current.humidity;
                console.log(humidity);
                let emoji = data.current.weather[0].icon;
                console.log(emoji);
                setTemp(temp);
                setWind(wind);
                setHumidity(humidity);
                setEmoji(emoji);

                $("#emojiCurrent").attr(
                    "src",
                    "https://openweathermap.org/img/wn/" + emoji + ".png"
                );

                tempCurrent.textContent = "Temp: " + temp + "°F";

                windCurrent.textContent = "Wind Speed: " + wind + " MPH";

                humidityCurrent.textContent = "Humidity: " + humidity + "%";
            });
    }

    return (
        <div className="flex">
            <Aside
                input={input}
                fetchCoordinates={fetchCoordinates}
                handleChange={handleChange}
            />
            <Current
                temp={temp}
                city={city}
                wind={wind}
                humidity={humidity}
                emoji={emoji}
            />
        </div>
    );
};

export default API;
