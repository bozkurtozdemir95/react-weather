import React from 'react';
import './weatherRight.css';
export default class WeatherRight extends React.Component{
      constructor(){
        super();
        this.state = {}
    }
    
    listForecast(list) {

        if(!list){
            return <div>Forecast loading...</div>
        }

        return list.map(function(status, index){
            
            return <div className="forecastElem" key={'hourly' + index}>
                         {status.dt_txt}
                         <div className="wind">
                             <img className="wind-img" src={process.env.PUBLIC_URL + "./img/wind.png"} alt=""/>
                             <span className="windSpeed">{(status.wind.speed * 1.609344).toFixed(1)}km/s</span>
                         </div> 

                         <div className="forecastTemp">
                              <span>{status.main.temp.toFixed(1)}°</span>    
                              <img className="forecast-img" src={process.env.PUBLIC_URL + "./img/521d.png"} alt=""/>   
                        </div>
                           
                 </div>
                 
        })
    }

    
    
    render(){

        var that = this;

        return(
            <div className="right">
                <div className="forecast">
                    {that.listForecast(this.props.forecast.list)}
                </div>
            </div>
        )
    }

}
