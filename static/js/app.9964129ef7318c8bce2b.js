webpackJsonp([1],{"0RTp":function(t,e){},"1xuN":function(t,e){},E0EW:function(t,e,s){"use strict";s("quWu");var n={data:function(){return{}},props:{onlyOneActive:{default:!1,type:Boolean}},computed:{elements:function(){return this.$children},elements_count:function(){return this.$children.length},active_elements:function(){return this.$children.filter(function(t){return!0===t.status})}},methods:{closeAll:function(){this.$children.forEach(function(t){t.close()})},openAll:function(){this.$children.forEach(function(t){t.open()})}}},i={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"v-collapse-group"},[t._t("default")],2)},staticRenderFns:[]},a=s("VU/8")(n,i,!1,null,null,null);e.a=a.exports},Hf0R:function(t,e,s){"use strict";var n=s("quWu"),i={data:function(){return{nodes:{},status:!1}},watch:{status:function(t,e){if(!1===this.$parent.onlyOneActive)Object(n.toggleElement)(this.nodes.content,this.$options.$vc.settings);else if(!0===t&&!1===e){var s=this.$parent.$children.filter(function(t){return!0===t.status});s.length>1&&s.forEach(function(t){t.close(),Object(n.closeElement)(t.nodes.content,this.$options.$vc.settings)}.bind(this)),Object(n.openElement)(this.nodes.content,this.$options.$vc.settings),this.open()}else!0===e&&!1===t&&(Object(n.closeElement)(this.nodes.content,this.$options.$vc.settings),this.close())}},methods:{toggle:function(){this.status=!this.status},close:function(){this.status=!1},open:function(){this.status=!0}},mounted:function(){var t=this;this.nodes.toggle=this.$el.querySelector("."+this.$options.$vc.settings.togglerClassDefault),this.nodes.content=this.$el.querySelector("."+this.$options.$vc.settings.contentClassDefault),this.nodes.toggle.addEventListener("click",function(){t.toggle()})}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:"vc-"+this.$options.$vc.settings.basename},[this._t("default")],2)},staticRenderFns:[]};var l=s("VU/8")(i,a,!1,function(t){s("1xuN")},null,null);e.a=l.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("v-collapse-group",{attrs:{onlyOneActive:!0}},t._l(t.start,function(e,n){return s("v-collapse-wrapper",{key:n},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h5",{staticClass:"mb-0"},[s("button",{directives:[{name:"collapse-toggle",rawName:"v-collapse-toggle"}],staticClass:"btn btn-link"},[t._v("Collapsible Group Item "+t._s(n+1))])])]),s("div",{directives:[{name:"collapse-content",rawName:"v-collapse-content"}],staticClass:"card-body"},[s("p",[t._v("Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.")])])])])})),s("h1",[t._v(" Soruce:")]),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.code,expression:"code"}],staticClass:"pre-scrollable"},[s("code",{staticClass:"hljs"})])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"p-3 mb-2 bg-primary text-white"},[e("div",{staticClass:"bg-primary"},[this._v("Bootstrap")])])}]};var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"bulma-form"},[t._m(1),t._m(2),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"collapse-toggle",rawName:"v-collapse-toggle",value:"show_more_fields",expression:"'show_more_fields'"}],attrs:{type:"checkbox"}}),t._v("  Yes, I have promo code (click me)")])])]),s("v-collapse-wrapper",{ref:"show_more_fields"},[s("div",{directives:[{name:"collapse-content",rawName:"v-collapse-content"}]},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Name")]),s("div",{staticClass:"control"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"e.g Alex Smith"}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Email")]),s("div",{staticClass:"control"},[s("input",{staticClass:"input",attrs:{type:"email",placeholder:"e.g. alexsmith@gmail.com"}})])])])]),s("div",{staticClass:"field"}),t._m(3)],1),s("h1",[t._v(" Soruce:")]),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.code,expression:"code"}],staticClass:"pre-scrollable"},[s("code",{staticClass:"hljs"})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"message is-primary"},[e("div",{staticClass:"message-header bulma-header"},[e("h1",[this._v("Bulma - other usage.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[this._v("Name")]),e("div",{staticClass:"control"},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"e.g Alex Smith"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[this._v("Email")]),e("div",{staticClass:"control"},[e("input",{staticClass:"input",attrs:{type:"email",placeholder:"e.g. alexsmith@gmail.com"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field is-grouped"},[e("p",{staticClass:"control"},[e("a",{staticClass:"button is-primary"},[this._v("Submit")])]),e("p",{staticClass:"control"},[e("a",{staticClass:"button is-light"},[this._v("Cancel")])])])}]};var l={name:"App",components:{bootstrap:s("VU/8")({data:function(){return{start:3,code:'v-collapse-group(:onlyOneActive="true")\n  v-collapse-wrapper(v-for="(item, index) in start", :key="index")\n     .card\n        .card-header\n           h5.mb-0\n              button.btn.btn-link(v-collapse-toggle="") Collapsible Group Item {{index+1}}\n        .card-body(v-collapse-content="")\n           p\n             |Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'}}},i,!1,function(t){s("0RTp")},"data-v-8216e520",null).exports,bulma:s("VU/8")({data:function(){return{code:" article.message.is-primary\n        .message-header.bulma-header\n            h1 Bulma - other usage.\n    .bulma-form\n        .field\n            label.label Name\n            .control\n                input.input(type='text', placeholder='e.g Alex Smith')\n        .field\n            label.label Email\n            .control\n                input.input(type='email', placeholder='e.g. alexsmith@gmail.com')\n        .field\n            .control\n                label.checkbox\n                    input(type='checkbox' v-collapse-toggle=\"'show_more_fields'\")\n                    |&nbsp; Yes, I have promo code (click me)\n        v-collapse-wrapper(ref=\"show_more_fields\")\n            div(v-collapse-content=\"\")\n                .field\n                    label.label Name\n                    .control\n                        input.input(type='text', placeholder='e.g Alex Smith')\n                .field\n                    label.label Email\n                    .control\n                        input.input(type='email', placeholder='e.g. alexsmith@gmail.com')\n        .field\n        .field.is-grouped\n            p.control\n                a.button.is-primary\n                    | Submit\n            p.control\n                a.button.is-light\n                    | Cancel"}}},a,!1,function(t){s("l3AL")},"data-v-2a50cb28",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"float",attrs:{id:"div1"}},[e("bootstrap")],1),e("div",{staticClass:"float",attrs:{id:"div2"}},[e("bulma")],1)])},staticRenderFns:[]};var c=s("VU/8")(l,o,!1,function(t){s("qSng")},null,null).exports,r=s("5CJf"),u=s.n(r),d=s("Vn2I");n.a.config.productionTip=!1,n.a.use(d.a),n.a.use(u.a),new n.a({el:"#app",components:{App:c},template:"<App/>"})},l3AL:function(t,e){},qSng:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9964129ef7318c8bce2b.js.map