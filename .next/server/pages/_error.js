"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 7262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _error_Error)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__(5874);
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);
;// CONCATENATED MODULE: external "react-icons-kit/entypo/ccw"
const ccw_namespaceObject = require("react-icons-kit/entypo/ccw");
;// CONCATENATED MODULE: external "react-icons-kit/entypo/home"
const home_namespaceObject = require("react-icons-kit/entypo/home");
// EXTERNAL MODULE: ./src/common/components/Box/index.js
var Box = __webpack_require__(9957);
// EXTERNAL MODULE: ./src/common/components/Text/index.js
var Text = __webpack_require__(6338);
// EXTERNAL MODULE: ./src/common/components/NextImage/index.js
var NextImage = __webpack_require__(8183);
// EXTERNAL MODULE: ./src/common/components/Button/index.js + 5 modules
var Button = __webpack_require__(6040);
// EXTERNAL MODULE: ./src/common/components/Heading/index.js
var Heading = __webpack_require__(1710);
;// CONCATENATED MODULE: ./src/common/assets/image/404.svg
/* harmony default export */ const _404 = ({"src":"/_next/static/image/src/common/assets/image/404.c602abe17291905e3c1bc5c7442fc859.svg","height":196,"width":263});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/containers/Error/error.style.js

const ErrorWrapper = external_styled_components_default().div.withConfig({
  displayName: "errorstyle__ErrorWrapper",
  componentId: "sc-1fw269s-0"
})(["padding:80px 15px;height:100vh;display:flex;align-items:center;"]);
/* harmony default export */ const error_style = (ErrorWrapper);
const ErrorContent = external_styled_components_default().div.withConfig({
  displayName: "errorstyle__ErrorContent",
  componentId: "sc-1fw269s-1"
})(["width:450px;max-width:100%;margin:0 auto;.image-wrapper{@media (max-width:1480px){max-width:80%;margin-left:auto;margin-right:auto;}}"]);
const ButtonWrapper = external_styled_components_default().div.withConfig({
  displayName: "errorstyle__ButtonWrapper",
  componentId: "sc-1fw269s-2"
})(["font-family:'roboto';text-align:center;> *{margin:0 8px;}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/containers/Error/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const ErrorSec = ({
  imageWrapper,
  title,
  text,
  reloadButton,
  homeButton
}) => {
  const pageReload = () => {
    window.location.reload();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(error_style, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ErrorContent, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, _objectSpread(_objectSpread({}, imageWrapper), {}, {
        className: "image-wrapper",
        children: /*#__PURE__*/jsx_runtime_.jsx(NextImage/* default */.Z, {
          src: _404,
          alt: "404"
        })
      })), /*#__PURE__*/jsx_runtime_.jsx(Heading/* default */.Z, _objectSpread(_objectSpread({}, title), {}, {
        content: "Page not found!"
      })), /*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, _objectSpread(_objectSpread({}, text), {}, {
        content: "Looks like the page you're trying to visit doesn't exist. Please check the URL and try your luck again."
      })), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, _objectSpread(_objectSpread({}, reloadButton), {}, {
          title: "Reload Page",
          icon: /*#__PURE__*/jsx_runtime_.jsx((external_react_icons_kit_default()), {
            icon: ccw_namespaceObject.ccw,
            size: 24
          }),
          className: "domain_search_button",
          onClick: pageReload
        })), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, _objectSpread(_objectSpread({}, homeButton), {}, {
              title: "Go Home",
              icon: /*#__PURE__*/jsx_runtime_.jsx((external_react_icons_kit_default()), {
                icon: home_namespaceObject.home,
                size: 24
              }),
              className: "domain_search_button"
            }))
          })
        })]
      })]
    })
  });
};

ErrorSec.defaultProps = {
  imageWrapper: {
    mb: ['40px', '55px']
  },
  title: {
    fontSize: ['26px', '32px', '38px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '35px'],
    lineHeight: '1.31',
    textAlign: 'center',
    fontFamily: 'poppins',
    fontWeight: '600'
  },
  text: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48',
    lineHeight: '2',
    mb: ['30px', '40px', '50px', '60px'],
    textAlign: 'center',
    fontFamily: 'lato'
  },
  reloadButton: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    pl: ['15px', '22px'],
    pr: ['15px', '22px'],
    iconPosition: 'left',
    bg: '#eaa03b',
    fontFamily: 'lato'
  },
  homeButton: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    pl: ['15px', '22px'],
    pr: ['15px', '22px'],
    iconPosition: 'left',
    bg: '#e2e7f0',
    fontFamily: 'lato'
  }
};
/* harmony default export */ const Error = (ErrorSec);
// EXTERNAL MODULE: ./src/common/assets/css/style.js
var style = __webpack_require__(5577);
;// CONCATENATED MODULE: ./src/pages/_error.js






function _error_Error({
  statusCode
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "404: Not found"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,500,600,700|Roboto:400,500,700&display=swap",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(style/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: statusCode ? `An error ${statusCode} occurred on server` : /*#__PURE__*/jsx_runtime_.jsx(Error, {})
    })]
  });
}

_error_Error.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

/***/ }),

/***/ 4417:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5874:
/***/ ((module) => {

module.exports = require("react-icons-kit");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 3699:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,647], () => (__webpack_exec__(7262)));
module.exports = __webpack_exports__;

})();