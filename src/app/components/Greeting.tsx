import * as React from 'react';

type GreetingProps = {
    name : string;
}

export const Greeting : React.SFC<GreetingProps> = (props) => {
    return <React.Fragment>
        <h1>Hello, {props.name}</h1><br/><br/>
        Please install this app.
    </React.Fragment>
}

