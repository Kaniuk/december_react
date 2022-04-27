import React from 'react';

import {Cats, Dogs, Form} from "./components";

const App = () => {
    return (
        <div>
          <Form/>
            <div className='row'>
                <Dogs/>
                <Cats/>
            </div>
        </div>
    );
};

export default App;