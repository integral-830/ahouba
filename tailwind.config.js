/** @type {import('tailwindcss').Config} */
import aspect from "@tailwindcss/aspect-ratio";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'zentry': ["zentry", "sans-serif"],
                'Roobert': ["Roobert", "sans-serif"],
                'exwaye': ["exwaye", "sans-serif"],
                'coaster': ["coaster", "sans-serif"],
            },
        },
        gradientColorStopPositions: {
            2: '2%',
            98: '98%',
        },
        animation: {
            gradient: 'gradient 8s linear infinite',
            border: 'border 4s linear infinite',
        },
        keyframes: {
            gradient: {
                '0%': {backgroundPosition: '0% 50%'},
                '50%': {backgroundPosition: '100% 50%'},
                '100%': {backgroundPosition: '0% 50%'},
            },
            border: {
                to: {'--border-angle': '360deg'},
            }
        },

    },
    plugins: [
        aspect,
    ],
}
