/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./*.html",
        ".content/**/*.html",
        "./js/**/*.js",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [],
};
