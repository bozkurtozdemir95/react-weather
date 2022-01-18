import React, { Component } from 'react';
import './App.css';
import Header from './components/head/head.js'
import WeatherLeft from './components/weather/weatherLeft.js'
import WeatherRight from './components/weather/weatherRight.js'
import axios from 'axios';
import debounce from 'debounce';


const dailyUrl = "https://api.openweathermap.org/data/2.5/weather?q={CITY}&mode=json&units=metric&APPID=840b001ff8f9fdf61e65d999355c488c&lang=tr";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q={CITY}&mode=json&units=metric&APPID=840b001ff8f9fdf61e65d999355c488c&lang=tr";
const geoDailyUrl = "https://api.openweathermap.org/data/2.5/weather?mode=json&units=metric&APPID=840b001ff8f9fdf61e65d999355c488c&lang=tr&lat={LAT}&lon={LON}"
const geoForecastUrl = "https://api.openweathermap.org/data/2.5/forecast?mode=json&units=metric&APPID=840b001ff8f9fdf61e65d999355c488c&lang=tr&lat={LAT}&lon={LON}"

class App extends Component {
  constructor(){
        super();
        this.state ={
        daily: {},
        forecast: {},
        cityId:'', 
        imgClass: '',
    }

    this.getData = debounce(this.getData.bind(this), 500);

  }
    
    componentDidMount(){   
      var that = this;   
      navigator.geolocation.getCurrentPosition(function(pos){
        that.getData(pos.coords);
      });

    }
    handleChange(event) {
        this.setState({cityId: event.target.value});
        this.getData();       
    } 
    
    isNight(str){
        return str.indexOf('n') === -1 ? 'd' : 'n';
    }

    
    getData(pos){
      var that = this;
      var _dailyUrl = '';
      var _forecastUrl = '';

      if(pos){
        _dailyUrl = geoDailyUrl.replace('{LAT}', pos.latitude).replace('{LON}', pos.longitude);
        _forecastUrl = geoForecastUrl.replace('{LAT}', pos.latitude).replace('{LON}', pos.longitude);
      }else {
        _dailyUrl = dailyUrl.replace('{CITY}', this.state.cityId);
        _forecastUrl = forecastUrl.replace('{CITY}', this.state.cityId);
      }

      axios.get(_dailyUrl).then(function(response){
        that.setState({daily: response.data});
      })

      axios.get(_forecastUrl).then(function(response){
        that.setState({forecast: response.data});
      })
    }
    


  render() {
    return (
      <div className="App">
        <Header cityId={this.state.cityId} handleChange={this.handleChange.bind(this)} daily={this.state.daily} forecast={this.state.forecast}/>
        <div className="content">
            {this.state.daily.name ? <WeatherLeft isNight={this.isNight.bind(this)} daily={this.state.daily}/> : ''}
            {this.state.daily.name ? <WeatherRight forecast={this.state.forecast}/> : ''}
        </div>
      </div>
    );
  }
}

export default App;
