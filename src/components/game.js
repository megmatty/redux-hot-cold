import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import Meg from './meg';

export default function Game(props) {
    return (
        <div>
            <Header />
            <GuessSection />
            <Meg />
            <GuessCount />
            <GuessList />
        </div>
    );
};

