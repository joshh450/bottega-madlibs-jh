import React, { Component } from 'react';

import Input from './input'

class Card extends Component {

    constructor() {
        super()

        this.state = {
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
            adjectiveFive: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(event.target.name)
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
            <div className="card">
                {
                    inputData.map(data => Input((data), this.handleInputChange))
                }
            </div>
        )
    }
}

export default Card;