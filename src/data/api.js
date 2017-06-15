import React from 'react';
export default class Api extends React.Component{
    render(){
        return(
            var api = {
				baseUrl: "http://api.openweathermap.org/data/2.5/",
				dailyForecastUrl: "forecast/daily",
				currentWeatherUrl: "weather",
				type: "&units=metric&mode=xml",
				key: '&appid=1bcaf5233e558eb347604045a313d1bc', 
				getDailyForecastUrl: function() {
					return this.baseUrl + this.dailyForecastUrl;
				},
				getCurrentWeatherUrl: function() {
					return this.baseUrl + this.currentWeatherUrl;
				}
			}
        )
    }
}