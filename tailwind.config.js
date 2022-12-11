/** @type {import('tailwindcss').Config} */

const generateColorClass = (variable) => {
    return ({ opacityValue }) =>
        opacityValue ? `rgba(var(--${variable}), ${opacityValue})` : `rgb(var(--${variable}))`;
};

const textColor = {
    primary: '#fff',
    secondary: '#ffe72c',
    tertiary: '#000',
};

const backgroundColor = {
    primary: '#0f0f0f',
    main: '#fff',
    secondary: generateColorClass('bg-primary'),
    secondary_light: '#2b3885',
    secondary_dark: '#192151',
};

module.exports = {
    mode: 'jit',
    content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            textColor,
            backgroundColor,
            colors: {
                border_primary: '#0f0f0f',
                call_to_acion: '#49ae92',
            },
            backgroundImage: {},
        },
    },
    plugins: [],
};
