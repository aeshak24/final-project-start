import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function revealDropDown(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);
    const [visible2, setVisible2] = useState<boolean>(true);
    const [visible3, setVisible3] = useState<boolean>(true);

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
                <Button onClick={flipVisibility}>Reveal</Button>
                {visible && <div>Turtle</div>}
            </div>
            <div>
                <Button onClick={flipVisibility2}>Reveal</Button>
                {visible2 && <div>fish</div>}
            </div>
            <div>
                <Button onClick={flipVisibility3}>Reveal</Button>
                {visible3 && <div>dolphin</div>}
            </div>
        </div>
    );
}
