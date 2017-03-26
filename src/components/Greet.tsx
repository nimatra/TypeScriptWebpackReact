import * as React from "react";

export interface IGreetProps {
  compiler: string;
  framework: string;
}

// 'GreetProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Greet extends React.Component<IGreetProps, undefined> {
    public render() {
        return <h1>Greetings from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
