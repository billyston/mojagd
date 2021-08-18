module.exports =
{
    purge:
    {
        mode: 'layers',
        content: ['./public/**/*.html', './src/**/*.vue'],
    },

    darkMode: false, // or 'media' or 'class'

    theme:
    {
        fontSize:
        {
            'xxxs': '.54rem',
            'xxs': '.70rem',
            'xs': '.75rem',
            'ct': '.775rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },

        fontFamily:
        {
            mojagd: [ 'Montserrat' ],
        },

        backgroundColor: theme => (
        {
            ...theme('colors'),
            'mojagd-primary': '#062135',
            'mojagd-secondary': '#0a314d',
            'mojagd-third': '#2d8bc3',
            'mojagd-extra': '#d3a756',
        }),

        backgroundImage: theme => (
        {
            'slider-bg': "url('/img/sliders/slider1.jpg')",
            'parallax-1': "url('/img/backgrounds/wavy-bg.png')",
            'parallax-2': "url('/img/sliders/slider1.jpg')",
        }),

        textColor: theme => (
        {
            ...theme('colors'),
            'mojagd-primary': '#062135',
            'mojagd-secondary': '#0a314d',
            'mojagd-third': '#2d8bc3',
            'mojagd-extra': '#d3a756',
        }),

        borderColor: theme => (
        {
            DEFAULT: theme('colors.gray.200', 'currentColor'),
            ...theme('colors'),
            'mojagd-primary': '#062135',
            'mojagd-secondary': '#0a314d',
            'mojagd-third': '#2d8bc3',
            'mojagd-extra': '#d3a756',

        }),

        screens:
        {
            'xs': {'min': '225px', 'max': '639px'},
            'sm': {'min': '640px', 'max': '767px'},
            'md': {'min': '768px', 'max': '1023px'},
            'lg': {'min': '1024px', 'max': '1279px'},
            'xl': {'min': '1280px', 'max': '1535px'},
            '2xl': {'min': '1536px'},
        },

        extend:
        {
            animation:
            {
                blob: "blob 7s infinite",
            },

            keyframes:
            {
                blob:
                {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                }
            }
        },
    },

    variants:
    {
        extend: {},
    },

    plugins: [],
}
