/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            maxWidth: { '5pc': '5vw', '10pc': '10vw', '15pc': '15vw', '20pc': '20vw', '25pc': '25vw', '30pc': '30vw', '35pc': '35vw', '40pc': '40vw', '45pc': '45vw', '50pc': '50vw', '55pc': '55vw', '60pc': '60vw', '65pc': '65vw', '70pc': '70vw', '75pc': '75vw', '80pc': '80vw', '85pc': '85vw', '90pc': '90vw', '95pc': '95vw', '100pc': '100vw', },
            maxHeight: { '5pc': '5vh', '10pc': '10vh', '15pc': '15vh', '20pc': '20vh', '25pc': '25vh', '30pc': '30vh', '35pc': '35vh', '40pc': '40vh', '45pc': '45vh', '50pc': '50vh', '55pc': '55vh', '60pc': '60vh', '65pc': '65vh', '70pc': '70vh', '75pc': '75vh', '80pc': '80vh', '85pc': '85vh', '90pc': '90vh', '95pc': '95vh', '100pc': '100vh', }
        },
    },
    darkMode: "class",
    plugins: [nextui({
        "themes": {
            "dark": {
                "colors": {
                    "default": {
                        "50": "#2c292c",
                        "100": "#4a454a",
                        "200": "#686268",
                        "300": "#867e86",
                        "400": "#a19ba1",
                        "500": "#bcb8bc",
                        "600": "#d8d5d8",
                        "700": "#f3f2f3",
                        "foreground": "#fff",
                        "DEFAULT": "#686268"
                    },
                    "primary": {
                        "50": "#47331f",
                        "100": "#785634",
                        "200": "#aa7949",
                        "300": "#db9c5e",
                        "400": "#e3b282",
                        "500": "#ebc9a6",
                        "600": "#f3dfcb",
                        "700": "#fbf5ef",
                        "foreground": "#000",
                        "DEFAULT": "#aa7949"
                    }
                }
            }
        }
    }
    )]
}