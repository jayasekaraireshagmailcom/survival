(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[730],{3904:function(e,n,t){"use strict";function r(e,n,t,r,i,o,u){try{var s=e[o](u),a=s.value}catch(c){return void t(c)}s.done?n(a):Promise.resolve(a).then(r,i)}t.r(n),t.d(n,{default:function(){return m}});var i=t(809),o=t.n(i),u=t(1521),s=t(5131),a=t(8721),c=t(4795),f=t(4680),l=t(7294),d=t(1163),v=t(5893);var m=function(){var e=(0,l.useState)(void 0),n=e[0],t=e[1],i=(0,d.useRouter)().query.id,m=function(){var e,n=(e=o().mark((function e(){var n,r,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api");case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.next=8,r.filter((function(e){return e.id==i}));case 8:u=e.sent,console.log(u),t(u);case 11:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(i,o){var u=e.apply(n,t);function s(e){r(u,i,o,s,a,"next",e)}function a(e){r(u,i,o,s,a,"throw",e)}s(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,l.useMemo)((function(){m()}),[i]),(0,v.jsxs)(s.Z,{children:[(0,v.jsx)(u.Z,{spacing:"4",direction:"row",justifyContent:"flex-end",alignItems:"center",customStyles:{marginTop:"2em",marginRight:"2em"},children:(0,v.jsx)(a.Z,{btnvarient:"contained",src:"/employee/list",title:"list view",colorface:"blue",customStyles:{width:"10%",marginTop:"2em",borderRadius:"5em",fontWeight:"600",float:"right"}})}),(0,v.jsx)(f.Z,{variant:"outlined",sx:{borderRadius:"2em",margin:"2em"},children:(0,v.jsx)(c.Z,{btnTittle:"save",data:n})})]})}},1928:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/employee/edit/[id]",function(){return t(3904)}])}},function(e){e.O(0,[382,624,451,774,888,179],(function(){return n=1928,e(e.s=n);var n}));var n=e.O();_N_E=n}]);