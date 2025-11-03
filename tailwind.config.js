/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Base shimmer for gradient bars (the glowing energy line)
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        // Ground heat shimmer / wave distortion
        heat: {
          "0%, 100%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(1.1)" },
        },
        // Metallic text shimmer for "WIRELINE 101"
        titleShimmer: {
          "0%": { backgroundPosition: "200% 50%" },
          "100%": { backgroundPosition: "-200% 50%" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        heat: "heat 5s ease-in-out infinite",
        titleShimmer: "titleShimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

