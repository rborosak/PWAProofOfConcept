import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Greeting } from './components/Greeting';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Greeting name="User" />,
    document.getElementById('root')
);

registerServiceWorker();