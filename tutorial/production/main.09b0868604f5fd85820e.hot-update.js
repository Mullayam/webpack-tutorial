/*! For license information please see main.09b0868604f5fd85820e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatetutorial("main",{"./src/components/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _btn_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btn.css */ "./src/components/btn.css");\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\n\nvar Button = /*#__PURE__*/function () {\n  function Button() {\n    _classCallCheck(this, Button);\n  }\n  _createClass(Button, [{\n    key: "render",\n    value: function render() {\n      console.log("renderButton 2");\n      var button = document.createElement("button");\n      button.setAttribute("class", "btn btn-primary");\n      button.onclick = function () {\n        var p = document.createElement("p");\n        p.classList.add("text-primary");\n        p.innerHTML = "Walaaha habibi";\n        body.appendChild(p);\n      };\n      button.innerHTML = "Click on me";\n      var body = document.querySelector("body");\n      body.appendChild(button);\n    }\n  }]);\n  return Button;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://tutorial/./src/components/Button.js?')}},(function(t){t.h=()=>"3150109fe21e1862d5a6"}));