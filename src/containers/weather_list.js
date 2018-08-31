import React, {Component} from 'react';
import {connect} from 'react-redux';


class WeatherList extends Component {
    render(){
        return(
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        )
    }
}

function mapStateToProps ({weather}){
    return {weather}   // this is like (weather: state.weather) but with ES6 we can write {weather} as both are same 
}

export default connect (mapStateToProps)(WeatherList)