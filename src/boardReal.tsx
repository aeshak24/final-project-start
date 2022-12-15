/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-parens */
import { monitorEventLoopDelay } from "perf_hooks";
import React, { useState, useCallback, useEffect } from "react";
import { useDrop, DragSourceMonitor, DragObjectWithType } from "react-dnd";
import AnimalItem from "./Animalitems";
import type { Animal } from "./interfaces/animals";

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
    const [drop] = useDrop({
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
            {animalsInOcean.map((a: Animal) => (
                <AnimalItem key={a.id} item={a} />
            ))}
        </div>
    );
};

export default Ocean;
// <div ref={drop} id="room"></div>
//removeFromOcean={removeFromOcean}
