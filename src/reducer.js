import {
    NEW_GAME,
    MAKE_GUESS,
    TOGGLE_INFO_MODAL,
    DO_SOMETHING
} from './actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100),
    showInfoModal: false,
    color: null
};

export default (state, action) => {
    state = state || initialState;
    if (action.type === NEW_GAME) {
        state = Object.assign({
        }, initialState, {
            correctAnswer: action.correctAnswer
        });
        return state;
    }
    else if (action.type === MAKE_GUESS) {
        const guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            state = Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });
            // console.log(state);
            return state;
        }

        const difference = Math.abs(guess - state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        state = Object.assign({}, state, {
            feedback,
            guesses: state.guesses.concat(action.guess)
        });

        return state;
    }
    else if (action.type === TOGGLE_INFO_MODAL) {
         state = Object.assign({}, state, {
             showInfoModal: !state.showInfoModal
        });
        return state;
    } else if (action.type === DO_SOMETHING) {
        state = Object.assign({}, state, {
                color: action.color
         });
        console.log(action);
        return state;
    }
    return state;
};

