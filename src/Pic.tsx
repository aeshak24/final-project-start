import React, { CSSProperties, FC } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constants";
import { DolphinAttributeDropDown } from "./DolphinDropDown";

export interface image {
    id: string; // unique number for each image to track
    height: number; //height of the image
    width: number; //width of the image
    top: number; // y position of image
    left: number; // x position of image
    angle: number; // rotation used for margin of error
    free: boolean; // whether or not image can move freely
    reflected: boolean; // whether or not piece is reflected
    path: string; // path of the image
}

export function print(): void {
    console.log("clicks");
    <div>
        <DolphinAttributeDropDown attributes={[]}></DolphinAttributeDropDown>
    </div>;
}
const imageStyle: CSSProperties = {
    position: "absolute",
    color: "white"
};

const Pic: FC<image> = ({
    id,
    height,
    width,
    top,
    left,
    angle,
    free,
    reflected,
    path
}) => {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.PIC,
            id: id,
            height: height,
            width: width,
            top: top,
            left: left,
            angle: angle,
            free: free,
            reflected: reflected,
            path: path
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });
    return (
        <div
            ref={drag}
            style={{
                ...imageStyle,
                opacity: isDragging ? 1 : 0.5,
                top: top + "px",
                left: left + "px"
            }}
        >
            <img
                src={require("./fish.jpg")}
                onClick={print}
                style={{ width: "100px" }}
            />
            <img src={require("./turtle.jpg")} style={{ width: "100px" }} />
            <img src={require("./dolphin.jpg")} style={{ width: "100px" }} />
            <img src={require("./starfish.jpeg")} style={{ width: "100px" }} />
            <img src={require("./jellyfish.jpeg")} style={{ width: "100px" }} />
        </div>
    );
};
export default Pic;
