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
                color2: "#FEC544"
            }
        }
    },
    plugins: []
};

