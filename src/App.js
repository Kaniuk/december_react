import React, {useReducer} from 'react';

import './App.css';

const init = (initArg) => {
    return {count1: initArg, count2: initArg, count3: initArg};
};

const reducer = (state, action) => {
    switch (action.type) {
        case '+' :
            return {...state, count1: state.count1 + 1};
        case '-' :
            return {...state, count1: state.count1 - 1};
        case '0' :
            return {...state, count1: 0};
        case 'plus' :
            return {...state, count2: state.count2 + 1};
        case 'minus' :
            return {...state, count2: state.count2 - 1};
        case 'zero' :
            return {...state, count2: 0};
        case 'inc' :
            return {...state, count3: state.count3 + 1};
        case 'dec' :
            return {...state, count3: state.count3 - 1};
        case 'none' :
            return {...state, count3: 0};
    }
};


const App = () => {
    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div className="counter">
            {state.count1}
            <div className="buttons">
                <button onClick={() => dispatch({type: "+"})}>+</button>
                <button onClick={() => dispatch({type: "-"})}>-</button>
                <button onClick={() => dispatch({type: "0"})}>0</button>
            </div>
            {state.count2}
            <div className="buttons">
                <button onClick={() => dispatch({type: "plus"})}>+</button>
                <button onClick={() => dispatch({type: "minus"})}>-</button>
                <button onClick={() => dispatch({type: "zero"})}>0</button>
            </div>
            {state.count3}
            <div className="buttons">
                <button onClick={() => dispatch({type: "inc"})}>+</button>
                <button onClick={() => dispatch({type: "dec"})}>-</button>
                <button onClick={() => dispatch({type: "none"})}>0</button>
            </div>
        </div>
    );
};


export default App;