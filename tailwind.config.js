const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './layouts/**/*.html',
        './content/**/*.md',
        './content/**/*.html',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#f0f4f8', // Light blue-gray for light mode background
                    dark: '#1a202c', // Dark blue-gray for dark mode background
                },
                secondary: {
                    light: '#e2e8f0', // Lighter blue-gray for secondary background in light mode
                    dark: '#2d3748', // Darker blue-gray for secondary background in dark mode
                },
                text: {
                    light: '#2d3748', // Dark blue-gray for text in light mode
                    dark: '#e2e8f0', // Light blue-gray for text in dark mode
                },
                accent: {
                    light: '#4299e1', // Blue for accents in light mode
                    dark: '#63b3ed', // Lighter blue for accents in dark mode
                },
                success: '#48bb78', // Green for success messages
                warning: '#ed8936', // Orange for warnings
                error: '#ef4444', // Red for errors
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
                serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
                mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.text.light'),
                        a: {
                            color: theme('colors.accent.light'),
                            '&:hover': {
                                color: theme('colors.accent.light'),
                            },
                        },
                        'h1, h2, h3, h4': {
                            color: theme('colors.text.light'),
                            fontWeight: '700',
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.text.dark'),
                        a: {
                            color: theme('colors.accent.dark'),
                            '&:hover': {
                                color: theme('colors.accent.dark'),
                            },
                        },
                        'h1, h2, h3, h4': {
                            color: theme('colors.text.dark'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
    darkMode: 'selector', // Enable dark mode with class strategy
}
