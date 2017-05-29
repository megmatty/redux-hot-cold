import React from 'react';
import {connect} from 'react-redux';

import {makeGuess} from '../actions';
import {doSomething} from '../actions';

import './guess-form.css';

export class GuessForm extends React.Component {
    submitGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.dispatch(makeGuess(value));
        this.props.dispatch(doSomething());
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.submitGuess(e)}>
                    <input type="text" name="userGuess" id="userGuess"
                        className="text" maxLength="3" autoComplete="off"
                        placeholder="Enter your Guess" required
                        ref={input => this.input = input} />
                    <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
                </form>
                <div >BLAH</div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    // guessCount: state.guesses.length,
    // correctAnswer: state.correctAnswer,
    // color: state.color
});

export default connect(mapStateToProps)(GuessForm);
