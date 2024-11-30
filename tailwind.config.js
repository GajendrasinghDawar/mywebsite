/** @type {import('tailwindcss').Config} */

const gray = {
  gray1: "#f9f9f9",
  gray2: "#f5f5f5",
  gray3: "#ececec",
  gray4: "#e4e4e4",
  gray5: "#dddddd",
  gray6: "#d5d5d5",
  gray7: "#cacaca",
  gray8: "#b7b7b7",
  gray9: "#888",
  gray10: "#7e7e7e",
  gray11: "#606060",
  gray12: "#1f1f1f",

  grayA1: "#00000003",
  grayA2: "#00000007",
  grayA3: "#00000010",
  grayA4: "#00000018",
  grayA5: "#0000001f",
  grayA6: "#00000027",
  grayA7: "#00000033",
  grayA8: "#00000046",
  grayA9: "#00000075",
  grayA10: "#00000080",
  grayA11: "#0000009e",
  grayA12: "#000000e0",

  grayContrast: "#FFFFFF",
  graySurface: "#ffffffcc",
  grayIndicator: "#888",
  grayTrack: "#888",
}

const yellow = {
  yellow1: "#fbfaf8",
  yellow2: "#fef6e7",
  yellow3: "#ffefbf",
  yellow4: "#ffe59c",
  yellow5: "#ffda7b",
  yellow6: "#f8cd76",
  yellow7: "#e5bd69",
  yellow8: "#d3a53f",
  yellow9: "#ffc526",
  yellow10: "#f5bc30",
  yellow11: "#976b00",
  yellow12: "#463a20",

  yellowA1: "#c9963005",
  yellowA2: "#fff3ddaa",
  yellowA3: "#ffefbf",
  yellowA4: "#ffe59c",
  yellowA5: "#ffda7b",
  yellowA6: "#f4a40088",
  yellowA7: "#d5900095",
  yellowA8: "#c68901c0",
  yellowA9: "#ffc526",
  yellowA10: "#f4ae01cf",
  yellowA11: "#976b00",
  yellowA12: "#2c1e00df",

  yellowContrast: "#2b2009",
  yellowSurface: "#fff5e2cc",
  yellowIndicator: "#ffc526",
  yellowTrack: "#ffc526",
}

const green = {
  green1: "#fafefb",
  green2: "#f4fbf5",
  green3: "#e6f8e8",
  green4: "#d5f2d9",
  green5: "#c2ebc8",
  green6: "#a9e1b2",
  green7: "#87d295",
  green8: "#4fbe6b",
  green9: "#16a34a",
  green10: "#00963d",
  green11: "#008232",
  green12: "#193d22",

  greenA1: "#00cc3305",
  greenA2: "#00a3180b",
  greenA3: "#00b81519",
  greenA4: "#00b1192a",
  greenA5: "#00ac1a3d",
  greenA6: "#00a71b56",
  greenA7: "#00a01e78",
  greenA8: "#00a129b0",
  greenA9: "#009a39e9",
  greenA10: "#00963d",
  greenA11: "#008232",
  greenA12: "#00280ae6",

  greenContrast: "#fff",
  greenSurface: "#f1faf3cc",
  greenIndicator: "#16a34a",
  greenTrack: "#16a34a",
};

const purple = {
  purple1: "#fdfcff",
  purple2: "#fbf8ff",
  purple3: "#f5eeff",
  purple4: "#efe2ff",
  purple5: "#e7d5ff",
  purple6: "#dcc4fd",
  purple7: "#ceaef8",
  purple8: "#bc91f0",
  purple9: "#6b21a8",
  purple10: "#5b0296",
  purple11: "#813dc2",
  purple12: "#411b65",

  purpleA1: "#5500ff03",
  purpleA2: "#6e00ff07",
  purpleA3: "#6900ff11",
  purpleA4: "#7300ff1d",
  purpleA5: "#6e00ff2a",
  purpleA6: "#6801f73b",
  purpleA7: "#6500e951",
  purpleA8: "#6400dd6e",
  purpleA9: "#55009bde",
  purpleA10: "#5a0095fd",
  purpleA11: "#5a00afc2",
  purpleA12: "#2b0053e4",

  purpleContrast: "#fff",
  purpleSurface: "#faf6ffcc",
  purpleIndicator: "#6b21a8",
  purpleTrack: "#6b21a8",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...gray,
        ...yellow,
        ...green,
        ...purple,
      },
      screens: {
        xs: "480px",
      },
      fontFamily: {
        sans: [ 'var(--font-eb-garamond)' ],
      },

    },
  },
  plugins: [],
};



