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
                    dark: '#1a1a1a',
                },
                text: {
                    light: '#334155',
                    dark: '#ffffff',
                    gray: '#6b7280'
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
                        light: '#3b82f6',
                        dark: '#60a5fa',
                    },
                    demo: {
                        success: '#22c55e',
                        hover: '#16a34a',
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
                                color: theme('colors.accent.dark'),
                            },
                        },
                        'h1, h2, h3, h4': {
                            color: theme('colors.text.light'),
                            fontWeight: '700',
                        },
                        p: {
                            color: theme('colors.text.light'),
                        },
                        ol: {
                            color: theme('colors.text.light'),
                        },
                        ul: {
                            color: theme('colors.text.light'),
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.text.dark'),
                        a: {
                            color: theme('colors.accent.dark'),
                            '&:hover': {
                                color: theme('colors.accent.light'),
                            },
                        },
                        'h1, h2, h3, h4': {
                            color: theme('colors.text.dark'),
                        },
                        p: {
                            color: theme('colors.text.dark'),
                        },
                        ol: {
                            color: theme('colors.text.dark'),
                        },
                        ul: {
                            color: theme('colors.text.dark'),
                        },
                        strong: {
                            color: theme("colors.text.gray"),
                        }
                    },
                },
            }),

            boxShadow: {
                'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
    darkMode: 'class',
};
