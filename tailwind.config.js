module.exports = {
    content: ["./public/**/*.{html,js,css}", "./src/**/*.{html,js,css}"],
    theme: {
        extend: {
            fontFamily: {
                oswald: ["Oswald", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            backgroundImage: {
                "gradient-24": "linear-gradient(24deg, var(--tw-gradient-stops))",
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
