(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[542], {
    3955: function (e, t, o) {
        "use strict";
        o.d(t, {
            Z: function () {
                return components_Phone
            }
        });
        var a = o(5893)
            , i = o(7294)
            , r = o(3279)
            , n = o.n(r)
            , s = o(7363)
            , l = o.n(s)
            , components_Clock = () => {
                let [e, t] = (0,
                    i.useState)(void 0);
                return (0,
                    i.useEffect)(() => {
                        t(new Date);
                        let e = setInterval(() => {
                            t(new Date)
                        }
                            , 6e4);
                        return () => clearInterval(e)
                    }
                        , []),
                    (0,
                        a.jsx)("div", {
                            className: l().clock,
                            children: e && e.toLocaleTimeString([], {
                                hour: "numeric",
                                minute: "2-digit"
                            })
                        })
            }
            , c = o(1163)
            , components_SafariTopBar = e => {
                let t = (0,
                    c.useRouter)()
                    , o = t.query.site ? "/".concat(t.query.site) : "";
                return (0,
                    a.jsxs)("div", {
                        className: l().safariTopBar,
                        children: [(0,
                            a.jsxs)("div", {
                                className: l().statusBar,
                                children: [(0,
                                    a.jsx)(components_Clock, {}), (0,
                                        a.jsxs)("div", {
                                            className: l().barsBattery,
                                            children: [(0,
                                                a.jsxs)("svg", {
                                                    width: "15",
                                                    height: "12",
                                                    viewBox: "0 0 15 12",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [(0,
                                                        a.jsx)("path", {
                                                            d: "M2.12886 11.6482C1.46344 11.6482 0.915436 11.2726 0.915436 10.8109V9.30066C0.915436 8.83897 1.46344 8.47119 2.12886 8.47119C2.79428 8.47119 3.34226 8.83897 3.34226 9.30066V10.7874C3.34226 11.2726 2.77862 11.6482 2.12886 11.6482Z",
                                                            fill: "#333333"
                                                        }), (0,
                                                            a.jsx)("path", {
                                                                d: "M5.91007 11.648C5.24464 11.648 4.69664 11.2724 4.69664 10.8107V6.72596C4.69664 6.26428 5.24464 5.88867 5.91007 5.88867C6.57551 5.88867 7.1235 6.26428 7.1235 6.72596V10.8107C7.15482 11.2724 6.60682 11.648 5.91007 11.648Z",
                                                                fill: "#333333"
                                                            }), (0,
                                                                a.jsx)("path", {
                                                                    d: "M9.75379 11.6478C9.08836 11.6478 8.54819 11.2722 8.54819 10.8105V4.12782C8.54819 3.66613 9.08836 3.29053 9.75379 3.29053C10.4192 3.29053 10.9672 3.66613 10.9672 4.12782V10.8105C10.9672 11.2722 10.427 11.6478 9.75379 11.6478Z",
                                                                    fill: "#333333"
                                                                }), (0,
                                                                    a.jsx)("path", {
                                                                        d: "M13.5662 11.6481C12.9008 11.6481 12.3606 11.2725 12.3606 10.8108V1.53016C12.3606 1.06848 12.9008 0.692871 13.5662 0.692871C14.2316 0.692871 14.7796 1.06848 14.7796 1.53016V10.8108C14.7796 11.2725 14.2395 11.6481 13.5662 11.6481Z",
                                                                        fill: "#333333"
                                                                    })]
                                                }), (0,
                                                    a.jsxs)("svg", {
                                                        width: "20",
                                                        height: "11",
                                                        viewBox: "0 0 20 11",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [(0,
                                                            a.jsx)("path", {
                                                                d: "M18.5859 8.89509V7.41614H19.1809V3.30795H18.5859V1.82117C18.5697 1.44889 18.4065 1.09823 18.1321 0.845967C17.8577 0.593704 17.4945 0.460402 17.122 0.475249H2.39671C2.02343 0.46036 1.65938 0.593421 1.38375 0.845482C1.10813 1.09754 0.943236 1.4482 0.924957 1.82117V8.86379C0.943245 9.23743 1.10789 9.58887 1.38327 9.84218C1.65866 10.0955 2.02269 10.2303 2.39671 10.2175H17.0985C17.4701 10.2348 17.8337 10.1061 18.1116 9.85903C18.3895 9.61193 18.5598 9.26598 18.5859 8.89509ZM2.34974 9.56023C2.17246 9.5666 1.99981 9.50278 1.86935 9.38262C1.73889 9.26247 1.66113 9.09571 1.653 8.91857V1.78205C1.66113 1.60491 1.73889 1.43814 1.86935 1.31799C1.99981 1.19784 2.17246 1.13401 2.34974 1.14039H17.1377C17.3158 1.13396 17.4893 1.19754 17.621 1.31749C17.7527 1.43745 17.8321 1.60422 17.8423 1.78205V8.91857C17.8321 9.09639 17.7527 9.26317 17.621 9.38312C17.4893 9.50308 17.3158 9.56666 17.1377 9.56023H2.34974Z",
                                                                fill: "#333333"
                                                            }), (0,
                                                                a.jsx)("path", {
                                                                    d: "M11.3525 7.85461V2.50221C11.3546 2.44299 11.3448 2.38394 11.3238 2.32852C11.3028 2.2731 11.271 2.22242 11.2302 2.17944C11.1894 2.13645 11.1404 2.10203 11.0861 2.07818C11.0318 2.05433 10.9734 2.04153 10.9141 2.04053H3.13258C3.07364 2.04149 3.01551 2.05433 2.96165 2.07828C2.90778 2.10222 2.85931 2.13677 2.81911 2.17987C2.77892 2.22297 2.74783 2.27373 2.72771 2.32912C2.70759 2.3845 2.69886 2.44337 2.70203 2.50221V7.83896C2.69886 7.89779 2.70759 7.95667 2.72771 8.01205C2.74783 8.06743 2.77892 8.11819 2.81911 8.16129C2.85931 8.20439 2.90778 8.23895 2.96165 8.26289C3.01551 8.28683 3.07364 8.29967 3.13258 8.30064H10.9219C10.9795 8.29962 11.0363 8.28727 11.0891 8.2643C11.1419 8.24134 11.1896 8.2082 11.2296 8.16678C11.2696 8.12536 11.301 8.07647 11.3221 8.02291C11.3432 7.96934 11.3535 7.91215 11.3525 7.85461Z",
                                                                    fill: "#333333"
                                                                })]
                                                    })]
                                        })]
                            }), (0,
                                a.jsx)("div", {
                                    className: l().urlBar,
                                    children: (0,
                                        a.jsx)("a", {
                                            href: "/",
                                            children: e.logoUrl ? (0,
                                                a.jsxs)("p", {
                                                    children: ["demo.com", o]
                                                }) : (0,
                                                    a.jsxs)("p", {
                                                        children: ["demo.kargo.com", o]
                                                    })
                                        })
                                })]
                    })
            }
            , d = o(8384)
            , p = o.n(d)
            , components_SafariBottomBar = () => {
                let e = (0,
                    c.useRouter)();
                return (0,
                    a.jsxs)("div", {
                        className: p().safariBottomBar,
                        children: [(0,
                            a.jsx)("div", {
                                onClick: t => {
                                    let o = window.location.href;
                                    return window.history.length >= 2 ? window.history.back() : e.push("/"),
                                        setTimeout(() => {
                                            window.location.href === o && e.push("/")
                                        }
                                            , 500),
                                        !1
                                }
                                ,
                                children: (0,
                                    a.jsx)("svg", {
                                        className: p().backButton,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        children: (0,
                                            a.jsx)("path", {
                                                d: "M6.0459,12a.4976.4976,0,0,0,.16211.36816L16.74707,22.0293a.49971.49971,0,1,0,.67578-.73633L7.28613,12l10.1377-9.29395a.49971.49971,0,1,0-.67578-.73633L6.208,11.63184A.4976.4976,0,0,0,6.0459,12Z"
                                            })
                                    })
                            }), (0,
                                a.jsx)("div", {
                                    children: (0,
                                        a.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            children: (0,
                                                a.jsx)("path", {
                                                    d: "M17.9541,12a.4976.4976,0,0,1-.16211.36816L7.25293,22.0293a.49971.49971,0,0,1-.67578-.73633L16.71387,12,6.57617,2.70605A.49971.49971,0,1,1,7.252,1.96973l10.54,9.66211A.4976.4976,0,0,1,17.9541,12Z"
                                                })
                                        })
                                }), (0,
                                    a.jsx)("div", {
                                        children: (0,
                                            a.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                children: (0,
                                                    a.jsx)("g", {
                                                        children: (0,
                                                            a.jsxs)("g", {
                                                                children: [(0,
                                                                    a.jsx)("path", {
                                                                        d: "M20.62109,8H17.5a.5.5,0,0,0,0,1h3.12109A.37927.37927,0,0,1,21,9.37891V22.62109A.37927.37927,0,0,1,20.62109,23H3.37891A.37927.37927,0,0,1,3,22.62109V9.37891A.37927.37927,0,0,1,3.37891,9H6.5a.5.5,0,0,0,0-1H3.37891A1.37994,1.37994,0,0,0,2,9.37891V22.62109A1.37994,1.37994,0,0,0,3.37891,24H20.62109A1.37994,1.37994,0,0,0,22,22.62109V9.37891A1.37994,1.37994,0,0,0,20.62109,8Z"
                                                                    }), (0,
                                                                        a.jsx)("path", {
                                                                            d: "M7.87891,6.04395,11.5,1.84534V15.5a.5.5,0,0,0,1,0V1.84534l3.62109,4.19861a.5.5,0,1,0,.75781-.65234l-4.5-5.21777a.51644.51644,0,0,0-.75781,0l-4.5,5.21777a.5.5,0,1,0,.75781.65234Z"
                                                                        })]
                                                            })
                                                    })
                                            })
                                    }), (0,
                                        a.jsx)("div", {
                                            children: (0,
                                                a.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    children: (0,
                                                        a.jsx)("g", {
                                                            children: (0,
                                                                a.jsx)("path", {
                                                                    d: "M22.5,1H14.82129l-.0127.00256L14.7959,1a3.294,3.294,0,0,0-2.80225,1.57465A3.294,3.294,0,0,0,9.19141,1l-.00635.00128L9.17871,1H1.5a.49971.49971,0,0,0-.5.5V19.63672a.49971.49971,0,0,0,.5.5H9.127A2.3677,2.3677,0,0,1,11.49316,22.5a.5.5,0,0,0,1,0,2.3677,2.3677,0,0,1,2.36621-2.36328H22.5a.49971.49971,0,0,0,.5-.5V1.5A.49971.49971,0,0,0,22.5,1ZM9.231,19.14722a.47109.47109,0,0,0-.05225-.0105H2V2H9.17871l.00635-.00128L9.19141,2a2.304,2.304,0,0,1,2.30225,2.296l-.00049.00287V20.11218A3.35258,3.35258,0,0,0,9.231,19.14722ZM22,19.13672H14.82129c-.01367,0-.0249.00665-.03809.00769a3.35349,3.35349,0,0,0-2.29.96777V4.3056l.001-.00482L12.49365,4.296A2.304,2.304,0,0,1,14.7959,2l.0127-.00256L14.82129,2H22Z"
                                                                })
                                                        })
                                                })
                                        }), (0,
                                            a.jsx)("div", {
                                                children: (0,
                                                    a.jsx)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        x: "0px",
                                                        y: "0px",
                                                        viewBox: "0 0 24 24",
                                                        children: (0,
                                                            a.jsxs)("g", {
                                                                children: [(0,
                                                                    a.jsx)("path", {
                                                                        d: "M18.5,5h-16C2.2,5,2,5.2,2,5.5c0,0,0,0,0,0v16C2,21.8,2.2,22,2.5,22c0,0,0,0,0,0h16c0.3,0,0.5-0.2,0.5-0.5 c0,0,0,0,0,0v-16C19,5.2,18.8,5,18.5,5C18.5,5,18.5,5,18.5,5z M18,21H3V6h15V21z"
                                                                    }), (0,
                                                                        a.jsx)("path", {
                                                                            d: "M21.5,2h-16C5.2,2,5,2.2,5,2.5S5.2,3,5.5,3H21v15.5c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-16C22,2.2,21.8,2,21.5,2C21.5,2,21.5,2,21.5,2z"
                                                                        })]
                                                            })
                                                    })
                                            })]
                    })
            }
            , h = o(2253)
            , _ = o.n(h)
            , components_Phone = e => {
                let { api: t, overrideUrl: o, logoUrl: r, adInfo: s, leftNavOpen: l } = e
                    , c = o || "".concat(t, "&frame=1")
                    , [d, p] = (0,
                        i.useState)(0)
                    , [h, g] = (0,
                        i.useState)(!1)
                    , [v, x] = (0,
                        i.useState)(750);
                return s && (s.isDesktop = !1),
                    (0,
                        i.useEffect)(() => {
                            l && x(970),
                                p(window.innerWidth);
                            let e = n()(() => {
                                let e = document.getElementById("phone-wrapper")
                                    , t = Math.floor(.41 * window.innerHeight);
                                t % 2 != 0 && (t -= 1),
                                    e && (e.style.width = "".concat(t, "px"))
                            }
                                , 300);
                            window.addEventListener("resize", () => {
                                e(),
                                    p(window.innerWidth)
                            }
                            ),
                                window.addEventListener("message", function (e) {
                                    "openBrowser" == e.data.name && window.open(e.data.url, "_blank")
                                });
                            let t = document.getElementById("ad-preview-container");
                            if (null !== t && "IFRAME" === t.tagName) {
                                let e = t.contentWindow;
                                e.addEventListener("message", function (e) {
                                    "openBrowser" == e.data.name && window.open(e.data.url, "_blank")
                                })
                            }
                            let o = document.createElement("script");
                            o.text = "window.__krg_is_kargo_emulator_window = true;",
                                document.body.appendChild(o)
                        }
                            , []),
                    (0,
                        a.jsxs)("div", {
                            className: _().phoneContainer,
                            children: [(0,
                                a.jsx)("div", {
                                    className: "".concat(_().leftDiv, " ").concat(l && 0 !== d ? _().leftDivNavOpen : "")
                                }), (0,
                                    a.jsxs)("div", {
                                        className: _().phoneView,
                                        children: [(0,
                                            a.jsx)("div", {
                                                className: "".concat(_().mobileText),
                                                children: "This ad experience is best viewed on your mobile device."
                                            }), (0,
                                                a.jsx)("div", {
                                                    className: _().wrapper,
                                                    id: "phone-wrapper",
                                                    children: (0,
                                                        a.jsxs)("div", {
                                                            className: _().phone,
                                                            children: [(0,
                                                                a.jsx)("div", {
                                                                    className: _().dipCover
                                                                }), (0,
                                                                    a.jsx)("div", {
                                                                        className: _().dip
                                                                    }), (0,
                                                                        a.jsx)("div", {
                                                                            className: _().offButton
                                                                        }), (0,
                                                                            a.jsx)("div", {
                                                                                className: _().soundUpButton
                                                                            }), (0,
                                                                                a.jsx)("div", {
                                                                                    className: _().soundDownButton
                                                                                }), (0,
                                                                                    a.jsx)("div", {
                                                                                        className: _().main,
                                                                                        children: (0,
                                                                                            a.jsx)("div", {
                                                                                                className: _()["outer-container"],
                                                                                                children: (0,
                                                                                                    a.jsxs)("div", {
                                                                                                        className: _()["inner-container"],
                                                                                                        children: [(0,
                                                                                                            a.jsx)(components_SafariTopBar, {
                                                                                                                logoUrl: r
                                                                                                            }), (0,
                                                                                                                a.jsx)(components_SafariBottomBar, {}), (0,
                                                                                                                    a.jsx)("iframe", {
                                                                                                                        id: "ad-preview-container",
                                                                                                                        className: "".concat(_()["ad-preview-container"], " ").concat(_().iframe, " krg-nobust ").concat(_()["display-ad"]),
                                                                                                                        frameBorder: "0",
                                                                                                                        src: c
                                                                                                                    }, c)]
                                                                                                    })
                                                                                            })
                                                                                    })]
                                                        })
                                                })]
                                    }), (0,
                                        a.jsx)("div", {
                                            className: _().rightDiv
                                        })]
                        })
            }
    },
    348: function (e, t, o) {
        "use strict";
        o.d(t, {
            Eu: function () {
                return DesktopMain
            },
            F4: function () {
                return NavDrawer
            },
            ZR: function () {
                return DrawerToggleButton
            }
        });
        var a = o(5893)
            , i = o(9965)
            , r = o.n(i)
            , n = o(7533)
            , s = o(948)
            , l = o(9143)
            , c = o(461)
            , d = o(8895)
            , p = o(2797)
            , h = o(7294)
            , _ = o(2189)
            , g = o(3298)
            , v = o(2049);
        let DrawerToggleButton = e => {
            let { open: t, onClick: o } = e;
            return (0,
                a.jsx)(v.W, {
                    title: t ? (0,
                        a.jsx)("div", {
                            className: r().textTooltip,
                            children: "Hide Panel"
                        }) : (0,
                            a.jsx)("div", {
                                className: r().textTooltip,
                                children: "Show Panel"
                            }),
                    children: (0,
                        a.jsx)("button", {
                            className: "".concat(r().toggleButton, " ").concat(t ? r().toggleOpen : r().toggleClosed),
                            onClick: o,
                            children: (0,
                                a.jsx)("div", {
                                    className: "".concat(r().arrow, " ").concat(t ? r().rotate_0 : r().rotate_180),
                                    children: (0,
                                        a.jsx)(l.Yr, {})
                                })
                        })
                })
        }
            , DesktopMain = e => {
                let { open: t, children: o } = e;
                return (0,
                    a.jsx)("div", {
                        className: "".concat(r().desktopMain, " ").concat(t ? r().desktopMainOpen : r().desktopMainClosed),
                        children: o
                    })
            }
            , NavDrawer = e => {
                let { open: t, subdomain: o, categories: i, category: r, ad: s, id: l, queryString: c, logo: d } = e;
                return checkForCategoryOverride(o, i),
                    (0,
                        a.jsx)(n.ZP, {
                            sx: {
                                width: 272,
                                flexShrink: 0,
                                "& .MuiDrawer-paper": {
                                    width: 272,
                                    boxSizing: "border-box",
                                    filter: "drop-shadow(rgba(0, 0, 0, 0.2) 0px 0px 3px)",
                                    overflow: "hidden",
                                    display: "flex",
                                    justifyContent: "space-between"
                                }
                            },
                            variant: "persistent",
                            anchor: "left",
                            open: t,
                            transitionDuration: 300,
                            children: (0,
                                a.jsx)(NavAccordion, {
                                    categories: i,
                                    category: r,
                                    ad: s,
                                    id: l,
                                    queryString: c,
                                    logo: d
                                })
                        })
            }
            , x = (0,
                s.ZP)(e => (0,
                    a.jsx)(c.Z, {
                        disableGutters: !0,
                        elevation: 0,
                        square: !0,
                        ...e
                    }))(e => {
                        let { theme: t } = e;
                        return {
                            borderBottom: "1px solid #C8D0D6",
                            "&:not(:last-child)": {
                                borderBottom: 0
                            },
                            "&:before": {
                                display: "none"
                            }
                        }
                    }
                    )
            , u = (0,
                s.ZP)(e => (0,
                    a.jsx)(d.Z, {
                        expandIcon: (0,
                            a.jsx)(l.Ye, {}),
                        ...e
                    }))(e => {
                        let { theme: t } = e;
                        return {
                            height: "60px",
                            "& .MuiAccordionSummary-expandIconWrapper": {
                                marginRight: "10px"
                            },
                            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                transform: "rotate(180deg)"
                            },
                            "& .MuiAccordionSummary-content": {
                                marginLeft: t.spacing(1),
                                display: "flex",
                                alignItems: "center"
                            }
                        }
                    }
                    )
            , m = (0,
                s.ZP)(p.Z)(e => {
                    let { theme: t } = e;
                    return {
                        padding: "0 0 0 0"
                    }
                }
                )
            , NavAccordion = e => {
                let { logo: t, category: o, categories: i, ad: n, queryString: s, ...l } = e
                    , [c, d] = (0,
                        h.useState)(!1)
                    , [p, g] = (0,
                        h.useState)(!1)
                    , v = (0,
                        h.useRef)(null)
                    , handleScroll = e => {
                        let t = v.current.osInstance().elements().viewport;
                        0 === t.scrollTop ? (d(!1),
                            g(!1)) : (d(!0),
                                t.scrollTop === t.scrollHeight - t.offsetHeight ? g(!0) : g(!1))
                    }
                    ;
                return (0,
                    h.useEffect)(() => {
                        var e;
                        let t = null === (e = v.current) || void 0 === e ? void 0 : e.osInstance().elements().viewport;
                        return t && t.addEventListener("scroll", handleScroll),
                            () => {
                                t && t.removeEventListener("scroll", handleScroll)
                            }
                    }
                        , []),
                    (0,
                        a.jsxs)("div", {
                            className: r().logoCategoriesWrapper,
                            children: [t ? (0,
                                a.jsx)(Logo, {
                                    logo: t,
                                    scrolledDown: c
                                }) : null, (0,
                                    a.jsx)(_.E, {
                                        defer: !1,
                                        ref: v,
                                        style: {
                                            width: "100%",
                                            maxWidth: 272,
                                            position: "relative",
                                            overflow: "auto",
                                            height: "".concat(t ? "calc(100% - 108px)" : "calc(100% - 31px)")
                                        },
                                        className: "os-theme-dark",
                                        options: {
                                            scrollbars: {
                                                autoHide: "scroll"
                                            }
                                        },
                                        children: i.map((e, t) => e.overrideUrl ? (0,
                                            a.jsx)("div", {
                                                children: (0,
                                                    a.jsx)(CategoryOverride, {
                                                        i: t,
                                                        category: e,
                                                        categorySelected: o,
                                                        adSelected: n,
                                                        noBottomBorder: p && t === i.length - 1
                                                    })
                                            }, "category-".concat(t)) : (0,
                                                a.jsx)("div", {
                                                    children: (0,
                                                        a.jsx)(CategoryAccordion, {
                                                            i: t,
                                                            category: e,
                                                            categorySelected: o,
                                                            adSelected: n,
                                                            queryString: s,
                                                            noBottomBorder: p && t === i.length - 1
                                                        })
                                                }, "category-".concat(t)))
                                    }), (0,
                                        a.jsx)(KargoCopyright, {})]
                        })
            }
            , Logo = e => {
                let { logo: t, scrolledDown: o } = e;
                return (0,
                    a.jsx)("div", {
                        className: "".concat(r().logoWrapper, " ").concat(o ? r().scrolledDown : ""),
                        children: (0,
                            a.jsx)("img", {
                                className: r().logo,
                                src: t
                            })
                    })
            }
            , CategoryAccordion = e => {
                let { i: t, category: o, categorySelected: i, adSelected: n, queryString: s, noBottomBorder: l } = e;
                return (0,
                    a.jsxs)(x, {
                        defaultExpanded: t === i,
                        id: l ? r().noBottomBorder : "",
                        children: [(0,
                            a.jsx)(CategoryTitle, {
                                category: o,
                                i: t
                            }), (0,
                                a.jsx)(m, {
                                    children: o.ads.map((e, o) => (0,
                                        a.jsx)(AdTitle, {
                                            ad: e,
                                            i: t,
                                            j: o,
                                            selected: t === i && o === n,
                                            queryString: s
                                        }, "ad-".concat(t, "-").concat(o)))
                                })]
                    })
            }
            , CategoryOverride = e => {
                let { i: t, noBottomBorder: o, category: i } = e;
                return (0,
                    a.jsx)("a", {
                        className: r().overrideCategoryWrapper,
                        id: o ? r().noBottomBorder : "",
                        target: "_parent",
                        href: i.overrideUrl,
                        children: (0,
                            a.jsx)(CategoryTitle, {
                                category: i,
                                i: t
                            })
                    })
            }
            , CategoryTitle = e => {
                let { i: t, category: o } = e
                    , [i, n] = (0,
                        h.useState)(!1);
                return (0,
                    h.useEffect)(() => {
                        let e = document.getElementById("category-title-".concat(t));
                        e.offsetWidth < e.scrollWidth && n(!0)
                    }
                        , []),
                    (0,
                        a.jsx)(a.Fragment, {
                            children: (0,
                                a.jsx)(v.W, {
                                    placement: 0 === t ? "right-end" : null,
                                    title: i ? (0,
                                        a.jsx)("div", {
                                            className: r().textTooltip,
                                            children: (0,
                                                a.jsx)("div", {
                                                    children: o.title
                                                })
                                        }) : "",
                                    children: (0,
                                        a.jsx)("div", {
                                            children: o.overrideUrl ? (0,
                                                a.jsxs)("div", {
                                                    className: r().overrideCategory,
                                                    children: [(0,
                                                        a.jsx)("div", {
                                                            className: r().blueCircle
                                                        }), (0,
                                                            a.jsx)("div", {
                                                                className: r().categoryTitle,
                                                                id: "category-title-".concat(t),
                                                                children: o.title.toUpperCase()
                                                            })]
                                                }) : (0,
                                                    a.jsxs)(u, {
                                                        "aria-controls": "panel".concat(t, "d-content"),
                                                        id: "panel".concat(t, "d-header"),
                                                        children: [(0,
                                                            a.jsx)("div", {
                                                                className: r().blueCircle
                                                            }), (0,
                                                                a.jsx)("div", {
                                                                    className: r().categoryTitle,
                                                                    id: "category-title-".concat(t),
                                                                    children: o.title.toUpperCase()
                                                                })]
                                                    })
                                        })
                                })
                        })
            }
            , AdTitle = e => {
                let { ad: t, i: o, j: i, selected: n, queryString: s } = e
                    , [l, c] = (0,
                        h.useState)(!1)
                    , [d, p] = (0,
                        h.useState)("");
                return (0,
                    h.useEffect)(() => {
                        let e = document.getElementById("ad-title-".concat(o, "-").concat(i))
                            , t = document.getElementById("ad-subtitle-".concat(o, "-").concat(i));
                        (e.offsetWidth < e.scrollWidth || t.offsetWidth < t.scrollWidth) && c(!0)
                    }
                        , []),
                    (0,
                        h.useEffect)(() => {
                            let e = window.location.search
                                , t = new URLSearchParams(e);
                            t.delete("isSpotlight"),
                                p(t.toString())
                        }
                            , []),
                    (0,
                        a.jsx)(a.Fragment, {
                            children: (0,
                                a.jsx)(v.W, {
                                    title: l ? (0,
                                        a.jsxs)("div", {
                                            className: r().textTooltip,
                                            children: [(0,
                                                a.jsx)("div", {
                                                    children: t.user_action || t.title
                                                }), (0,
                                                    a.jsx)("div", {
                                                        className: r().subtitleTooltip,
                                                        children: t.inventory_name || t.subtitle
                                                    })]
                                        }) : "",
                                    children: (0,
                                        a.jsxs)("a", {
                                            target: "_parent",
                                            href: "/ad/".concat(t.id).concat(d ? "?".concat(d) : ""),
                                            className: "".concat(r().adDiv, " ").concat(n ? r().adDivSelected : ""),
                                            children: [(0,
                                                a.jsx)("div", {
                                                    className: "".concat(r().adTitle, " ").concat(n ? r().adTitleSelected : ""),
                                                    id: "ad-title-".concat(o, "-").concat(i),
                                                    children: t.user_action || t.title
                                                }), (0,
                                                    a.jsx)("div", {
                                                        className: r().adSubtitle,
                                                        id: "ad-subtitle-".concat(o, "-").concat(i),
                                                        children: t.inventory_name || t.subtitle
                                                    })]
                                        })
                                })
                        })
            }
            , KargoCopyright = () => (0,
                a.jsx)("div", {
                    className: r().copyright,
                    children: (0,
                        a.jsxs)("div", {
                            className: r().copyrightText,
                            children: ["\xa9 ", new Date().getFullYear(), " Kargo. All Rights Reserved."]
                        })
                })
            , checkForCategoryOverride = (e, t) => {
                t.forEach(t => {
                    "ent" === e && "banner" === t.class ? t.overrideUrl = "".concat(g.xq.ent, "&subdomain=").concat(e) : "politics" === e && "branding" === t.class ? t.overrideUrl = "".concat(g.xq.politics, "&subdomain=").concat(e) : "target" === e && "exclusive" === t.class ? t.overrideUrl = "".concat(g.xq.target, "&subdomain=").concat(e) : null === e && "custom" === t.class && (t.overrideUrl = g.xq.home)
                }
                )
            }
    },
    9965: function (e) {
        e.exports = {
            toggleButton: "LeftNavigation_toggleButton__WYRFd",
            toggleOpen: "LeftNavigation_toggleOpen__aXKAx",
            toggleClosed: "LeftNavigation_toggleClosed__Xt4fO",
            arrow: "LeftNavigation_arrow__SL06y",
            rotate_180: "LeftNavigation_rotate_180__bX0nS",
            rotate_0: "LeftNavigation_rotate_0__5uuEB",
            desktopMain: "LeftNavigation_desktopMain__srOMy",
            desktopMainOpen: "LeftNavigation_desktopMainOpen__Lano9",
            desktopMainClosed: "LeftNavigation_desktopMainClosed__xkDVq",
            logoCategoriesWrapper: "LeftNavigation_logoCategoriesWrapper__uZj59",
            logoWrapper: "LeftNavigation_logoWrapper__f8AND",
            logo: "LeftNavigation_logo__8wMSf",
            scrolledDown: "LeftNavigation_scrolledDown__L1k3c",
            noBottomBorder: "LeftNavigation_noBottomBorder__MsUPG",
            overrideCategoryWrapper: "LeftNavigation_overrideCategoryWrapper__dP0G0",
            overrideCategory: "LeftNavigation_overrideCategory__hdLDJ",
            blueCircle: "LeftNavigation_blueCircle__PKxCx",
            categoryTitle: "LeftNavigation_categoryTitle__BGpuP",
            textTooltip: "LeftNavigation_textTooltip__devu7",
            subtitleTooltip: "LeftNavigation_subtitleTooltip__DNsLq",
            adDiv: "LeftNavigation_adDiv__84Og3",
            adTitle: "LeftNavigation_adTitle__pGyr4",
            adSubtitle: "LeftNavigation_adSubtitle__65RcY",
            adTitleSelected: "LeftNavigation_adTitleSelected__KLVt3",
            adDivSelected: "LeftNavigation_adDivSelected__kdu2d",
            copyright: "LeftNavigation_copyright__xDnXE",
            copyrightText: "LeftNavigation_copyrightText__d4UGt"
        }
    },
    2253: function (e) {
        e.exports = {
            phoneContainer: "Phone_phoneContainer__zUb45",
            leftDiv: "Phone_leftDiv__oLo2B",
            rightDiv: "Phone_rightDiv__V8MGT",
            leftDivNavOpen: "Phone_leftDivNavOpen__Sr9Qw",
            phoneView: "Phone_phoneView__ANs9y",
            phone: "Phone_phone__bPdP5",
            logoBg: "Phone_logoBg__cTtB3",
            logoImg: "Phone_logoImg__J8FEp",
            "inner-container": "Phone_inner-container__dHhA3",
            "outer-container": "Phone_outer-container__OpVyF",
            iframe: "Phone_iframe__DKbdX",
            "ad-preview-container": "Phone_ad-preview-container__D_Sur",
            "display-ad": "Phone_display-ad__JD7px",
            main: "Phone_main__iyMTi",
            wrapper: "Phone_wrapper__6wh9J",
            dip: "Phone_dip__1f0Bw",
            dipCover: "Phone_dipCover__lF88q",
            offButton: "Phone_offButton__fSU_8",
            soundUpButton: "Phone_soundUpButton__qjhJ2",
            soundDownButton: "Phone_soundDownButton__xti0Y",
            mobileText: "Phone_mobileText__1Jvro"
        }
    },
    8384: function (e) {
        e.exports = {
            safariBottomBar: "SafariBottomBar_safariBottomBar__BLiaq",
            backButton: "SafariBottomBar_backButton__j5c3u"
        }
    },
    7363: function (e) {
        e.exports = {
            safariTopBar: "SafariTopBar_safariTopBar__z1X02",
            statusBar: "SafariTopBar_statusBar__5n7J5",
            urlBar: "SafariTopBar_urlBar__npePr",
            clock: "SafariTopBar_clock__c2YOQ",
            barsBattery: "SafariTopBar_barsBattery__P7Uck"
        }
    }
}]);
