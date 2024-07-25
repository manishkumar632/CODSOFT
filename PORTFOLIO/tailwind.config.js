/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ["Ubuntu", "sans-serif"]
            },
            colors: {
                color1: "#070D1B",
                color2: "#FEC544",
                color3: "#CECEED"
            },
            screens: {
                min4: { 'min': '400px' },
                max4: { 'max': '400px' },
                min14: { 'min': '1440px' },
                max14: { 'max': '1440px' },
                min7: {'min': '700px'},
                max7: {'max': '700px'},
            }
        }
    },
    plugins: []
};
