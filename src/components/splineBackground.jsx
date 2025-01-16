import React, { useEffect, useRef } from 'react';
import { Spline } from '@splinetool/runtime'; // Use named import

const SplineBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas) {
            const spline = new Spline();
            spline.load('https://prod.spline.design/mjHizgbJh2C4Lpju/scene.splinecode');
            spline.setCanvas(canvas);
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        ></canvas>
    );
};

export default SplineBackground;
