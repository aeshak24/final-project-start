import React, { FC, useState } from "react";
import type { CSSProperties } from "react";
import { useDrop, XYCoord } from "react-dnd";
import Pic from "./Pic";
import { ItemTypes } from "./constants";
import { Button } from "react-bootstrap";
import { deflate } from "zlib";

const style: CSSProperties = {
    height: "20rem",
    width: "50rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "normal",
    float: "left"
};
export const dragdrop: FC = () => {
    const [top, setTop] = useState<number>(150);
    const [left, setLeft] = useState<number>(100);

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.PIC,
        drop: (item, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
            setLeft(left + delta.x);
            setTop(top + delta.y);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });
    const isActive = canDrop && isOver;
    let backgroundColor = "#222";
    if (isActive) {
        backgroundColor = "darkgreen";
    }
    function resetPiece() {
        setTop(150);
        setLeft(100);
    }
    return (
        <div
            ref={drop}
            style={{ ...style, backgroundColor }}
            data-testid="dustbin"
        >
            <Button onClick={resetPiece}>Reset</Button>
        </div>
    );
};
