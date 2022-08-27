/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// const anime = require('animejs');\n\n// const path = document.getElementById('Vector 2').getAttribute('d');\n// const experimentalPath = anime.path(path);\n\n// COLORS\nconst neonGreen = \"#00F4AD\";\nconst transparent = \"transparent\";\n\n// Progress Bar Elements (SVG Rectangles)\nconst progressBarDashes = [...document.getElementById('progressBarGroup').children];\n\nwindow.addEventListener('scroll', () => {\n    const h = document.documentElement, \n    b = document.body,\n    st = 'scrollTop',\n    sh = 'scrollHeight';\n\n    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;\n\n    colorProgressBar(percent);\n});\n\nconst colorProgressBar = percentage => {\n    const numberOfDashes = progressBarDashes.length;\n    const maximumPercent = 100;\n    const iterations = Math.round(percentage * numberOfDashes / maximumPercent);\n\n    for (let i = 0; i < iterations; i++) {\n        progressBarDashes[i].style.fill = neonGreen;\n    }\n    for (let i = iterations; i < numberOfDashes; i++) {\n        progressBarDashes[i].style.fill = transparent;\n    }\n};\n\n\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;