(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d5723f6"],{f30a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"種類",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),a("el-table-column",{attrs:{label:"議題編號/議題名稱"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title_num)+" "+t._s(e.row.title)+" ")]}}])}),a("el-table-column",{attrs:{label:"優先權",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.author))])]}}])}),a("el-table-column",{attrs:{"class-name":"status-col",label:"優先權",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status))])]}}])}),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"狀態",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),a("span",[t._v(t._s(e.row.display_time))])]}}])}),a("el-table-column",{attrs:{label:"受分配者",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.pageviews)+" ")]}}])})],1)],1)},l=[],s=a("fa98"),i={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(s["b"])().then((function(e){t.list=e.data.items,t.listLoading=!1}))}}},r=i,u=a("2877"),o=Object(u["a"])(r,n,l,!1,null,null,null);e["default"]=o.exports},fa98:function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return s}));var n=a("b775");function l(t){return Object(n["a"])({url:"/vue-admin-template/table/yalelist",method:"get",params:t})}function s(t){return console.log("hhhhh11111"),Object(n["a"])({url:"/vue-admin-template/table/ya",method:"get",params:t})}}}]);