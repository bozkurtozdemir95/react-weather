import React from 'react';
import './weatherLeft.css';
export default class WeatherLeft extends React.Component{
  
    
    render(){

        return(
            <div className="left">
                    <div className="dailyStatus">                   
                        <div className="clear" id="weatherStatus">
                            <img src={process.env.PUBLIC_URL + './img/' + this.props.daily.weather[0].id + this.props.isNight(this.props.daily.weather[0].icon) +  '.png'} alt=""/>
                        </div>
                        <div className="main">
                            <div className="temperature">{this.props.daily.main.temp.toFixed(1)}°</div>
                            <div className="description">{this.props.daily.weather[0].description}</div>
                        </div>
                        
                        
                    </div>
                    <div className="otherProps">
                        <div className="others">
                            <span>Nem</span>
                            <span>{this.props.daily.main.humidity}%</span>
                        </div>
                        <div className="others">
                            <span>Basınç</span>
                            <span>{this.props.daily.main.pressure}</span>
                        </div>
                        <div className="others">
                            <span>Rüzgar</span>
                            <span>{(this.props.daily.wind.speed * 1.609344).toFixed(1)}km/s</span>
                        </div>
                    </div>
            </div>
        )
    }

}
