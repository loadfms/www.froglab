import React, { Component } from 'react'
import logo from './../../assets/images/logo.png'

export default class Home extends Component {
    render() {
        return (
            <div className="home-page ">
                <div className="home-page__content container">
                    <header className="home-page__content__header row">
                        <button className="home-page__content__header-brand col-md-8">froglab.</button>
                    </header>
                    <div className="home-page__content__hero row">
                        <h1 className="home-page__content__hero-title col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-12 col-lg-offset-0 col-lg-12 center">froglab</h1>
                        <h2 className="home-page__content__hero-subtitle col-xs-12 col-md-12 center">uma nova maneira de tornar seus sonhos realidade</h2>
                    </div>
                </div>
            </div>
        )
    }
}
