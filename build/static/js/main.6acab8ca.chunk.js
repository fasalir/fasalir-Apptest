(this.webpackJsonpstockbit=this.webpackJsonpstockbit||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(12),o=c.n(n),i=(c(35),c(36),c(19)),l=c(3),r=c(15),d=c(14),j=c.n(d),m=c(1),u=function(e){var t=e.handleClose,c=e.show,s=e.children,a=c?"modal d-block":"modal d-none";return Object(m.jsx)("div",{className:a,children:Object(m.jsxs)("div",{className:"modal-container",children:[s,Object(m.jsx)("div",{onClick:t})]})})},b=c(11),h=c(13),f=Object(h.b)({name:"contact",initialState:{id:"",firstName:"",lastName:"",age:"",imageLink:"",modalForm:{}},reducers:{setForm:function(e,t){e[t.payload.field]=t.payload.text},resetForm:function(e,t){e.firstName="",e.lastName="",e.age="",e.imageLink="",e.id=""},setModalForm:function(e,t){e.modalForm=t.payload}}}),x=f.actions,p=x.setForm,O=x.resetForm,g=x.setModalForm,N=f.reducer;var v=function(){var e=Object(b.c)((function(e){return e.contact})),t=Object(b.b)(),c=Object(s.useState)(null),a=Object(r.a)(c,2),n=a[0],o=a[1],i=Object(s.useState)([]),l=Object(r.a)(i,2),d=l[0],h=l[1],f=Object(s.useState)(!1),x=Object(r.a)(f,2),N=x[0],v=x[1];return console.log(e),Object(s.useEffect)((function(){o(null),j()({method:"GET",url:"https://simple-contact-crud.herokuapp.com/contact"}).then((function(t){t.status>=200&&(h(t.data.data),setTimeout((function(){console.log(e.contacts,"sasasas")}),200))})).catch((function(e){}))}),[]),Object(m.jsxs)("div",{className:"st-container",children:[Object(m.jsxs)("div",{className:"row",style:{backgroundColor:"white"},children:[Object(m.jsxs)("div",{className:"col-md-7",style:{height:"420px",overflowY:"auto",padding:"24px"},children:[Object(m.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:Object(m.jsx)("p",{children:"Save New Contact"})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"First Name"}),Object(m.jsx)("input",{value:e.firstName,type:"text",onChange:function(e){t(p({text:e.target.value,field:"firstName"}))},className:"form-control"})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Last Name"}),Object(m.jsx)("input",{value:e.lastName,type:"text",onChange:function(e){t(p({text:e.target.value,field:"lastName"}))},className:"form-control"})]})})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Age"}),Object(m.jsx)("input",{value:e.age,min:"10",onChange:function(e){t(p({text:e.target.value,field:"age"}))},type:"number",className:"form-control",style:{width:"50%"}})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Image Link"}),Object(m.jsx)("input",{value:e.imageLink,type:"text",onChange:function(e){t(p({text:e.target.value,field:"imageLink"}))},placeholder:"Input your image link",className:"form-control"})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{style:{textAlign:"right"},children:[Object(m.jsx)("button",{className:"btn btn-secondary",onClick:function(){t(O())},children:"Reset Form"}),"\xa0",Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){if(o(null),""!==e.firstName&&""!==e.lastName&&""!==e.age&&""!==e.imageLink){var c="https://simple-contact-crud.herokuapp.com/contact";e.id&&(c="https://simple-contact-crud.herokuapp.com/contact/"+e.id);var s={method:e.id?"PUT":"POST",url:c,data:{firstName:e.firstName,lastName:e.lastName,age:e.age,photo:e.imageLink}};j()(s).then((function(e){e.status,t(O())})).catch((function(e){400===e.response.status&&o(e.response.data.message),console.log(e.response,"dsdsdsdsds")}))}},children:"Send"}),Object(m.jsx)("br",{}),n?Object(m.jsx)("span",{style:{color:"red"},children:n}):null]})]}),Object(m.jsx)("div",{className:"col-md-5",style:{height:"420px",overflowY:"auto",backgroundColor:"#133f6f3d",padding:"24px"},children:d.map((function(c){return Object(m.jsxs)("div",{className:"row",style:{justifyContent:"space-between",height:"120px"},children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)("div",{style:{width:60,height:60,borderRadius:60,backgroundColor:"black",overflow:"hidden"},children:Object(m.jsx)("img",{src:c.photo,width:"60"})})}),Object(m.jsx)("div",{className:"col-md-8",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-9",children:[Object(m.jsxs)("span",{onClick:function(){return function(e){v(!0),t(g(e))}(c)},className:"contact-name",children:[c.firstName," ",c.lastName]}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:[c.age," years old"]})]}),Object(m.jsxs)("div",{className:"col-md-3",style:{textAlign:"right",justifyContent:"center"},children:[Object(m.jsx)("i",{onClick:function(){return function(t){o(null);var c={method:"DELETE",url:"https://simple-contact-crud.herokuapp.com/contact/"+t};j()(c).then((function(t){t.status>=200&&(h(t.data.data),setTimeout((function(){console.log(e.contacts,"sasasas")}),200))})).catch((function(e){}))}(c.id)},className:"fa fa-close",style:{color:"red",cursor:"pointer"}}),Object(m.jsx)("br",{}),Object(m.jsx)("i",{onClick:function(){return function(e){t(p({text:e.firstName,field:"firstName"})),t(p({text:e.lastName,field:"lastName"})),t(p({text:e.age,field:"age"})),t(p({text:e.photo,field:"imageLink"})),t(p({text:e.id,field:"id"}))}(c)},className:"fa fa-pencil",style:{color:"#257af8",cursor:"pointer"}})]})]})})]},c.id)}))})]}),Object(m.jsxs)(u,{show:N,children:[Object(m.jsx)("div",{onClick:function(){return v(!1)},className:"st-modal-1"}),Object(m.jsxs)("div",{style:{top:"50%",left:"50%",transform:"translate(-50%,-50%)",backgroundColor:"white",position:"absolute",zIndex:10,width:"300px",height:"450px",textAlign:"center",padding:"12px",justifyContent:"center",alignItems:"center"},children:[Object(m.jsx)("div",{style:{alignSelf:"center",width:150,height:150,borderRadius:150,backgroundColor:"black",overflow:"hidden"},children:Object(m.jsx)("img",{src:e.modalForm.photo,width:"150"})}),Object(m.jsxs)("p",{children:[e.modalForm.firstName," ",e.modalForm.lastName]}),Object(m.jsxs)("p",{children:[e.modalForm.age," years old"]})]})]})]})};var k=function(){return Object(m.jsx)(i.a,{children:Object(m.jsx)(l.c,{children:Object(m.jsxs)(l.a,{exact:!0,path:"/",children:[" ",Object(m.jsx)(v,{})," "]})})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),s(e),a(e),n(e),o(e)}))},C=Object(h.a)({reducer:{contact:N}});o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(b.a,{store:C,children:Object(m.jsx)(k,{})})}),document.getElementById("root")),y()}},[[66,1,2]]]);
//# sourceMappingURL=main.6acab8ca.chunk.js.map