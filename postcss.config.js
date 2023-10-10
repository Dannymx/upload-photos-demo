module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "tailwindcss/nesting": "postcss-nesting",
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
