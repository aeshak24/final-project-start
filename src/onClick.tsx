/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { DolphinAttributeDropDown } from "./DolphinDropDown";
import { FishAttributeDropDown } from "./FishDropDown";
import { TurtleAttributeDropDown } from "./TurtleDropDown";
import { JellyfishAttributeDropDown } from "./JellyfishDropDown";
import { StarfishAttributeDropDown } from "./StarfishDropDown";

export function revealDropDown(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    const [visible2, setVisible2] = useState<boolean>(false);
    const [visible3, setVisible3] = useState<boolean>(false);
    const [visible4, setVisible4] = useState<boolean>(false);
    const [visible5, setVisible5] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisible(!visible);
    }
    function flipVisibility2(): void {
        setVisible2(!visible2);
    }
    function flipVisibility3(): void {
        setVisible3(!visible3);
    }
    function flipVisibility4(): void {
        setVisible4(!visible4);
    }
    function flipVisibility5(): void {
        setVisible5(!visible5);
    }
    return (
        <div>
            <div>
                <Button onClick={flipVisibility}>Turtle</Button>
                {visible && (
                    <div>
                        <TurtleAttributeDropDown
                            attributes={["hello"]}
                        ></TurtleAttributeDropDown>
                        ;
                    </div>
                )}
            </div>
            <div>
                <Button onClick={flipVisibility2}>Fish</Button>
                {visible2 && (
                    <div>
                        <FishAttributeDropDown
                            attributes={["hello"]}
                        ></FishAttributeDropDown>
                        ;
                    </div>
                )}
            </div>
            <div>
                <Button onClick={flipVisibility3}>Dolphin</Button>
                {visible3 && (
                    <div>
                        <DolphinAttributeDropDown
                            attributes={["hello"]}
                        ></DolphinAttributeDropDown>
                        ;
                    </div>
                )}
            </div>
            <div>
                <Button onClick={flipVisibility4}>Jellyfish</Button>
                {visible3 && (
                    <div>
                        <JellyfishAttributeDropDown
                            attributes={["hello"]}
                        ></JellyfishAttributeDropDown>
                        ;
                    </div>
                )}
            </div>
            <div>
                <Button onClick={flipVisibility5}>Starfish</Button>
                {visible3 && (
                    <div>
                        <StarfishAttributeDropDown
                            attributes={["hello"]}
                        ></StarfishAttributeDropDown>
                        ;
                    </div>
                )}
            </div>
        </div>
    );
}
// deploy comment
