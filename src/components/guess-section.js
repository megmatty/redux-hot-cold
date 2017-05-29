import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';

import './guess-section.css';

export function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback" style={{color:props.color}}>{props.feedback}{props.color}</h2>
            <GuessForm />
        </section>
    );
}

const mapStateToProps = state => ({
    feedback: state.feedback,
    color: state.color
});



export default connect(mapStateToProps)(GuessSection);
