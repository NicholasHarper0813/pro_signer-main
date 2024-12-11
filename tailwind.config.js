import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "secondary-dark": "#d21c5c",
        border: "hsl(var(--border) , <alpha-value>)",
        input: "hsl(var(--input) , <alpha-value>)",
        ring: "hsl(var(--ring) , <alpha-value>)",
        background: "hsl(var(--background) , <alpha-value>)",
        foreground: "hsl(var(--foreground) , <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) , <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) , <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) , <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) , <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) , <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) , <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) , <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) , <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) , <alpha-value>)",
          foreground: "hsl(var(--card-foreground) , <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["'Mulish Variable'", ...fontFamily.sans],
        geo: ["Geomanist", ...fontFamily.sans],
      },
      boxShadow: {
        1: "rgb(230, 230, 230) 0px 0px 30px 0px",
        2: "0 1px 1px 0 rgba(0,0,0,.02),0 1px 2px 0 rgba(0,0,0,.03),0 3px 5px 0 rgba(0,0,0,.04),0 5px 10px 0 rgba(0,0,0,.06)",
      },
    },

    screens: {
      mv: "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      ml: "992px",
      lg: "1024px",
      sl: "1199px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1921px",

      wrap: "1410px",
    },
  },
}

export default config
