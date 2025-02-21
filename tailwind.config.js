/** @type {import('tailwindcss').Config} */
import aspect from "@tailwindcss/aspect-ratio";
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		fontFamily: {
    			zentry: [
    				'zentry',
    				'sans-serif'
    			],
    			Roobert: [
    				'Roobert',
    				'sans-serif'
    			],
    			exwaye: [
    				'exwaye',
    				'sans-serif'
    			],
    			coaster: [
    				'coaster',
    				'sans-serif'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {}
    	},
    	gradientColorStopPositions: {
    		'2': '2%',
    		'98': '98%'
    	}
    },
    plugins: [
        aspect,
        require("tailwindcss-animate")
    ],
}
