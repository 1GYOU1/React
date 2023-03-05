import {
  Form,
  Link,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-EQWGYLZO.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// browser-route-module:routes\stories\index.jsx?browser
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Stories() {
  const stories = useLoaderData();
  const transition = useTransition();
  const ref = (0, import_react2.useRef)();
  (0, import_react2.useEffect)(() => {
    if (transition.state === "submitting") {
      ref.current?.reset();
    }
  }, [transition.state]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Stories" }, void 0, false, {
      fileName: "browser-route-module:routes\\stories\\index.jsx?browser",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: stories.map((story) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/stories/${story.id}`, children: story.title }, void 0, false, {
      fileName: "browser-route-module:routes\\stories\\index.jsx?browser",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, story.id, false, {
      fileName: "browser-route-module:routes\\stories\\index.jsx?browser",
      lineNumber: 23,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "browser-route-module:routes\\stories\\index.jsx?browser",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", ref, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 4,
          width: 320
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694..." }, void 0, false, {
            fileName: "browser-route-module:routes\\stories\\index.jsx?browser",
            lineNumber: 37,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "body", placeholder: "\uC774\uC57C\uAE30\uB97C \uC785\uB825\uD558\uC138\uC694..." }, void 0, false, {
            fileName: "browser-route-module:routes\\stories\\index.jsx?browser",
            lineNumber: 38,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: transition.state === "submitting" ? "\uB4F1\uB85D \uC911..." : "\uB4F1\uB85D" }, void 0, false, {
            fileName: "browser-route-module:routes\\stories\\index.jsx?browser",
            lineNumber: 39,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "browser-route-module:routes\\stories\\index.jsx?browser",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "browser-route-module:routes\\stories\\index.jsx?browser",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "browser-route-module:routes\\stories\\index.jsx?browser",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  Stories as default
};
//# sourceMappingURL=/build/routes/stories/index-TAX6R2AT.js.map
