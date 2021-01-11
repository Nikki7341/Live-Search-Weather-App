//npx helps us provide versioning,dependency issues and installing unnecessary packages that we just want to try out 
//it also provide a clear and easy way of executing pacakges , commands , modules and even github and repositories.

import React, { useEffect, useState } from "react";
import "./CSS/style.css";

// useState is a Hook (function) that allows you to have state variables in functional components. you pass the initial state to this fucntion 
//anc it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
//fde28d68188251f9f03fedea57290b8e
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=fde28d68188251f9f03fedea57290b8e
//By using useEffect() Hook, you tell react that your components needs to do somthing after render. React will remember the function you 
//passed (we'll refer to it as our "effect"), and call it later after performing the DOM updates
//b14425a6554d189a2d7dc18a8e7d7263 = APIID thapa teachnical
//fde28d68188251f9f03fedea57290b8e

const TempApp = () => {

    const [city, setCity ] = useState(null);
    const [search, setSearch] = useState("Delhi");

    useEffect ( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`
            const response = await fetch(url); 
            const resJson = await response.json();
            //console.log(resJson); 
            setCity(resJson.main);
        };
        fetchApi();
    },[search] )
    
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input 
                    type="search"
                    value={search}
                    className="inputFeild"
                    onChange={ (event) => {setSearch(event.target.value) } } />
                

                </div>
        {!city ? (
            <p className="errorMsg"> No Data Found </p>
        ) : (
            <div>
            <div className="info">
                <h2 className="location">
                <i className="fas fa-street-view"> </i> {search}
                </h2>
                <h1 className="temp">
                {city.temp}°Cel
                </h1>
                <h3 className="tempmin_max"> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
            </div>

            <div className = "wave -one"></div>
            <div className = "wave -two"></div>
            <div className = "wave -three"></div>
            </div>

        )}
            
            
            </div>
        </>

    )
}
export default TempApp;