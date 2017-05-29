import React from 'react';
import {connect} from 'react-redux';


// import './guess-section.css';

export function Meg(props) {
    return (
        <section>
            <h2 id="feedback" style={{color:props.color}} onClick={function log(){
            			console.log('test');
            }}>BLAH BLAH BLAH </h2>
        </section>
    );
}

const mapStateToProps = state => ({
    something: 'SOEMTHING',
    color: state.color
});

const ghettoStateToProps = function(state) {
	console.log(state);
	return {
		something: 'SOEMTHING',
    color: state.color
	}
};

export default connect(ghettoStateToProps)(Meg);

