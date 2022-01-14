import React from 'react';
import './Search.css'

const Search = () => {
    return (
        <div className='color'> <br /> <br />
            <div className='row'>
                <dir className="col-md-8">
                    <div className='p-2'>
                        <img width="100%" src="https://www.timeanddate.com/scripts/cityog.php?title=14-Day%20Weather%20Forecast%20for&tint=0x007b7a&city=Dhaka&country=Bangladesh&image=dhaka1" alt="" />
                    </div>
                </dir>
     
                <dir  className="col-md-4 border color">
                    <div>
                        <div>
                        <br />
                            <div class="container">
                                <form class="">
                                    <div class="input-group mb-3">
                                        <input id="city-name" type="text" class="form-control" placeholder="Enter a location for Weather ..." />
                                        <div class="input-group-append">
                                            <button type="button" class="btn btn-danger py-2">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>

                        <div>
                            <h4 className='text-start px- text-warning'>bangladesh</h4>
                            <h4 className='text-start px- text-warning'>bangladesh</h4>
                            <h4 className='text-start px- text-warning'>bangladesh</h4>
                        </div>
                        <br />
                        <hr className="text-danger fsw-bold" />
                        <br />
                        <div>
                            <h4 className='text-start px-3'><mark>Weather details</mark></h4>
                            <br />
                            <table>
                                <tr>
                                    <th>Firstname</th>
                                    <th>0</th>
                                </tr>
                                <tr>
                                    <td>Peter</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>Lois</td>
                                    <td>5000</td>
                                </tr>
                                <tr>
                                    <td>Lois</td>
                                    <td>5000</td>
                                </tr>
                                <tr>
                                    <td>Lois</td>
                                    <td>5000</td>
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