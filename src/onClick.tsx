import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AttributeDropDown } from "./DropDown";

export function revealDropDown(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    const [visible2, setVisible2] = useState<boolean>(false);
    const [visible3, setVisible3] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisible(!visible);
    }
    function flipVisibility2(): void {
        setVisible2(!visible2);
    }
    function flipVisibility3(): void {
        setVisible3(!visible3);
    }
    return (
        <div>
            <div>
                <Button onClick={flipVisibility}>Turtle</Button>
                {visible && (
                    <div>
                        {" "}
                        <AttributeDropDown
                            attributes={["hello"]}
                        ></AttributeDropDown>
                        ;
                    </div>
                )}
            </div>
            <div>
                <Button onClick={flipVisibility2}>Fish</Button>
                {visible2 && (
                    <div>
                        {" "}
                        <AttributeDropDown
                            attributes={["hello"]}
                        ></AttributeDropDown>
                        ;
                    </div>
                )}
            </div>
            <div>
                <Button onClick={flipVisibility3}>Dolphin</Button>
                {visible3 && (
                    <div>
                        {" "}
                        <AttributeDropDown
                            attributes={["hello"]}
                        ></AttributeDropDown>
                        ;
                    </div>
                )}
            </div>
        </div>
    );
}
