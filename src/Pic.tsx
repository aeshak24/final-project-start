import React, { Fragment } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constants";

const Pic: React.FC = () => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PIC },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });

    return (
        <Fragment>
            <div
                ref={drag}
                style={{
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 50,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center"
                }}
            >
                {/*♘*/}
                <img src={require("./fish.jpg")} width="60" height="60" />
                <img src={require("./puffer.jpg")} width="60" height="60" />
                <img src={require("./turtle.jpg")} width="60" height="60" />
                <img src={require("./dolphin.jpg")} width="60" height="60" />
            </div>
        </Fragment>
    );
};

export default Pic;
