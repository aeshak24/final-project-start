import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function revealDropDown(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <div>
                <Button onClick={flipVisibility}>Reveal</Button>
                {visible && <div>Turtle</div>}
            </div>
            <div>
                <Button onClick={flipVisibility}>Reveal</Button>
                {visible && <div>Turtle</div>}
            </div>
            <div>
                <Button onClick={flipVisibility}>Reveal</Button>
                {visible && <div>Turtle</div>}
            </div>
        </div>
    );
}
