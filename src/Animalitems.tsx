/* eslint-disable no-extra-parens */
import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import type { Animal } from "./interfaces/animals";

interface AnimalItemProps {
    item: Animal;
    removeFromGame?: (id: string) => void;
}

const AnimalItem = ({ item, removeFromGame }: AnimalItemProps) => {
    const { id, name, left, top, height, width, color } = item;
    const [position, setPosition] = useState({ top: top, left: left });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const i = document.getElementById(item.id)?.getBoundingClientRect();
        const t = i ? i.y : 0;
        const l = i ? i.x : 0;
        setPosition({ top: t, left: l });
    }, []);

    const [drag] = useDrag({
        item: {
            type: "Animal",
            id,
            name,
            left: id.includes("sea") ? position.left : left,
            top: id.includes("sea") ? position.top : top,
            height,
            width,
            color
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    const styles: Record<string, unknown> = {
        position: id.includes("sea") ? "static" : "absolute",
        left,
        top,
        height: id.includes("sea") ? height / 2 : height,
        width: id.includes("sea") ? width / 2 : width,
        backgroundColor: color,
        margin: 0
    };

    const showDimensionsAndIcon = isHovered && !id.includes("sea");

    return (
        <div>
            id = {item.id}
            style = {styles}
            ref = {drag}
            onMouseEnter = {() => setIsHovered(true)}
            onMouseLeave = {() => setIsHovered(false)}
            <div style={{ width: "100%", height: "100%" }}>
                {showDimensionsAndIcon && (
                    <>
                        <p className="dimensions-label">
                            H: {height / 3} inches
                        </p>
                        <p className="dimensions-label">
                            W: {width / 3} inches
                        </p>
                    </>
                )}
                {showDimensionsAndIcon && (
                    <p
                        id="remove-button"
                        onClick={() => removeFromGame && removeFromGame(id)}
                    >
                        Remove
                    </p>
                )}
            </div>
        </div>
    );
};
export default AnimalItem;
