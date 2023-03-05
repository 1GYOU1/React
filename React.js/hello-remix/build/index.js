var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 39,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 82,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/stories/index.jsx
var stories_exports = {};
__export(stories_exports, {
  action: () => action,
  default: () => Stories,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_react4 = require("react");

// app/lib/api.jsx
var import_axios = __toESM(require("axios"));
async function getStories() {
  return (await import_axios.default.get("http://localhost:4000/stories")).data;
}
async function getStory(id) {
  return (await import_axios.default.get(`http://localhost:4000/stories/${id}`)).data;
}
async function createStory({ title, body }) {
  return (await import_axios.default.post("http://localhost:4000/stories", {
    title,
    body
  })).data;
}
async function getUsers() {
  return (await import_axios.default.get(
    "https://jsonplaceholder.typicode.com/users"
  )).data;
}
async function getUser(id) {
  return (await import_axios.default.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )).data;
}

// app/routes/stories/index.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader = async () => {
  let stories = await getStories();
  return (0, import_node2.json)(stories);
};
async function action({ request }) {
  let formData = await request.formData(), title = formData.get("title"), body = formData.get("body"), story = await createStory({ title, body });
  return (0, import_node2.redirect)(`/stories/${story.id}`);
}
function Stories() {
  let stories = (0, import_react3.useLoaderData)(), transition = (0, import_react3.useTransition)(), ref = (0, import_react4.useRef)();
  return (0, import_react4.useEffect)(() => {
    var _a;
    transition.state === "submitting" && ((_a = ref.current) == null || _a.reset());
  }, [transition.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Stories" }, void 0, !1, {
      fileName: "app/routes/stories/index.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: stories.map((story) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: `/stories/${story.id}`, children: story.title }, void 0, !1, {
      fileName: "app/routes/stories/index.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this) }, story.id, !1, {
      fileName: "app/routes/stories/index.jsx",
      lineNumber: 37,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/stories/index.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Form, { method: "post", ref, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 4,
          width: 320
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text", name: "title", placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694..." }, void 0, !1, {
            fileName: "app/routes/stories/index.jsx",
            lineNumber: 51,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("textarea", { name: "body", placeholder: "\uC774\uC57C\uAE30\uB97C \uC785\uB825\uD558\uC138\uC694..." }, void 0, !1, {
            fileName: "app/routes/stories/index.jsx",
            lineNumber: 52,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", children: transition.state === "submitting" ? "\uB4F1\uB85D \uC911..." : "\uB4F1\uB85D" }, void 0, !1, {
            fileName: "app/routes/stories/index.jsx",
            lineNumber: 53,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/stories/index.jsx",
        lineNumber: 43,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/stories/index.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/stories/index.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/stories/$id.jsx
var id_exports = {};
__export(id_exports, {
  default: () => Story,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => {
  let { id } = params, data = await getStory(id);
  return (0, import_node3.json)(data);
};
function Story() {
  let story = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: story.title }, void 0, !1, {
      fileName: "app/routes/stories/$id.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: story.body }, void 0, !1, {
      fileName: "app/routes/stories/$id.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/stories/$id.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/users/index.jsx
var users_exports = {};
__export(users_exports, {
  default: () => Users,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader3 = async () => {
  let data = await getUsers();
  return (0, import_node4.json)(data);
};
function Users() {
  let users = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Users" }, void 0, !1, {
      fileName: "app/routes/users/index.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { to: `/users/${user.id}`, children: user.username }, void 0, !1, {
      fileName: "app/routes/users/index.jsx",
      lineNumber: 20,
      columnNumber: 13
    }, this) }, user.id, !1, {
      fileName: "app/routes/users/index.jsx",
      lineNumber: 19,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/users/index.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/users/index.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/users/$id.jsx
var id_exports2 = {};
__export(id_exports2, {
  default: () => User,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader4 = async ({ params }) => {
  let { id } = params, user = await getUser(id);
  return (0, import_node5.json)(user);
};
function User() {
  let user = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: user.username }, void 0, !1, {
      fileName: "app/routes/users/$id.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("code", { style: { whiteSpace: "pre" }, children: JSON.stringify(user, null, 2) }, void 0, !1, {
      fileName: "app/routes/users/$id.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/users/$id.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/articles.jsx
var articles_exports = {};
__export(articles_exports, {
  default: () => Articles
});
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Articles() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
      fileName: "app/routes/articles.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/routes/articles.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/articles/1", children: "\uAC8C\uC2DC\uAE00 1" }, void 0, !1, {
        fileName: "app/routes/articles.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/articles.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/articles/2", children: "\uAC8C\uC2DC\uAE00 2" }, void 0, !1, {
        fileName: "app/routes/articles.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/articles.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/articles/3", children: "\uAC8C\uC2DC\uAE00 3" }, void 0, !1, {
        fileName: "app/routes/articles.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/articles.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/articles.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/articles.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/articles/$id.jsx
var id_exports3 = {};
__export(id_exports3, {
  default: () => Article
});
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Article() {
  let params = (0, import_react9.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    "\uAC8C\uC2DC\uAE00 ID: ",
    params.id
  ] }, void 0, !0, {
    fileName: "app/routes/articles/$id.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

// app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "hello remix~!" }, void 0, !1, {
    fileName: "app/routes/about.jsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: "Welcome to Remix" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Link, { to: "/about", children: "about" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 9,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "ab456502", entry: { module: "/build/entry.client-FXIG4IDH.js", imports: ["/build/_shared/chunk-EQWGYLZO.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZQYKQCQR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-S5SUNF4F.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/articles": { id: "routes/articles", parentId: "root", path: "articles", index: void 0, caseSensitive: void 0, module: "/build/routes/articles-REHAZRS2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/articles/$id": { id: "routes/articles/$id", parentId: "routes/articles", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/articles/$id-45AGBS66.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-GT53XLYD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/stories/$id": { id: "routes/stories/$id", parentId: "root", path: "stories/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/stories/$id-WSPYEEYZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/stories/index": { id: "routes/stories/index", parentId: "root", path: "stories", index: !0, caseSensitive: void 0, module: "/build/routes/stories/index-TAX6R2AT.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users/$id": { id: "routes/users/$id", parentId: "root", path: "users/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/users/$id-CUFUGFRF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users/index": { id: "routes/users/index", parentId: "root", path: "users", index: !0, caseSensitive: void 0, module: "/build/routes/users/index-BL3NCUX4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-AB456502.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/stories/index": {
    id: "routes/stories/index",
    parentId: "root",
    path: "stories",
    index: !0,
    caseSensitive: void 0,
    module: stories_exports
  },
  "routes/stories/$id": {
    id: "routes/stories/$id",
    parentId: "root",
    path: "stories/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/users/index": {
    id: "routes/users/index",
    parentId: "root",
    path: "users",
    index: !0,
    caseSensitive: void 0,
    module: users_exports
  },
  "routes/users/$id": {
    id: "routes/users/$id",
    parentId: "root",
    path: "users/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports2
  },
  "routes/articles": {
    id: "routes/articles",
    parentId: "root",
    path: "articles",
    index: void 0,
    caseSensitive: void 0,
    module: articles_exports
  },
  "routes/articles/$id": {
    id: "routes/articles/$id",
    parentId: "routes/articles",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports3
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
