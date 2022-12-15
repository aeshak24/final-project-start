/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-parens */
import { monitorEventLoopDelay } from "perf_hooks";
import React, { useState, useCallback, useEffect } from "react";
import { useDrop, DragSourceMonitor, DragObjectWithType } from "react-dnd";
import AnimalItem from "./Animalitems";
import type { Animal } from "../interfaces/animals";
import "../styles/styles.css";
import { Button } from "react-bootstrap";

const boardStyles: Record<string, unknown> = {
    width: 50,
    height: 50
};

export function increaseSize(
    height: number,
    width: number,
    setHeight: (num: number) => void,
    setWidth: (num: number) => void
): JSX.Element {
    function i(): void {
        setHeight(height + 10);
        setWidth(width + 30);
    }
    function d(): void {
        setHeight(height - 10);
        setWidth(width - 30);
    }
    return (
        <div>
            <div>
                <Button onClick={i}> Increase ocean size </Button>
            </div>
            <div>
                <Button onClick={d}> Decrease ocean size </Button>
            </div>
        </div>
    );
}

interface OceanProps {
    animalsInOcean: Animal[];
    moveAnimal: (id: string, top: number, left: number) => void;
    addToOcean: (item: Animal, top: number, left: number) => void;
    removeFromOcean: (id: string) => void;
}

const Ocean = ({
    animalsInOcean,
    moveAnimal,
    addToOcean,
    removeFromOcean
}: OceanProps) => {
    const [height, setHeight] = useState<number>(400);
    const [width, setWidth] = useState<number>(600);
    const [, drop] = useDrop({
        accept: "Animal",
        drop(item: unknown, monitor) {
            const i = item as Animal;
            const delta = monitor.getDifferenceFromInitialOffset() as {
                x: number;
                y: number;
            };
            const left = Math.round(i.left + delta.x);
            const top = Math.round(i.top + delta.y);

            if (i.id.includes("sea")) {
                addToOcean(i, left, top);
            } else {
                moveAnimal(i.id, left, top);
            }
            return null;
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop
        })
    });

    return (
        <div id="board">
            <div>{increaseSize(height, width, setHeight, setWidth)}</div>
            <div
                ref={drop}
                id="room"
                style={{ width: width, height: height }}
            ></div>
            {animalsInOcean.map((a: Animal) => (
                <AnimalItem
                    key={a.id}
                    item={a}
                    removeFromOcean={removeFromOcean}
                />
            ))}
        </div>
    );
};

export default Ocean;
// comment
