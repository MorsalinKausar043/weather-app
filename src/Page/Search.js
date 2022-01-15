import axios from 'axios';
import React,{useEffect, useState} from 'react';
import './Search.css';

const Search = () => {

    const [searchData, setSearchData] = useState("");
    const [weatherData, setWeatherData] = useState({})

    const submitData = async (e) => {
        e.preventDefault();
        if (!searchData)
        {
            alert("Please Fill The SearchBox")
        }
        else
        { 
            const weatherDatas = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchData}&appid=c5c5bd53ec54fa0e029a1528ee96f9db&units=metric`);
            console.log(weatherDatas.data);
            setWeatherData(weatherDatas.data)
            
        }
        e.target.reset();
    };

    useEffect( async() => {
        const weatherDatas = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=c5c5bd53ec54fa0e029a1528ee96f9db&units=metric`);
        console.log(weatherDatas);
        setWeatherData(weatherDatas.data); 
    },[])
        
    return (
        <div className='color py-5'> <br /> <br />
            <div className='row py-3'>
                <dir className="col-md-8">
                    <div className='p-2'>
                        <img className='img-fluid rounded shadow-lg' src={`https://www.timeanddate.com/scripts/cityog.php?title=14-Day%20Weather%20Forecast%20for&tint=0x007b7a&city=${weatherData?.name}&country=${ weatherData?.sys?.country}&image=${searchData}1`} alt="" />
                    </div>
                </dir>
     
                <dir  className="col-md-4 border color">
                    <div>
                        <div>
                        <br />
                            <div className="container">
                                <form onSubmit={submitData} className="">
                                    <div className="input-group mb-3">
                                        <input id="city-name" onBlur={(e)=> setSearchData(e.target.value)} type="text" className="form-control" placeholder="Enter a location for Weather ..." />
                                        <div className="input-group-append">
                                            <input type="submit" className="btn btn-danger py-2" value="Search"/>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>

                        <div>
                            <h4 className='text-start px- text-warning'>{weatherData?.name}</h4>
                            <h4 className='text-start px- text-warning'>{weatherData?.sys?.country}</h4>
                        </div>
                        <br />
                        <hr className="text-danger fsw-bold" />
                        <br />
                        <div>
                            <h4 className='text-start px-3'><mark>Weather details</mark></h4>
                            <br />
                            <table>
                                <tr>
                                    <th>City Name</th>
                                    <th>{weatherData?.name}</th>
                                </tr>
                                <tr>
                                    <td>Temp:</td>
                                    <td>{weatherData?.main?.temp}°C</td>
                                </tr>
                                <tr>
                                    <td>Temp Max:</td>
                                    <td>{weatherData?.main?.temp_max}°C</td>
                                </tr>
                                <tr>
                                    <td>Tamp Min:</td>
                                    <td>{weatherData?.main?.temp_min}°C</td>
                                </tr>
                            </table>
                            <hr />
                        </div>

                    </div>
                </dir>
            </div>
        </div>
    );
};

export default Search;