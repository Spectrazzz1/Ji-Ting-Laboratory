/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./views/**/*.pug"],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
    variants: {
        scrollbar: ['dark']
    }
}
