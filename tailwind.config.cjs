/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Exo 2"', 'sans-serif']
      },
      colors: {
        border: { DEFAULT: "hsl(var(--border))", grey: 'hsl(200 3% 79%)' },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        exit: 'hsl(360 85% 63%)',
        green: 'hsl(173 39% 47%)',
        warning: 'hsl(0 67% 53%)',
        orange: 'hsl(16 88% 62%)',
        background: {
          DEFAULT: "hsl(var(--background))",
          navbar: 'hsl(208 40% 9%)',
          footer: 'hsl(207 33% 95%)'
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: 'hsl(var(--primary-dark))'
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        disabled: {
          DEFAULT: 'hsl(var(--disabled))',
        },
        grey: {
          DEFAULT: 'hsl(var(--grey))',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'flip-y': {
          to: { transform: 'rotateY(180deg)' }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "flip-y": "flip-y 0.2s ease-out"
      },
    },
    screens: {
      "sm": { max: "320px" },
      "md": { max: "738px" },
      "lg": { max: "1920px" },
      "2xl": "1400px",
    },
  },
  plugins: [require("tailwindcss-animate")],
}