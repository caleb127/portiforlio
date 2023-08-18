module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      screens:{
        sm:'480px',
        md:'780px',
        lg: '976px',
        xl: '1440px'
      },
    extend: {
      colors: {
        "cold-grey-black": "#000",
        "cold-grey-white": "#fff",
        gray: { "100": "rgba(0, 0, 0, 0)", "200": "rgba(0, 0, 0, 0.2)" },
        gainsboro: "#d9d9d9",
        orangered: "#ff4721",
        lavenderblush: "#f8efef",
      },
      fontFamily: { roboto: "Roboto", outfit: "Outfit" },
      borderRadius: { small: "20px", base: "100px" },
    },
    fontSize: {
      base: "14px",
      lg: "16px",
      xl: "18px",
      "2xl": "48px",
      "3xl": "60px",
      "4xl": "96px",
      "20xl":"120px"
    },
    
  },
  corePlugins: { preflight: false },
};