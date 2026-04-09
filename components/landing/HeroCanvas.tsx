'use client';

import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const size = 48;
            const cols = Math.ceil(canvas.width / size) + 1;
            const rows = Math.ceil(canvas.height / size) + 1;

            ctx.strokeStyle = 'oklch(60% 0.18 255 / 0.07)';
            ctx.lineWidth = 1;

            for (let i = 0; i < cols; i += 1) {
                ctx.beginPath();
                ctx.moveTo(i * size, 0);
                ctx.lineTo(i * size, canvas.height);
                ctx.stroke();
            }

            for (let j = 0; j < rows; j += 1) {
                ctx.beginPath();
                ctx.moveTo(0, j * size);
                ctx.lineTo(canvas.width, j * size);
                ctx.stroke();
            }

            ctx.fillStyle = 'oklch(60% 0.18 255 / 0.15)';
            for (let i = 0; i < cols; i += 1) {
                for (let j = 0; j < rows; j += 1) {
                    ctx.beginPath();
                    ctx.arc(i * size, j * size, 1.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        };

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            draw();
        };

        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden
        />
    );
}
