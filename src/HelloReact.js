
import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

export default class HelloReact extends React.Component {
    render() {
    	return(
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Saiba mais</a></p>
          <Button bsStyle="success">Um botão descolado</Button>
        </Jumbotron>
        )
    }
}
