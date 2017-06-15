import React from 'react';
import './head.css';

export default class Header extends React.Component{


    render(){
        return(
            <div className="header">
                <h1>{this.props.daily.name}</h1>
                {this.props.daily.sys ? <span>{this.props.daily.sys.country}</span> : ''}
                <input type="text" placeholder="Şehir adı giriniz.." value={this.props.cityId.value} onChange={this.props.handleChange.bind(this)}/>
            </div>
        )
    }
}