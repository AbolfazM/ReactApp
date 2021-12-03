// tailwind.config.js
module.exports = {
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'xl': { 'max': '1279px' },
            'lg': { 'max': '1023px' },
            'md': { 'max': '767px' },
            'tablet': { 'max': '600px' },
            'mobile': { 'max': '440px' }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}