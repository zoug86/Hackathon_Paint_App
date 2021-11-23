import React, { useEffect, useContext } from "react";
import { CanvasContext } from "./CanvasContext";

export function Canvas() {
    const {
        canvasRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        draw,
    } = useContext(CanvasContext);

    useEffect(() => {
        prepareCanvas();
    }, [prepareCanvas]);

    return (
        <canvas
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}
        />
    );
}