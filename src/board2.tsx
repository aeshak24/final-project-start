import React from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";

const renderPiece = (x: number, y: number, [picX, picY]: [number, number]) => {
    if (x === picX && y === picY) {
        return (
            <Pic
                id={""}
                height={0}
                width={0}
                top={0}
                left={0}
                angle={0}
                free={false}
                reflected={false}
                path={""}
            />
        );
    }
};

const renderSquare = (i: number, picPosition: [number, number]) => {
    const x = i;
    const y = 0;

    return (
        <div key={i} style={{ width: "50%", height: "100%" }}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, picPosition)}
            </BoardSquare>
        </div>
    );
};

type BoardProps = {
    picPosition: [number, number];
};

const Board: React.FC<BoardProps> = (props) => {
    const { picPosition } = props;
    const squares = [];
    for (let i = 0; i < 2; i++) {
        squares.push(renderSquare(i, picPosition));
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <header className="App-header"> Ocean game </header>
            <div
                style={{
                    width: "150%",
                    height: "100%",
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                {squares}
                <header className="App-header">Ocean Game </header>
            </div>
        </DndProvider>
    );
};

export default Board;
