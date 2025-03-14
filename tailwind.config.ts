import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/custom-pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "secondary-background": "var(--secondary-background)",
        foreground: "var(--foreground)",

        heading: "var(--heading)",
        paragraph: "var(--paragraph)",

        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },

        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          hover: "var(--primary-hover)",
        },

        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          hover: "var(--secondary-hover)",
        },

        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },

        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },

        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },

      backgroundImage: {
        "home-hero": "url('/images/home-hero-img.png')",
        "services-trademark-registration-hero":
          "url('/images/services-trademark-registration-hero-img.jpg')",
        "services-patent-registration-hero":
          "url('/images/services-patent-registration-hero-img.webp')",
        "services-amazon-brand-registration-hero":
          "url('/images/services-amazon-brand-registration-hero-img.jpg')",
        "services-copyright-registration-hero":
          "url('/images/services-copyright-registration-hero-img.jpg')",
      },

      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1536px",
      },

      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },

        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".layout-standard": {
          maxWidth: "1536px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        },

        ".page-layout-standard": {
          maxWidth: "1536px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",

          "@screen lg": {
            gap: "2rem",
          },
        },

        ".animation-standard": {
          transition: "all 0.5s ease-in-out",
        },

        ".section-padding-standard": {
          paddingTop: "2rem",
          paddingBottom: "2rem",

          "@screen lg": {
            paddingTop: "3rem",
            paddingBottom: "3rem",
          },
        },

        ".section-margin-standard": {
          marginTop: "3rem",
          marginBottom: "3rem",

          "@screen lg": {
            marginTop: "4rem",
            marginBottom: "4rem",
          },
        },

        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      });
    },

    tailwindcssAnimate,
  ],
} satisfies Config;
