(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(t,e,a){},12:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),l=a(4),o=a.n(l),r=(a(9),a(2)),s=(a(10),a(0));var i=function(t){var e=Object(c.useState)(!1),a=Object(r.a)(e,2),n=a[0],l=a[1],o=Object(c.useState)(t.text),i=Object(r.a)(o,2),d=i[0],b=i[1],u=Object(c.useState)(t.title),j=Object(r.a)(u,2),m=j[0],x=j[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"mx-3 my-2",children:Object(s.jsx)("div",{className:"card",style:{width:"18rem"},children:Object(s.jsxs)("div",{className:"card-body",style:t.style,children:[n&&Object(s.jsx)("input",{type:"title",className:"form-control",style:t.style,id:"exampleFormControlInput1",value:m,onChange:function(t){x(t.target.value)}}),!n&&Object(s.jsx)("h5",{className:"card-title",children:m}),n&&Object(s.jsx)("textarea",{className:"form-control my-3",style:t.style,id:"exampleFormControlTextarea1",rows:"3",value:d,onChange:function(t){b(t.target.value)}}),!n&&Object(s.jsx)("p",{className:"card-text",children:d}),Object(s.jsx)("button",{type:"button",className:"btn btn-outline-danger mx-2",onClick:function(){window.confirm("Are u sure to Delete!!")&&(t.data.splice(t.data.findIndex((function(e){return e.id===t.id})),1),t.update(),localStorage.data=JSON.stringify(t.data))},children:"Delete"}),Object(s.jsx)("button",{type:"button",className:"btn btn-outline-info",onClick:function(){l(!0)},children:"Edit"}),n&&Object(s.jsx)("button",{type:"button",className:"btn btn-primary btn-sm mx-2 my-2",onClick:function(){l(!1);var e=t.data.findIndex((function(e){return e.id===t.id}));t.data[e].text=d,t.data[e].title=m,localStorage.data=JSON.stringify(t.data)},children:"Confirm Edit"})]})})})})};if(!localStorage.data){localStorage.data=JSON.stringify([]),localStorage.ky=JSON.stringify(0)}var d=JSON.parse(localStorage.data);var b=JSON.parse(localStorage.ky);var u=function(t){var e=Object(c.useState)(""),a=Object(r.a)(e,2),n=a[0],l=a[1],o=Object(c.useState)(""),u=Object(r.a)(o,2),j=u[0],m=u[1],x=function(){var t=Object(c.useState)(0),e=Object(r.a)(t,2),a=(e[0],e[1]);return function(){return a((function(t){return t+1}))}}();return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",style:{color:"".concat(t.style.color)},children:"Heading"}),Object(s.jsx)("input",{type:"email",className:"form-control",style:t.style,id:"exampleFormControlInput1",placeholder:"Enter Heading Here....",onChange:function(t){m(t.target.value)},value:j})]}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",style:{color:"".concat(t.style.color)},children:"Notes Text"}),Object(s.jsx)("textarea",{className:"form-control",style:t.style,id:"exampleFormControlTextarea1",rows:"3",value:n,onChange:function(t){l(t.target.value)},placeholder:"Enter Notes Here...."})]}),Object(s.jsx)("button",{disabled:0===n.length&&0===j.length,type:"button",className:"btn btn-primary",onClick:function(){var t={id:"".concat(b),title:j,text:n};b++,d.push(t),localStorage.ky=JSON.stringify(b),localStorage.data=JSON.stringify(d),x()},children:"Add"}),Object(s.jsx)("button",{type:"button",className:"btn btn-warning mx-2",onClick:function(){window.confirm("This Action will Delete all Notes!!")&&(localStorage.clear(),d=[],b=0,localStorage.ky=JSON.stringify(b),localStorage.data=JSON.stringify(d),x())},children:"Clear All Notes"}),Object(s.jsx)("div",{className:"my-3",style:{display:"flex",flexWrap:"wrap"},children:d.map((function(e){return Object(s.jsx)(i,{text:e.text,id:e.id,title:e.title,style:t.style,data:d,update:x},e.id)}))})]})};var j=function(t){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-".concat(!1===t.mode?"light":"dark"),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"/StoreNotes/",style:{color:"".concat(t.style.color)},children:"StoreNotes"}),Object(s.jsxs)("div",{className:"form-check form-switch",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:t.setdark}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",style:{color:"".concat(t.style.color)},children:"Dark Mode"})]})]})})})},m={color:"black",backgroundColor:"white"};var x=function(){var t=Object(c.useState)(!1),e=Object(r.a)(t,2),a=e[0],n=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j,{setdark:function(){!1===a?(n(!0),m={color:"white",backgroundColor:"black"},document.body.style.backgroundColor="#313131"):(n(!1),m={color:"black",backgroundColor:"white"},document.body.style.backgroundColor="white")},mode:a,style:m}),Object(s.jsx)(u,{mode:a,style:m})]})},h=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,l=e.getLCP,o=e.getTTFB;a(t),c(t),n(t),l(t),o(t)}))};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),h()},9:function(t,e,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.22b254f9.chunk.js.map