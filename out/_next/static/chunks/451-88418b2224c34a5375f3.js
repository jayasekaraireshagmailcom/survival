"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{8721:function(e,t,i){i.d(t,{Z:function(){return x}});var r=i(6311),n=i(7294),s=i(6914),l=i(4518),a=i(9602),o=i(1079),d=i(5893);function x(e){var t=e.title,i=e.customStyles,x=e.colorface,c=e.src,u=e.vlidateData,f=e.btnvarient,p=(e.autoFocus,n.useState(x)),h=(0,r.Z)(p,2),m=(h[0],h[1],(0,a.ZP)(s.Z)((function(e){return{color:e.theme.palette.getContrastText(l.Z[500]),backgroundColor:"#fff",borderColor:l.Z[500],"&:hover":{backgroundColor:"#fff",color:l.Z[700]}}})));return(0,d.jsx)(m,{autoFocus:!0,onClick:u,variant:f,sx:i,children:(0,d.jsx)(o.Z,{href:c,underline:"none",children:t})})}},1521:function(e,t,i){i.d(t,{Z:function(){return s}});i(7294);var r=i(6447),n=i(5893);function s(e){var t=e.spacing,i=e.direction,s=e.justifyContent,l=e.alignItems,a=e.children,o=e.customStyles;return(0,n.jsx)(r.Z,{spacing:t,direction:i,justifyContent:s,alignItems:l,sx:o,children:a})}},4795:function(e,t,i){i.d(t,{Z:function(){return v}});var r=i(7294),n=i(7666),s=i(5893);function l(e){var t=e.children;return(0,s.jsx)(n.Z,{children:t})}var a=i(4659),o=function(e){e.inputid,e.label;var t=e.fieldColor,i=(e.valueChange,e.recordValue,e.errorField),r=e.helperMsg,n=e.textRef,l=e.fullWidth,o=e.inputValue;return(0,s.jsx)(a.Z,{inputRef:n,helperText:r,error:i,variant:t,fullWidth:l,defaultValue:o})},d=i(243),x=i(1275),c=i(6446),u=i(3460);function f(e){var t=e.labelId,i=e.id,r=e.label,n=e.fieldColor,l=e.handleChange,a=e.dataSource,o=e.value,f=e.error,p=e.errorMsg;return(0,s.jsxs)(c.Z,{fullWidth:!0,variant:n,error:f,children:[(0,s.jsx)(d.Z,{labelId:t,id:i,value:o,label:r,onChange:l,children:a.map((function(e){return(0,s.jsx)(x.Z,{value:e.value,children:e.label},e.value)}))}),(0,s.jsx)(u.Z,{children:p})]})}var p=i(8721),h=i(558),m=i(1508),j=function(e){return 0===e.length},g=function(e){return!e.match(/^[A-Za-z]+$/)},Z=function(e){return!(e.length>=6&&e.length<=10)},P=i(1163);function v(e){(0,P.useRouter)().query.id;var t=e.btnTittle,i=e.data,n=(0,r.useState)(!1),a=n[0],d=n[1],x=(0,r.useState)(""),c=x[0],u=x[1],v=(0,r.useState)(!1),b=v[0],y=v[1],C=(0,r.useState)(""),S=C[0],O=C[1],M=(0,r.useState)(!1),F=M[0],R=M[1],T=(0,r.useState)(""),I=T[0],W=T[1],w=(0,r.useState)(!1),k=w[0],N=w[1],_=(0,r.useState)(""),E=_[0],A=_[1],D=(0,r.useState)("M"),V=D[0],z=D[1],G=(0,r.useState)(!1),$=G[0],L=G[1],q=(0,r.useState)(""),J=q[0],B=q[1],H=["M","F"],K=(0,r.useRef)(""),Q=(0,r.useRef)(""),U=(0,r.useRef)(""),X=(0,r.useRef)(""),Y=function(){var e=!0,t=K.current.valueOf,i=Q.current.valueOf,r=U.current.valueOf,n=X.current.valueOf;if(j(t)||g(t)||Z(t)?(d(!0),u("Invalidate First Name Input !"),e=!1):(d(!1),u("")),j(i)||g(i)||Z(i)?(y(!0),O("Invalidate Last Name Input !"),e=!1):(y(!1),O("")),r.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?(R(!1),W("")):(R(!0),W("Invalidate Email Input !"),e=!1),!function(e){return!e.match(/^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/)}(n)?(N(!1),A("")):(N(!0),A("Invalidate Phone Input !"),e=!1),!function(e,t){return!e.includes(t)}(H,V)?(L(!1),B("")):(L(!0),B("Invalied Gender Option !"),e=!1),e)fetch("/api",{method:"POST",body:JSON.stringify({first_name:t,last_name:i,email:r,number:n,gender:V}),headers:{"Content-Type":"application/json"}})},ee=function(e){z(e.target.value)},te=(0,r.useState)(""),ie=te[0],re=te[1];return(0,r.useMemo)((function(){void 0!==typeof i&&""!=i&&null!=i&&(re(i[0].first_name),i)}),[i]),void 0!==i?(0,s.jsxs)(m.Z,{sx:{flexGrow:1},children:[(0,s.jsxs)(h.ZP,{container:!0,spacing:0,sx:{paddingTop:"2em"},children:[(0,s.jsx)(h.ZP,{item:!0,xs:1}),(0,s.jsx)(h.ZP,{item:!0,xs:2,alignItems:"center",sx:{position:"relative",top:"1em"},children:(0,s.jsx)(l,{children:"First Name"})}),(0,s.jsx)(h.ZP,{item:!0,xs:8,children:(0,s.jsx)(o,{inputValue:ie,textRef:K,fieldColor:"filled",errorField:a,helperMsg:c,fullWidth:!0})}),(0,s.jsx)(h.ZP,{item:!0,xs:1})]}),(0,s.jsxs)(h.ZP,{container:!0,spacing:0,sx:{paddingTop:"1em"},children:[(0,s.jsx)(h.ZP,{item:!0,xs:1}),(0,s.jsx)(h.ZP,{item:!0,xs:2,sx:{position:"relative",top:"1em"},children:(0,s.jsx)(l,{sx:{padding:"2em"},children:"Last Name"})}),(0,s.jsx)(h.ZP,{item:!0,xs:8,children:(0,s.jsx)(o,{inputValue:"data[0]?.last_name",textRef:Q,fieldColor:"filled",errorField:b,helperMsg:S,fullWidth:!0})}),(0,s.jsx)(h.ZP,{item:!0,xs:1})]}),(0,s.jsxs)(h.ZP,{container:!0,spacing:0,sx:{paddingTop:"1em"},children:[(0,s.jsx)(h.ZP,{item:!0,xs:1}),(0,s.jsx)(h.ZP,{item:!0,xs:2,sx:{position:"relative",top:"1em"},children:(0,s.jsx)(l,{sx:{padding:"2em"},children:"Email"})}),(0,s.jsx)(h.ZP,{item:!0,xs:8,children:(0,s.jsx)(o,{inputValue:"data[0]?.email",textRef:U,fieldColor:"filled",errorField:F,helperMsg:I,fullWidth:!0})}),(0,s.jsx)(h.ZP,{item:!0,xs:1})]}),(0,s.jsxs)(h.ZP,{container:!0,spacing:0,sx:{paddingTop:"1em"},children:[(0,s.jsx)(h.ZP,{item:!0,xs:1}),(0,s.jsx)(h.ZP,{item:!0,xs:2,sx:{position:"relative",top:"1em"},children:(0,s.jsx)(l,{sx:{padding:"2em"},children:"Phone"})}),(0,s.jsx)(h.ZP,{item:!0,xs:8,children:(0,s.jsx)(o,{inputValue:"data[0]?.phone",textRef:X,fieldColor:"filled",errorField:k,helperMsg:E,fullWidth:!0})}),(0,s.jsx)(h.ZP,{item:!0,xs:1})]}),(0,s.jsxs)(h.ZP,{container:!0,spacing:0,sx:{paddingTop:"1em"},children:[(0,s.jsx)(h.ZP,{item:!0,xs:1}),(0,s.jsx)(h.ZP,{item:!0,xs:2,sx:{position:"relative",top:"1em"},children:(0,s.jsx)(l,{sx:{padding:"2em"},children:"Gender"})}),(0,s.jsx)(h.ZP,{item:!0,xs:8,children:(0,s.jsx)(f,{fieldColor:"filled",handleChange:ee,dataSource:[{id:1,value:"M",label:"M"},{id:2,value:"F",label:"F"},{id:3,value:"bysex",label:"NA"}],value:V,error:$,errorMsg:J})}),(0,s.jsx)(h.ZP,{item:!0,xs:1})]}),(0,s.jsxs)(h.ZP,{container:!0,spacing:0,sx:{padding:"2em 0 2em 2em"},children:[(0,s.jsx)(h.ZP,{item:!0,xs:11,children:(0,s.jsx)(p.Z,{btnvarient:"contained",vlidateData:Y,title:t,customStyles:{marginTop:"2em",borderRadius:"5px",fontWeight:"600",width:"20%",background:"#fff",color:"purple",float:"right",border:1},colorface:"blue"})}),(0,s.jsx)(h.ZP,{item:!0,xs:1})]})]}):(0,s.jsxs)(m.Z,{sx:{flexGrow:1},children:[(0,s.jsxs)(h.ZP,{container:!0,spacing:0,sx:{paddingTop:"2em"},children:[(0,s.jsx)(h.ZP,{item:!0,xs:1}),(0,s.jsx)(h.ZP,{item:!0,xs:2,alignItems:"center",sx:{position:"relative",top:"1em"},children:(0,s.jsx)(l,{children:"First Name"})}),(0,s.jsx)(h.ZP,{item:!0,xs:8,children:(0,s.jsx)(o,{textRef:K,fieldColor:"filled",errorField:a,helperMsg:c,fullWidth:!0})}),(0,s.jsx)(h.ZP,{item:!0,xs:1})]}),(0,s.jsxs)(h.ZP,{container:!0,spacing:0,sx:{paddingTop:"1em"},children:[(0,s.jsx)(h.ZP,{item:!0,xs:1}),(0,s.jsx)(h.ZP,{item:!0,xs:2,sx:{position:"relative",top:"1em"},children:(0,s.jsx)(l,{sx:{padding:"2em"},children:"Last Name"})}),(0,s.jsx)(h.ZP,{item:!0,xs:8,children:(0,s.jsx)(o,{textRef:Q,fieldColor:"filled",errorField:b,helperMsg:S,fullWidth:!0})}),(0,s.jsx)(h.ZP,{item:!0,xs:1})]}),(0,s.jsxs)(h.ZP,{container:!0,spacing:0,sx:{paddingTop:"1em"},children:[(0,s.jsx)(h.ZP,{item:!0,xs:1}),(0,s.jsx)(h.ZP,{item:!0,xs:2,sx:{position:"relative",top:"1em"},children:(0,s.jsx)(l,{sx:{padding:"2em"},children:"Email"})}),(0,s.jsx)(h.ZP,{item:!0,xs:8,children:(0,s.jsx)(o,{textRef:U,fieldColor:"filled",errorField:F,helperMsg:I,fullWidth:!0})}),(0,s.jsx)(h.ZP,{item:!0,xs:1})]}),(0,s.jsxs)(h.ZP,{container:!0,spacing:0,sx:{paddingTop:"1em"},children:[(0,s.jsx)(h.ZP,{item:!0,xs:1}),(0,s.jsx)(h.ZP,{item:!0,xs:2,sx:{position:"relative",top:"1em"},children:(0,s.jsx)(l,{sx:{padding:"2em"},children:"Phone"})}),(0,s.jsx)(h.ZP,{item:!0,xs:8,children:(0,s.jsx)(o,{textRef:X,fieldColor:"filled",errorField:k,helperMsg:E,fullWidth:!0})}),(0,s.jsx)(h.ZP,{item:!0,xs:1})]}),(0,s.jsxs)(h.ZP,{container:!0,spacing:0,sx:{paddingTop:"1em"},children:[(0,s.jsx)(h.ZP,{item:!0,xs:1}),(0,s.jsx)(h.ZP,{item:!0,xs:2,sx:{position:"relative",top:"1em"},children:(0,s.jsx)(l,{sx:{padding:"2em"},children:"Gender"})}),(0,s.jsx)(h.ZP,{item:!0,xs:8,children:(0,s.jsx)(f,{fieldColor:"filled",handleChange:ee,dataSource:[{id:1,value:"M",label:"M"},{id:2,value:"F",label:"F"},{id:3,value:"bysex",label:"NA"}],value:V,error:$,errorMsg:J})}),(0,s.jsx)(h.ZP,{item:!0,xs:1})]}),(0,s.jsxs)(h.ZP,{container:!0,spacing:0,sx:{padding:"2em 0 2em 2em"},children:[(0,s.jsx)(h.ZP,{item:!0,xs:11,children:(0,s.jsx)(p.Z,{btnvarient:"contained",vlidateData:Y,title:t,customStyles:{marginTop:"2em",borderRadius:"5px",fontWeight:"600",width:"20%",background:"#fff",color:"purple",float:"right",border:1},colorface:"blue"})}),(0,s.jsx)(h.ZP,{item:!0,xs:1})]})]})}},5131:function(e,t,i){i.d(t,{Z:function(){return u}});i(7294);var r=i(2809),n=i(9602),s=i(4680),l=i(558),a=i(5893);function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){(0,r.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var x=(0,n.ZP)(s.Z)((function(e){var t=e.theme;return d(d({backgroundColor:"#4d4dff"},t.typography.body2),{},{padding:t.spacing(2),textAlign:"left",color:"#fff",fontSize:"18px",fontWeight:"bold",borderRadius:"0 0"})}));function c(e){var t=e.title;return(0,a.jsx)(l.ZP,{container:!0,spacing:0,children:(0,a.jsx)(l.ZP,{item:!0,xs:12,children:(0,a.jsx)(x,{children:t})})})}var u=function(e){var t=e.children;return(0,a.jsxs)("div",{children:[(0,a.jsx)(c,{title:"Employee Manager"}),t]})}}}]);