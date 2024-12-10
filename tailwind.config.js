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
                'Roobert': ["Roobert","sans-serif"],
                'exwaye': ["exwaye","sans-serif"],
                'coaster': ["coaster","sans-serif"],
            },
        },
    },
    plugins: [
        aspect,
    ],
}
