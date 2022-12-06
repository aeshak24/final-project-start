import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./styles/App.css";

function App(): JSX.Element {
    console.log("hello");
    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row>
                        <Col>
                            <span>Ocean Game</span>
                            <Button> start </Button>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}
export default App;
