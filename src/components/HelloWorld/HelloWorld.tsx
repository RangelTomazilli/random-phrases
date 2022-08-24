import React from "react"
import { Background } from "./HelloWorld.styled";

type HelloWorldProps =  {
    text: string
}

export class HelloWorld extends React.Component<HelloWorldProps> {
    render() {
        const {text} = this.props
        return (
            <Background>
                {text}
            </Background>
        )
    }
}