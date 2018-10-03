import React, { Component } from 'react';

import Input from './input'
import Content from './content';

const INITIAL_STATE = {
    color: '',
    pluralNoun: '',
    adjectiveOne: '',
    celebOne: '',
    adjectiveTwo: '',
    nounOne: '',
    numberOne: '',
    numberTwo: '',
    nounTwo: '',
    adjectiveThree: '',
    celebTwo: '',
    celebThree: '',
    adjectiveFour: '',
    nounThree: '',
    celebFour: '',
    adjectiveFive: '',
    contentVisible: false
}

class Card extends Component {

    constructor() {
        super()

        this.state = INITIAL_STATE

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        // console.log(this.state.color)
        // console.log(event.target.name)
    }

    handleFormSubmit(event) {
        event.preventDefault()

        if (this.state.contentVisible) {
            this.setState(INITIAL_STATE)
        } else {
            this.setState({ contentVisible: true })
        }
    }

    render() {

        const inputData = [
            {CustomLabel: 'Color', state: this.state.color, name: 'color'},
            {CustomLabel: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
            {CustomLabel: 'Adjective', state: this.state.adjectiveOne, name: 'adjectiveOne'},
            {CustomLabel: 'Celebrity', state: this.state.celebOne, name: 'celebOne'},

            {CustomLabel: 'Adjective', state: this.state.adjectiveTwo, name: 'adjectiveTwo'},
            {CustomLabel: 'Noun', state: this.state.nounOne, name: 'nounOne'},
            {CustomLabel: 'Number', state: this.state.numberOne, name: 'numberOne'},
            {CustomLabel: 'Number', state: this.state.numberTwo, name: 'numberTwo'},

            {CustomLabel: 'Noun', state: this.state.nounTwo, name: 'nounTwo'},
            {CustomLabel: 'Adjective', state: this.state.adjectiveThree, name: 'adjectiveThree'},
            {CustomLabel: 'Celebrity', state: this.state.celebTwo, name: 'celebTwo'},
            {CustomLabel: 'Celebrity', state: this.state.celebThree, name: 'celebThree'},

            {CustomLabel: 'Adjective', state: this.state.adjectiveFour, name: 'adjectiveFour'},
            {CustomLabel: 'Noun', state: this.state.nounThree, name: 'nounThree'},
            {CustomLabel: 'Celebrity', state: this.state.celebFour, name: 'celebFour'},
            {CustomLabel: 'Adjective', state: this.state.adjectiveFive, name: 'adjectiveFive'}
        ]

        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                {
                    inputData.map((data, index) => {
                        return Input( (data), this.handleInputChange, index)
                    })
                }
                </div>
                <button type="submit">{!this.state.contentVisible ? 'Generate Mad Lib' : 'Clear Form'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        )
    }
}

export default Card;