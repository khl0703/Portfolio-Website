module.exports = [
"[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/src/components/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const links = [
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Projects",
        href: "#projects"
    },
    {
        label: "Experience",
        href: "#experience"
    },
    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Resume",
        href: "#resume"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
function Navigation() {
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].nav, {
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            duration: 0.5
        },
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--border)]" : "bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-lg font-semibold tracking-tight hover:text-[var(--accent)] transition-colors",
                        children: "KL"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: "text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors",
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                "aria-label": "Toggle theme",
                                className: "w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] hover:border-[var(--accent)] transition-colors",
                                children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 md:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                "aria-label": "Toggle theme",
                                className: "w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)]",
                                children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                            lineNumber: 103,
                                            columnNumber: 193
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                            lineNumber: 103,
                                            columnNumber: 224
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                        lineNumber: 105,
                                        columnNumber: 193
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileOpen(!mobileOpen),
                                "aria-label": "Toggle menu",
                                className: "w-9 h-9 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18 6L6 18M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 12h18M3 6h18M3 18h18"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "md:hidden bg-[var(--background)] border-b border-[var(--border)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 flex flex-col gap-4",
                        children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: ()=>setMobileOpen(false),
                                className: "text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                                lineNumber: 145,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                        lineNumber: 143,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen flex items-center justify-center px-6 pt-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm tracking-widest uppercase text-[var(--accent)] mb-4 font-medium",
                            children: "Portfolio"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6",
                            children: "Kihun Lee"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-2xl mx-auto mb-4",
                            children: "Management student building at the intersection of business, finance, creativity, and digital systems."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-[var(--muted)] leading-relaxed max-w-xl mx-auto mb-10",
                            children: "I'm passionate about structured problem solving, financial analysis, and creating thoughtful systems — whether it's a financial model, a brand identity, or a personal productivity framework."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.2
                    },
                    className: "flex flex-wrap items-center justify-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#projects",
                            className: "px-6 py-3 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity",
                            children: "View Projects"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#resume",
                            className: "px-6 py-3 border border-[var(--border)] rounded-lg text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors",
                            children: "Resume"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contact",
                            className: "px-6 py-3 border border-[var(--border)] rounded-lg text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        delay: 0.8
                    },
                    className: "mt-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "mx-auto text-[var(--muted)] animate-bounce",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 5v14M19 12l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-24 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm tracking-widest uppercase text-[var(--accent)] mb-3 font-medium",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl sm:text-4xl font-bold mb-8",
                            children: "A bit about me"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: "-100px"
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.1
                            },
                            className: "space-y-4 text-[var(--muted)] leading-relaxed",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "I'm a BBA student at the University of Toronto Scarborough, specializing in Management with a focus on accounting and finance. I'm drawn to the clarity of numbers and the structure of financial systems."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Beyond the classroom, I enjoy building things — financial models, marketing campaigns, analytical dashboards, and personal systems that help me think and work better."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: "-100px"
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.2
                            },
                            className: "space-y-4 text-[var(--muted)] leading-relaxed",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "I believe the best work happens at intersections — business and creativity, analysis and design, strategy and execution. That mindset drives how I approach everything from case competitions to club leadership."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "I'm currently seeking internship opportunities in investment banking, accounting, finance, and business advisory where I can apply my analytical skills and grow professionally."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/포트폴리오 웹사이트/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "experiences",
    ()=>experiences,
    "projects",
    ()=>projects,
    "skillCategories",
    ()=>skillCategories
]);
const projects = [
    {
        title: "3-Statement Financial Model & DCF Valuation",
        summary: "Built an integrated 3-statement financial model with a discounted cash flow valuation from scratch in Excel, modeling revenue growth, working capital, and terminal value assumptions.",
        tags: [
            "Finance",
            "Valuation",
            "Excel"
        ],
        tools: [
            "Excel",
            "Financial Modeling"
        ]
    },
    {
        title: "Financial Statement Analysis Project",
        summary: "Conducted a comprehensive analysis of public company financial statements, evaluating profitability, liquidity, and solvency ratios to assess financial health and performance trends.",
        tags: [
            "Accounting",
            "Analytics"
        ],
        tools: [
            "Excel",
            "SEC Filings",
            "Ratio Analysis"
        ]
    },
    {
        title: "Audit Analytics Dashboard",
        summary: "Designed and developed an interactive analytics dashboard for audit data, automating key risk indicators and visualizing anomalies across financial transactions.",
        tags: [
            "Accounting",
            "Analytics",
            "Design"
        ],
        tools: [
            "Excel",
            "Python",
            "Data Visualization"
        ]
    },
    {
        title: "UTKSA Marketing & Branding Project",
        summary: "Led the marketing and branding strategy for the University of Toronto Korean Students' Association, creating visual assets, social media campaigns, and event promotional materials.",
        tags: [
            "Marketing",
            "Design",
            "Leadership"
        ],
        tools: [
            "Canva",
            "Instagram",
            "Branding Strategy"
        ]
    },
    {
        title: "Python Data Analysis Mini Project",
        summary: "Explored and analyzed real-world datasets using Python, applying data cleaning, exploratory analysis, and visualization techniques to uncover actionable insights.",
        tags: [
            "Analytics",
            "Technical"
        ],
        tools: [
            "Python",
            "Pandas",
            "Matplotlib"
        ]
    },
    {
        title: "Personal Productivity & Systems Project",
        summary: "Designed a personal productivity system integrating task management, goal tracking, and knowledge management tools to optimize daily workflows and long-term planning.",
        tags: [
            "Systems",
            "Design",
            "Productivity"
        ],
        tools: [
            "Notion",
            "Systems Thinking",
            "Automation"
        ]
    }
];
const experiences = [
    {
        role: "Marketing Director",
        organization: "University of Toronto Korean Students' Association (UTKSA)",
        period: "Sep 2024 — Present",
        description: "Leading brand strategy, social media content creation, and event marketing for one of the largest cultural clubs on campus. Managing a team of designers and content creators."
    },
    {
        role: "Finance Case Competition Participant",
        organization: "University of Toronto Scarborough",
        period: "Jan 2025 — Mar 2025",
        description: "Competed in finance case competitions analyzing real-world business problems, developing financial models, and presenting strategic recommendations to panels of judges."
    },
    {
        role: "Academic Projects — BBA Program",
        organization: "University of Toronto Scarborough — Management",
        period: "Sep 2023 — Present",
        description: "Completed projects in financial accounting, management, marketing strategy, and data analysis. Consistently applied analytical frameworks and delivered structured presentations."
    },
    {
        role: "Self-Directed Projects & Learning",
        organization: "Independent",
        period: "Ongoing",
        description: "Building financial models, learning Python for data analysis, designing branding materials, and developing personal systems for productivity and knowledge management."
    }
];
const skillCategories = [
    {
        name: "Finance & Accounting",
        skills: [
            "Financial Analysis",
            "Valuation (DCF, Comps)",
            "Financial Modeling",
            "Ratio Analysis",
            "Case Analysis",
            "Audit Concepts"
        ]
    },
    {
        name: "Technical",
        skills: [
            "Excel (Advanced)",
            "Python",
            "SQL (Basic)",
            "Data Visualization",
            "Financial Databases"
        ]
    },
    {
        name: "Creative",
        skills: [
            "Canva",
            "Branding & Identity",
            "Presentation Design",
            "Social Media Strategy",
            "Visual Communication"
        ]
    },
    {
        name: "Tools & Soft Skills",
        skills: [
            "PowerPoint",
            "Notion",
            "Google Workspace",
            "Teamwork",
            "Communication",
            "Leadership"
        ]
    }
];
}),
"[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/src/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const tagColors = {
    Finance: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    Valuation: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    Accounting: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    Analytics: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    Marketing: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    Design: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    Leadership: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    Technical: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
    Systems: "bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300",
    Productivity: "bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300",
    Excel: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
};
function getTagColor(tag) {
    return tagColors[tag] || "bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400";
}
function Projects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "py-24 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm tracking-widest uppercase text-[var(--accent)] mb-3 font-medium",
                            children: "Projects"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl sm:text-4xl font-bold mb-4",
                            children: "Featured Work"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[var(--muted)] mb-12 max-w-2xl",
                            children: "A selection of projects spanning finance, accounting, analytics, marketing, and systems design."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: "-50px"
                            },
                            transition: {
                                duration: 0.4,
                                delay: i * 0.1
                            },
                            className: "group bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mb-4",
                                    children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs px-2.5 py-1 rounded-full font-medium ${getTagColor(tag)}`,
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--muted)] leading-relaxed mb-4 flex-1",
                                    children: project.summary
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mb-4",
                                    children: project.tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded",
                                            children: tool
                                        }, tool, false, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-sm text-[var(--accent)] font-medium hover:underline self-start",
                                    children: "View Details →"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, project.title, true, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/src/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Experience() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "py-24 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm tracking-widest uppercase text-[var(--accent)] mb-3 font-medium",
                            children: "Experience"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl sm:text-4xl font-bold mb-12",
                            children: "Leadership & Involvement"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[var(--border)]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-12",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["experiences"].map((exp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true,
                                        margin: "-50px"
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: i * 0.1
                                    },
                                    className: "relative pl-8 md:pl-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 md:left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--accent)] -translate-x-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[var(--accent)] font-medium mb-1 tracking-wide",
                                            children: exp.period
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-lg font-semibold mb-1",
                                            children: exp.role
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[var(--muted)] mb-2",
                                            children: exp.organization
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[var(--muted)] leading-relaxed",
                                            children: exp.description
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, exp.role, true, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/src/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const categoryIcons = {
    "Finance & Accounting": "chart",
    Technical: "code",
    Creative: "palette",
    "Tools & Soft Skills": "tools"
};
function CategoryIcon({ category }) {
    const icon = categoryIcons[category] || "tools";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-10 h-10 rounded-lg bg-[var(--accent-light)] flex items-center justify-center mb-4",
        children: [
            icon === "chart" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "var(--accent)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 3v18h18"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                        lineNumber: 18,
                        columnNumber: 188
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 17V9"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                        lineNumber: 18,
                        columnNumber: 210
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13 17V5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                        lineNumber: 18,
                        columnNumber: 230
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 17v-3"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                        lineNumber: 18,
                        columnNumber: 250
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this),
            icon === "code" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "var(--accent)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "16 18 22 12 16 6"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                        lineNumber: 21,
                        columnNumber: 188
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "8 6 2 12 8 18"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                        lineNumber: 21,
                        columnNumber: 225
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this),
            icon === "palette" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "var(--accent)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "13.5",
                        cy: "6.5",
                        r: ".5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                        lineNumber: 24,
                        columnNumber: 188
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "17.5",
                        cy: "10.5",
                        r: ".5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                        lineNumber: 24,
                        columnNumber: 223
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "8.5",
                        cy: "7.5",
                        r: ".5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                        lineNumber: 24,
                        columnNumber: 259
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "6.5",
                        cy: "12.5",
                        r: ".5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                        lineNumber: 24,
                        columnNumber: 293
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                        lineNumber: 24,
                        columnNumber: 328
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this),
            icon === "tools" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "var(--accent)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                    lineNumber: 27,
                    columnNumber: 188
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function Skills() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "py-24 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm tracking-widest uppercase text-[var(--accent)] mb-3 font-medium",
                            children: "Skills"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl sm:text-4xl font-bold mb-12",
                            children: "What I Work With"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skillCategories"].map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: "-50px"
                            },
                            transition: {
                                duration: 0.4,
                                delay: i * 0.1
                            },
                            className: "bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--accent)] transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryIcon, {
                                    category: cat.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: cat.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: cat.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-sm text-[var(--muted)] flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 21
                                                }, this),
                                                skill
                                            ]
                                        }, skill, true, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, cat.name, true, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Resume
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Resume() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "resume",
        className: "py-24 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm tracking-widest uppercase text-[var(--accent)] mb-3 font-medium",
                            children: "Resume"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl sm:text-4xl font-bold mb-12",
                            children: "My Resume"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-50px"
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.1
                    },
                    className: "bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-8 md:p-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold mb-4 text-lg",
                                            children: "Education"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    children: "Bachelor of Business Administration"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[var(--muted)]",
                                                    children: "University of Toronto Scarborough"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[var(--muted)]",
                                                    children: "Specialization in Management — Accounting & Finance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[var(--accent)]",
                                                    children: "Expected Graduation: 2027"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold mb-4 text-lg",
                                            children: "Highlights"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-sm text-[var(--muted)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Finance case competition participant"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Marketing Director — UTKSA"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Self-directed projects in financial modeling & data analysis"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                            lineNumber: 65,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Proficient in Excel, Python, Canva, and PowerPoint"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 193
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "7 10 12 15 17 10"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 246
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "15",
                                                    x2: "12",
                                                    y2: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 283
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        "Download Resume"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    className: "inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-lg text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors",
                                    children: "Get in Touch"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const socials = [
    {
        label: "Email",
        href: "mailto:your.email@mail.utoronto.ca",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "20",
                    height: "16",
                    x: "2",
                    y: "4",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                    lineNumber: 10,
                    columnNumber: 185
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                    lineNumber: 10,
                    columnNumber: 234
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        text: "your.email@mail.utoronto.ca"
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/kihunlee",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                    lineNumber: 18,
                    columnNumber: 185
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "4",
                    height: "12",
                    x: "2",
                    y: "9"
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                    lineNumber: 18,
                    columnNumber: 275
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "4",
                    cy: "4",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                    lineNumber: 18,
                    columnNumber: 316
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        text: "linkedin.com/in/kihunlee"
    },
    {
        label: "GitHub",
        href: "https://github.com/kihunlee",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                    lineNumber: 26,
                    columnNumber: 185
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 18c-4.51 2-5-2-7-2"
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                    lineNumber: 26,
                    columnNumber: 445
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        text: "github.com/kihunlee"
    }
];
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-24 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm tracking-widest uppercase text-[var(--accent)] mb-3 font-medium",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl sm:text-4xl font-bold mb-4",
                            children: "Let's Connect"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[var(--muted)] max-w-lg mx-auto",
                            children: "I'm always open to new opportunities, conversations, and collaborations. Feel free to reach out."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-3 gap-6",
                    children: socials.map((social, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: social.href,
                            target: social.label !== "Email" ? "_blank" : undefined,
                            rel: social.label !== "Email" ? "noopener noreferrer" : undefined,
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: "-50px"
                            },
                            transition: {
                                duration: 0.4,
                                delay: i * 0.1
                            },
                            className: "group bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 text-center hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-[var(--accent-light)] flex items-center justify-center mx-auto mb-4 text-[var(--accent)] group-hover:scale-110 transition-transform",
                                    children: social.icon
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-1",
                                    children: social.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--muted)] break-all",
                                    children: social.text
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, social.label, true, {
                            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/포트폴리오 웹사이트/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-8 px-6 border-t border-[var(--border)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Kihun Lee. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Footer.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Built with Next.js & Tailwind CSS"
                }, void 0, false, {
                    fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Footer.tsx",
                    lineNumber: 6,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/components/Footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/포트폴리오 웹사이트/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/src/components/Navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/src/components/Hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/src/components/About.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Projects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/src/components/Projects.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Experience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/src/components/Experience.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Skills$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/src/components/Skills.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Resume$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/src/components/Resume.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/src/components/Contact.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/포트폴리오 웹사이트/src/components/Footer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/포트폴리오 웹사이트/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/app/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/app/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Projects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/app/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Experience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Skills$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Resume$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/포트폴리오 웹사이트/src/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/포트폴리오 웹사이트/src/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_d3ec$$_d2b8$$_d3f4$$_b9ac$$_c624$__$_c6f9$$_c0ac$$_c774$$_d2b8$$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/포트폴리오 웹사이트/src/app/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=Desktop_%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%20%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8_src_0lpnly3._.js.map