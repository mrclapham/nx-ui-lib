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



// const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
// const { join } = require('path');

// // const baseConfig = require('@org/vanilla-ui/tailwind.config');

// /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     join(
// //       __dirname,
// //       '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
// //     ),
// //     ...createGlobPatternsForDependencies(__dirname),
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // };
// // module.exports = {...baseConfig}

// import  baseConfig from '@org/vanilla-ui';


// // const baseConfig = require('@org/vanilla-ui/tailwind.config');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // Spread the base config
//   ...baseConfig,
//   // Override or add to the content array
//   content: [
//     ...baseConfig.content,
//     join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
//     ...createGlobPatternsForDependencies(__dirname)
//   ],
//   // You can add or override theme settings here
//   theme: {
//     ...baseConfig.theme,
//     extend: {
//       ...baseConfig.theme.extend,
//       // Add any app-specific theme extensions here
//     },
//   },
//   // You can add app-specific plugins here
//   plugins: [
//     ...baseConfig.plugins,
//     // Add any app-specific plugins here
//   ],
// };
