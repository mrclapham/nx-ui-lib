module.exports = {
  content: [
    "./libs/**/*.{js,ts,jsx,tsx}",
    "./apps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ActionPrimary: {
          default: "#e86c00",
          10: "#e86c001a",
          20: "#e86c0033",
          30: "#e86c004d",
          40: "#e86c0066",
          50: "#e86c0080",
          60: "#e86c0099",
          70: "#e86c00b3",
          80: "#e86c00cc",
          90: "#e86c00e6",
          100: "#e86c00"
        },
        Secondary: {
          default: "#fdcc4a",
          10: "#fdcc4a1a",
          20: "#fdcc4a33",
          30: "#fdcc4a4d",
          40: "#fdcc4a66",
          50: "#fdcc4a80",
          60: "#fdcc4a99",
          70: "#fdcc4ab3",
          80: "#fdcc4acc",
          90: "#fdcc4ae6",
          100: "#fdcc4a"
        },
      },
      fontFamily: {
        "source-sans-pro": "Source Sans Pro",
        "inter": "Inter"
      },
    },
  },
  plugins: [],
}
