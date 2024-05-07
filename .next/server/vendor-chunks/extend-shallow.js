"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/extend-shallow";
exports.ids = ["vendor-chunks/extend-shallow"];
exports.modules = {

/***/ "(rsc)/./node_modules/extend-shallow/index.js":
/*!**********************************************!*\
  !*** ./node_modules/extend-shallow/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isObject = __webpack_require__(/*! is-extendable */ \"(rsc)/./node_modules/is-extendable/index.js\");\nmodule.exports = function extend(o /*, objects*/) {\n  if (!isObject(o)) {\n    o = {};\n  }\n  var len = arguments.length;\n  for (var i = 1; i < len; i++) {\n    var obj = arguments[i];\n    if (isObject(obj)) {\n      assign(o, obj);\n    }\n  }\n  return o;\n};\nfunction assign(a, b) {\n  for (var key in b) {\n    if (hasOwn(b, key)) {\n      a[key] = b[key];\n    }\n  }\n}\n\n/**\n * Returns true if the given `key` is an own property of `obj`.\n */\n\nfunction hasOwn(obj, key) {\n  return Object.prototype.hasOwnProperty.call(obj, key);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZXh0ZW5kLXNoYWxsb3cvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsSUFBSUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLGtFQUFlLENBQUM7QUFFdkNDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFNBQVNDLE1BQU1BLENBQUNDLENBQUMsZ0JBQWU7RUFDL0MsSUFBSSxDQUFDTCxRQUFRLENBQUNLLENBQUMsQ0FBQyxFQUFFO0lBQUVBLENBQUMsR0FBRyxDQUFDLENBQUM7RUFBRTtFQUU1QixJQUFJQyxHQUFHLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTTtFQUMxQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsR0FBRyxFQUFFRyxDQUFDLEVBQUUsRUFBRTtJQUM1QixJQUFJQyxHQUFHLEdBQUdILFNBQVMsQ0FBQ0UsQ0FBQyxDQUFDO0lBRXRCLElBQUlULFFBQVEsQ0FBQ1UsR0FBRyxDQUFDLEVBQUU7TUFDakJDLE1BQU0sQ0FBQ04sQ0FBQyxFQUFFSyxHQUFHLENBQUM7SUFDaEI7RUFDRjtFQUNBLE9BQU9MLENBQUM7QUFDVixDQUFDO0FBRUQsU0FBU00sTUFBTUEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7RUFDcEIsS0FBSyxJQUFJQyxHQUFHLElBQUlELENBQUMsRUFBRTtJQUNqQixJQUFJRSxNQUFNLENBQUNGLENBQUMsRUFBRUMsR0FBRyxDQUFDLEVBQUU7TUFDbEJGLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLEdBQUdELENBQUMsQ0FBQ0MsR0FBRyxDQUFDO0lBQ2pCO0VBQ0Y7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsTUFBTUEsQ0FBQ0wsR0FBRyxFQUFFSSxHQUFHLEVBQUU7RUFDeEIsT0FBT0UsTUFBTSxDQUFDQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDVCxHQUFHLEVBQUVJLEdBQUcsQ0FBQztBQUN2RCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2dfcGRpLy4vbm9kZV9tb2R1bGVzL2V4dGVuZC1zaGFsbG93L2luZGV4LmpzPzVjZGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdpcy1leHRlbmRhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kKG8vKiwgb2JqZWN0cyovKSB7XG4gIGlmICghaXNPYmplY3QobykpIHsgbyA9IHt9OyB9XG5cbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgIGFzc2lnbihvLCBvYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn07XG5cbmZ1bmN0aW9uIGFzc2lnbihhLCBiKSB7XG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGhhc093bihiLCBrZXkpKSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBga2V5YCBpcyBhbiBvd24gcHJvcGVydHkgb2YgYG9iamAuXG4gKi9cblxuZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuIl0sIm5hbWVzIjpbImlzT2JqZWN0IiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJleHRlbmQiLCJvIiwibGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiaSIsIm9iaiIsImFzc2lnbiIsImEiLCJiIiwia2V5IiwiaGFzT3duIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/extend-shallow/index.js\n");

/***/ })

};
;