export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    correctAnswer: Math.round(Math.random() * 100),
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});

export const DO_SOMETHING = 'DO_SOMETHING';
export const doSomething = () => ({
    type: DO_SOMETHING,
    num: 1,
    color: "#"+((1<<24)*Math.random()|0).toString(16),
});