/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-parens */
import React, { useState, useCallback, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import type { Animal } from "./interfaces/animals";
import AnimalList from "./components/AnimalList";
import Ocean from "./components/boardReal";
import "./styles/Layout.css";
import "./styles/index.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const oceanImages: string[] = ["empty", "z-style", "suite-style"];

interface savedOcean {
    id: number;
    animal: Animal[];
}

const Layout = () => {
    const [animalChoicesShown, setAnimalChoicesVisibility] = useState(false);
    const [animalChoice, setAnimalChoice] = useState("empty");
    const [savedOceans, setSavedOceans] = useState<savedOcean[]>([]);

    function changeAnimalType(a: string): void {
        setAnimalChoice(a);
    }

    const [animalsInOcean, setanimalsInOcean] = useState<Animal[]>([]);

    const addToOcean = (item: Animal, left: number, top: number) => {
        const newId = `${item.name}${animalsInOcean.length + 1}`;
        const newItem = { ...item, id: newId, left: left, top: top };
        const newList = [...animalsInOcean, newItem];
        setanimalsInOcean(newList);
    };
    const removeFromOcean = (id: string) => {
        const newItems = animalsInOcean.filter((a) => a.id !== id);
        setanimalsInOcean(newItems);
    };

    const clearOcean = () => {
        setanimalsInOcean([]);
    };

    const moveAnimal = useCallback(
        (id, left, top) => {
            const newItems = animalsInOcean.map((item) => {
                return item.id === id
                    ? { ...item, top: top, left: left }
                    : item;
            });
            setanimalsInOcean(newItems);
        },
        [animalsInOcean]
    );
    const createNewOcean = () => {
        const newSavedOcean: savedOcean = {
            id: savedOceans.length + 1,
            animal: [...animalsInOcean]
        };
        const newSavedOceans = [...savedOceans, newSavedOcean];
        setSavedOceans(newSavedOceans);
        setanimalsInOcean([]);
    };
    const switchToOcean = (id: number) => {
        const newOcean = savedOceans[id - 1];
        setanimalsInOcean(newOcean.animal);
    };
    React.useEffect(() => {
        console.log(animalsInOcean);
    }, [animalsInOcean]);
    return (
        <DndProvider backend={HTML5Backend}>
            <div id="grid">
                <div id="logo-container">THE OCEAN GAME</div>
                <div
                    id="left-sea-container"
                    style={{ backgroundColor: "purple" }}
                >
                    <Container>
                        <Row>
                            <Button onClick={() => clearOcean()}>
                                Clear Ocean
                            </Button>
                        </Row>
                        <AnimalList />
                    </Container>
                </div>
                <div id="top-sea-container">
                    <Container>
                        <Row>
                            <Col>
                                <Button
                                    style={{ backgroundColor: "transparent" }}
                                    onClick={() => createNewOcean()}
                                >
                                    Create Ocean
                                </Button>
                            </Col>
                            <Col>
                                <div id="room-selection-container">
                                    {savedOceans.map((ocean) => (
                                        <Button
                                            className="ocean-selection-button"
                                            key={`ocean${ocean.id}`}
                                            onClick={() =>
                                                switchToOcean(ocean.id)
                                            }
                                        >
                                            Ocean {ocean.id}
                                        </Button>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id="main-ocean-container">
                    <Ocean
                        animalsInOcean={animalsInOcean}
                        moveAnimal={moveAnimal}
                        addToOcean={addToOcean}
                        removeFromOcean={removeFromOcean}
                    />
                </div>
            </div>
        </DndProvider>
    );
};
export default Layout;
