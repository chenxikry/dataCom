(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{495:function(t,e,n){"use strict";n.r(e);var i={name:"DtButton",props:{size:String,type:{type:String,default:"default"},nativeType:{type:String,default:"button"},disabled:Boolean,round:Boolean,plain:Boolean,autofocus:Boolean,icon:{type:String,default:""}},methods:{handleClick:function(t){this.$emit("click",t)}},mounted:function(){this.$emit("click",event)}},o=n(1),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"dt-button",class:[t.size?"dt-button--"+t.size:"",t.type?"dt-button--"+t.type:"",{"is-disabled":t.disabled,"is-round":t.round,"is-plain":t.plain}],attrs:{disabled:t.disabled,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.icon?n("i",{class:t.icon}):t._e(),t._v(" "),t.$slots.default?n("span",[t._t("default")],2):t._e()])},[],!1,null,null,null);e.default=a.exports}}]);