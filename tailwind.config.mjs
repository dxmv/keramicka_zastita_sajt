/** @type {import('tailwindcss').Config} */
module.exports = {
        darkMode: ["class"],
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
          "*.{js,ts,jsx,tsx,mdx}",
          "app/**/*.{ts,tsx}",
          "components/**/*.{ts,tsx}",
          "./src/styles/**/*.css",
        ],
        theme: {
          extend: {
            fontFamily: {
              sans: ["var(--font-sans)", "sans-serif"],
              serif: ["var(--font-serif)", "serif"],
              mono: ["var(--font-mono)", "monospace"],
            },
            colors: {
              border: "hsl(var(--border))",
              input: "hsl(var(--input))",
              ring: "hsl(var(--ring))",
              background: "hsl(var(--background))",
              foreground: "hsl(var(--foreground))",
              primary: {
                DEFAULT: "hsl(var(--primary))",
                foreground: "hsl(var(--primary-foreground))",
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
              yellow: { "300": "#FFE97C", "500": "#FFD43A", "600": "#F3C201" },
              navy: { "700": "#1E2A3B", "900": "#0D111B" },
              grey: { "200": "#E5E7EB", "400": "#9CA3AF" },
              surface: "#F7F8FA",
              error: "#E12D39",
              success: "#16A34A",
            },
            borderRadius: {
              lg: "var(--radius)",
              md: "calc(var(--radius) - 2px)",
              sm: "calc(var(--radius) - 4px)",
            },
          },
        },
        plugins: [require("tailwindcss-animate")],
      }
      