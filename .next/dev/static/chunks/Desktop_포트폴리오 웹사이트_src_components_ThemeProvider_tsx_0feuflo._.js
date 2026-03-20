(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/포트폴리오 웹사이트/src/components/ThemeProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: "light",
    toggleTheme: ()=>{}
});
function useTheme() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
}
_s(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function ThemeProvider({ children }) {
    _s1();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            setMounted(true);
            const stored = localStorage.getItem("theme");
            if (stored) {
                setTheme(stored);
                document.documentElement.classList.toggle("dark", stored === "dark");
            } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark");
                document.documentElement.classList.add("dark");
            }
        }
    }["ThemeProvider.useEffect"], []);
    const toggleTheme = ()=>{
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/ThemeProvider.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s1(ThemeProvider, "yJRom449FMCLHbV8U85fR4UAvks=");
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%20%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8_src_components_ThemeProvider_tsx_0feuflo._.js.map