"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./App.css");

var _Badge = _interopRequireDefault(require("./components/Badge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const element = document.createElement('button');
// element.innerText = 'Click Me';
// const app = document.getElementById('root');
// app.appendChild(element);
// const element = React.createElement('button', {
//   type: 'submit',
//   className: 'btn',
//   onClick: setAwait,
// }, `Fifaifou ${setAwait.timer > 0 ? `huele feo`: `no se nada`}`);
var container = document.getElementById('root');

_reactDom["default"].render(_Badge["default"], container);