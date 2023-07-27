import React from "react";
import {connect} from "react-redux";
import "../styles/CitiesList.css";
import {useHistory} from "react-router-dom";
import {setCity} from "../store/weatherReducer/weatherReducer";
import WeatherIcon from "./WeatherIcon";

const CitiesList = (props) => {
    const router = useHistory();
    if (props.cities.length > 0) {
        return (
            <div className='flex cities-list'>
                <div className='blue-line'></div>
                <div className='cities'>
                    {props.cities.map((city) => (
                        <button
                            onClick={() => {
                                router.push(`/SimpleWeather/cities/${city.city}`);
                                props.updateCityInStore(city.city);
                            }}
                            key={city.city}
                            className='cities__btn'
                        >
                            <div>{city.city}</div>
                            <div className='cities__btn-group'>
                                <WeatherIcon className='cities__btn-icon' code={city.code} isDay={city.isDay} color={{fill:'#2D81FF'}}/>
                                <div>{props.tempScale === "celsius" ? city.temp_c : city.temp_f}°</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className='flex cities-list'>
                <div className='blue-line'></div>
                <div className='cities-empty'>
                    <p>Oops!</p>
                    <p>You haven't added any city yet!</p>
                </div>
                <div className='blue-line'></div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    cities: state.cities.arrOfCities,
    tempScale: state.weatherData.tempScale,
});

const mapDispatchToProps = (dispatch) => ({
    updateCityInStore: (city) => {
        dispatch(setCity(city));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
