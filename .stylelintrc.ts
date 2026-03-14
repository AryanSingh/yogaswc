import type { Config } from "stylelint";

const config: Config = {
  extends: [
    // "stylelint-config-standard", // Base rules for CSS
    // "stylelint-config-recommended-scss", // SCSS syntax support
    // "stylelint-config-prettier", // Disable formatting rules that conflict with Prettier
    // "stylelint-config-css-modules", // For CSS Modules (optional)
  ],
  plugins: [
    "stylelint-order", // Enforce property order
    "stylelint-declaration-block-no-ignored-properties",
  ],
  rules: {
    // 🧱 Basic rules
    indentation: 2,
    "string-quotes": "double",
    "no-empty-source": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "selector-pseudo-element-colon-notation": "double",
    "declaration-block-trailing-semicolon": "always",
    "max-nesting-depth": 3,

    // 🚫 Avoid vendor prefixes — let Autoprefixer handle them
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,

    // ✨ Order and grouping
    "order/properties-order": [
      [
        // Positioning
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",

        // Box Model
        "display",
        "flex",
        "flex-direction",
        "justify-content",
        "align-items",
        "float",
        "clear",
        "overflow",
        "box-sizing",
        "width",
        "height",
        "margin",
        "padding",
        "border",
        "border-radius",

        // Typography
        "font",
        "font-size",
        "font-weight",
        "line-height",
        "color",
        "text-align",
        "text-transform",
        "text-decoration",

        // Background
        "background",
        "background-color",
        "background-image",
        "background-size",

        // Effects
        "opacity",
        "box-shadow",
        "transition",
        "transform",
      ],
      { unspecified: "bottomAlphabetical" },
    ],

    // 💬 Allow unknown custom properties (useful for CSS variables)
    "property-no-unknown": [true, { ignoreProperties: ["/^--/"] }],
  },
  ignoreFiles: ["**/node_modules/**", "**/dist/**", "**/build/**"],
};

export default config;
