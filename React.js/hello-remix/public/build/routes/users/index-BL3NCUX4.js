import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-EQWGYLZO.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// browser-route-module:routes\users\index.jsx?browser
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Users() {
  const users = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Users" }, void 0, false, {
      fileName: "browser-route-module:routes\\users\\index.jsx?browser",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/users/${user.id}`, children: user.username }, void 0, false, {
      fileName: "browser-route-module:routes\\users\\index.jsx?browser",
      lineNumber: 15,
      columnNumber: 13
    }, this) }, user.id, false, {
      fileName: "browser-route-module:routes\\users\\index.jsx?browser",
      lineNumber: 14,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "browser-route-module:routes\\users\\index.jsx?browser",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "browser-route-module:routes\\users\\index.jsx?browser",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  Users as default
};
//# sourceMappingURL=/build/routes/users/index-BL3NCUX4.js.map
