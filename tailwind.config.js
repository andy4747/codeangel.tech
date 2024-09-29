const defaultTheme = require('tailwindcss/defaultTheme');

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
                    light: '#f8fafc',
                    dark: '#000000',
                },
                secondary: {
                    light: '#e2e8f0',
                    dark: '#0a0a0a',
                },
                text: {
                    light: '#334155',
                    dark: '#ffffff',
                },
                accent: {
                    light: '#3b82f6',
                    dark: '#60a5fa',
                },
                success: '#22c55e',
                warning: '#f97316',
                error: '#ef4444',
                button: {
                    github: {
                        light: '#3b82f6',  // Same as accent light
                        dark: '#60a5fa',   // Same as accent dark
                    },
                    demo: {
                        success: '#22c55e', // Same as success color
                        hover: '#16a34a',   // Darker green for hover effect
                    },
                },
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
    ],
    darkMode: 'class',
};

