import React from 'react';
import './head.css';

export default class Header extends React.Component{


    render(){
        return(
            <div className="header">
                <h1 className="country">{this.props.daily.name} 
                    {this.props.daily.sys ? <span>{this.props.daily.sys.country}</span> : ''}
                </h1>
                <input type="text" placeholder="Şehir adı giriniz.." value={this.props.cityId.value} onChange={this.props.handleChange.bind(this)}/>
            </div>
        )
    }
}