/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        '.src/**/ *.{js,jsx}',
    ],
    prfix:"",
    theme: {
        container:{
            center :true,
            padding :"15px",
        },
        screens :{
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',

        },
        fontFamily:{
            primary:"var(--font-jetbrainsMono)",
        },
        extend:{

            colors:{
                primary:"#09090b",
                accent:{
                    DEFAULT: "#00ff99",
                    hover: "#00e187",
                },
            },




            keyframes:{
                "accordion-down":{
                    from:{height:"0"},
                    to: {height:"var(--radix-accordion-content-height)"},
                },
                "accordion-up":{
                    from: {height:"var(--radix-accordion-content-height)"},
                    to:{height:"0"},
                },

            },
            animation:{

            }
            }
        }

        
        }
    
