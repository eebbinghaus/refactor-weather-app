const Current = () => {
    return (
        <div className="w-2/3 z-[5] bg-[#42666E] p-10 shadow-[0_20px_80px_20px_#42666E] rounded-xl border-[#cbf83e] border-solid border-2">
            <section className="pb-4">
                <h3 className="p-2">Current Forecast:</h3>
                <div className="bg-white border-black rounded-xl w-1/3">
                    <h3>Atlanta</h3>
                    <h6>Temp</h6>
                    <h6>Wind</h6>
                    <h6>Humidity</h6>
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
