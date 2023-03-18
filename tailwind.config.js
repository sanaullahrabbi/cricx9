module.exports = {
    content: ["./public/**/*.{html,js,css}", "./src/**/*.{html,js,css}"],
    theme: {
        extend: {
            fontFamily: {
                oswald: ["Oswald", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            backgroundImage: {
                "success-banner": "url('../assets/images/success/43-success-bg.png')",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/line-clamp"),
        require("tailwindcss"),
        require("autoprefixer"),
    ],
};
