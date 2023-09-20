(function (e) {
  function t(t) {
    for (
      var a, o, s = t[0], l = t[1], u = t[2], d = 0, p = [];
      d < s.length;
      d++
    )
      (o = s[d]),
        Object.prototype.hasOwnProperty.call(n, o) && n[o] && p.push(n[o][0]),
        (n[o] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    c && c(t);
    while (p.length) p.shift()();
    return i.push.apply(i, u || []), r();
  }
  function r() {
    for (var e, t = 0; t < i.length; t++) {
      for (var r = i[t], a = !0, s = 1; s < r.length; s++) {
        var l = r[s];
        0 !== n[l] && (a = !1);
      }
      a && (i.splice(t--, 1), (e = o((o.s = r[0]))));
    }
    return e;
  }
  var a = {},
    n = { app: 0 },
    i = [];
  function o(t) {
    if (a[t]) return a[t].exports;
    var r = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.m = e),
    (o.c = a),
    (o.d = function (e, t, r) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          o.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var u = 0; u < s.length; u++) t(s[u]);
  var c = l;
  i.push([0, "chunk-vendors"]), r();
})({
  0: function (e, t, r) {
    e.exports = r("56d7");
  },
  "10ed": function (e, t, r) {},
  "199c": function (e, t) {},
  "23be": function (e, t, r) {
    "use strict";
    var a = r("199c"),
      n = r.n(a);
    t["default"] = n.a;
  },
  "3dfd": function (e, t, r) {
    "use strict";
    var a = r("874e"),
      n = r("23be"),
      i = r("2877"),
      o = Object(i["a"])(n["default"], a["a"], a["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  "56d7": function (e, t, r) {
    "use strict";
    r.r(t);
    r("e260"), r("e6cf"), r("cca6"), r("a79d");
    var a = r("2b0e"),
      n = r("3dfd"),
      i = r("8c4f"),
      o = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("html", { attrs: { lang: "en" } }, [
          e._m(0),
          r("body", [
            r(
              "div",
              { staticClass: "back" },
              [
                r(
                  "el-row",
                  [
                    r("el-col", { attrs: { span: 24 } }, [
                      r(
                        "div",
                        { staticClass: "grid-content bg-purple-light" },
                        [
                          r(
                            "div",
                            { staticClass: "info" },
                            [
                              r(
                                "el-col",
                                { attrs: { span: 24 } },
                                [
                                  r("el-card", { attrs: { shadow: "hover" } }, [
                                    r(
                                      "div",
                                      {
                                        staticClass: "tianxie",
                                        staticStyle: { "padding-top": "0px" },
                                      },
                                      [
                                        r(
                                          "el-form",
                                          {
                                            ref: "ruleForm",
                                            staticClass: "demo-ruleForm",
                                            attrs: {
                                              model: e.ruleForm,
                                              rules: e.rules,
                                              "label-width": "100px",
                                            },
                                          },
                                          [
                                            r(
                                              "el-form-item",
                                              {
                                                attrs: {
                                                  label: "手机号",
                                                  prop: "userid",
                                                },
                                              },
                                              [
                                                r("el-input", {
                                                  model: {
                                                    value: e.ruleForm.userid,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.ruleForm,
                                                        "userid",
                                                        t
                                                      );
                                                    },
                                                    expression:
                                                      "ruleForm.userid",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            r(
                                              "el-form-item",
                                              {
                                                attrs: {
                                                  label: "密 码",
                                                  prop: "password",
                                                },
                                              },
                                              [
                                                r("el-input", {
                                                  attrs: { type: "password" },
                                                  model: {
                                                    value: e.ruleForm.password,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.ruleForm,
                                                        "password",
                                                        t
                                                      );
                                                    },
                                                    expression:
                                                      "ruleForm.password",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            r(
                                              "el-form-item",
                                              {
                                                attrs: {
                                                  label: "验证码",
                                                  prop: "base",
                                                },
                                              },
                                              [
                                                r("el-input", {
                                                  model: {
                                                    value: e.ruleForm.base,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.ruleForm,
                                                        "base",
                                                        t
                                                      );
                                                    },
                                                    expression: "ruleForm.base",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            r("center"),
                                            r(
                                              "el-form-item",
                                              { staticClass: "button1" },
                                              [
                                                r(
                                                  "el-button",
                                                  {
                                                    attrs: { type: "primary" },
                                                    on: {
                                                      click: function (t) {
                                                        return e.submitForm();
                                                      },
                                                    },
                                                  },
                                                  [e._v("2.获取Bearer")]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          r(
                            "div",
                            { staticClass: "mid" },
                            [
                              r(
                                "el-col",
                                { attrs: { span: 24 } },
                                [
                                  r(
                                    "el-card",
                                    { attrs: { shadow: "hover" } },
                                    [
                                      r(
                                        "center",
                                        [
                                          r(
                                            "el-button",
                                            {
                                              attrs: { type: "primary" },
                                              on: {
                                                click: function (t) {
                                                  return e.getimag();
                                                },
                                              },
                                            },
                                            [e._v("1.获取验证码")]
                                          ),
                                          r("br"),
                                          r("img", {
                                            attrs: {
                                              width: "100px",
                                              height: "40px",
                                              alt: "null",
                                              src:
                                                "data:image/gif;base64," +
                                                e.imgbase,
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          r(
                            "div",
                            {
                              staticClass: "downmid",
                              staticStyle: { "padding-top": "150px" },
                            },
                            [
                              r(
                                "el-col",
                                { attrs: { span: 24 } },
                                [
                                  r(
                                    "el-card",
                                    { attrs: { shadow: "hover" } },
                                    [
                                      r("el-input", {
                                        attrs: {
                                          type: "textarea",
                                          rows: 5,
                                          placeholder: "读入Bearer",
                                        },
                                        model: {
                                          value: e.textarea,
                                          callback: function (t) {
                                            e.textarea = t;
                                          },
                                          expression: "textarea",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          r(
                            "div",
                            {
                              staticClass: "back",
                              staticStyle: { "padding-top": "160px" },
                            },
                            [
                              r(
                                "el-col",
                                { attrs: { span: 24 } },
                                [
                                  r(
                                    "el-card",
                                    { attrs: { shadow: "hover" } },
                                    [
                                      r(
                                        "center",
                                        [
                                          r(
                                            "el-button",
                                            {
                                              attrs: { type: "primary" },
                                              on: {
                                                click: function (t) {
                                                  return e.setorigin();
                                                },
                                              },
                                            },
                                            [e._v("3.设置起点")]
                                          ),
                                          r(
                                            "el-button",
                                            {
                                              attrs: { type: "primary" },
                                              on: {
                                                click: function (t) {
                                                  return e.setpoint();
                                                },
                                              },
                                            },
                                            [e._v("4.设置终点")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ]);
      },
      s = [
        function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("head", [
            r("link", {
              attrs: {
                rel: "icon",
                type: "image/x-icon",
                href: "../img/favicon.ico",
              },
            }),
            r("meta", { attrs: { charset: "UTF-8" } }),
            r("meta", {
              attrs: { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
            }),
            r("meta", {
              attrs: {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0",
              },
            }),
            r("title", [e._v("Document")]),
          ]);
        },
      ];
    alert("请先获取验证码");
    var l = {
        name: "tb",
        data: function () {
          return {
            ruleForm: {
              userid: "",
              password: "",
              base: "",
              grant_type: "password",
              code_verifier: "",
              client_id: "DDE1F5ACAF194674B13167269861FB7D",
            },
            textarea: "",
            imgbase: "",
            originForm: {
              status: 0,
              longitude: "117.106294",
              latitude: "39.067065",
              address: "天津市西青区海泰东路靠近天津工业大学",
            },
            pointForm: {
              status: 1,
              longitude: "117.113244",
              latitude: "39.066988",
              address: "天津市西青区宾水西道延长线靠近天津工业大学",
            },
            rules: {
              userid: [
                { required: !0, message: "请输入用户名", trigger: "blur" },
                {
                  min: 10,
                  max: 15,
                  message: "长度在 3 到 15 个字符",
                  trigger: "blur",
                },
              ],
            },
          };
        },
        methods: {
          getimag: function () {
            var e = this;
            this.$axios
              .get("https://api.tjise.edu.cn/usercenter/api/v1/ImageCode")
              .then(function (t) {
                (e.imgbase = t.data.data.img),
                  (e.ruleForm.code_verifier = t.data.data.requestId + ":");
              });
          },
          submitForm: function () {
            var e = this;
            (this.ruleForm.code_verifier =
              this.ruleForm.code_verifier + this.ruleForm.base),
              console.log(this.ruleForm.code_verifier),
              this.$axios
                .post(
                  "https://api.tjise.edu.cn/usercenter/connect/token",
                  this.$qs.stringify({
                    username: this.ruleForm.userid,
                    password: this.ruleForm.password,
                    grant_type: this.ruleForm.grant_type,
                    code_verifier: this.ruleForm.code_verifier,
                    client_id: this.ruleForm.client_id,
                  })
                )
                .then(function (t) {
                  console.log(t),
                    (e.textarea = "Bearer " + t.data.access_token),
                    alert("写入Bearer成功");
                });
          },
          setorigin: function () {
            this.$axios
              .post(
                "https://api_tjise.tjise.edu.cn/api/v1/Motions/ClockIn",
                this.originForm,
                { headers: { Authorization: this.textarea } }
              )
              .then(function (e) {
                console.log(e), alert("设置起点成功");
              });
          },
          setpoint: function () {
            this.$axios
              .post(
                "https://api_tjise.tjise.edu.cn/api/v1/Motions/ClockIn",
                this.pointForm,
                { headers: { Authorization: this.textarea } }
              )
              .then(function (e) {
                console.log(e), alert("设置终点成功");
              });
          },
        },
      },
      u = l,
      c = (r("eb90"), r("2877")),
      d = Object(c["a"])(u, o, s, !1, null, null, null),
      p = d.exports;
    a["default"].use(i["a"]);
    var f = [
        {
          path: "/",
          name: "Index",
          redirect: { name: "run" },
          meta: { title: "schoolRun" },
        },
        {
          path: "/run",
          name: "run",
          component: p,
          meta: { title: "schoolRun" },
        },
      ],
      m = new i["a"]({ base: "", routes: f }),
      h = m,
      b = r("5c96"),
      v = r.n(b),
      g = r("4328"),
      y = r.n(g),
      x = (r("0fae"), r("bc3a")),
      w = r.n(x);
    r("10ed");
    a["default"].use(v.a),
      (a["default"].config.productionTip = !1),
      (a["default"].prototype.$axios = w.a),
      (a["default"].prototype.$qs = y.a),
      new a["default"]({
        router: h,
        render: function (e) {
          return e(n["default"]);
        },
      }).$mount("#app");
  },
  "874e": function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return a;
    }),
      r.d(t, "b", function () {
        return n;
      });
    var a = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", { attrs: { id: "app" } }, [r("router-view")], 1);
      },
      n = [];
  },
  d0f9: function (e, t, r) {},
  eb90: function (e, t, r) {
    "use strict";
    r("d0f9");
  },
});
