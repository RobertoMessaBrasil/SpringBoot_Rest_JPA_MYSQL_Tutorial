(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(21),c=n.n(l),i=(n(28),n(5)),o=n(3),s=n(1),u=n.n(s),m=n(2),p=n(10),d=n(8),f=n(11),h=n(13),b=n(12);function v(e){return E.apply(this,arguments)}function E(){return(E=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/contacts").then((function(e){return e.json()})).then((function(e){t.state.rowList=e})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w="Contact Manager 1.0",k={title:w,rowList:{label1:"New",label2:"Contacts",msg1:"No results"}};var x=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),a=t.call(this,e),Object(d.a)(a).state={rowList:[]},a}return Object(f.a)(n,[{key:"render",value:function(){return function(e){var t=e.state;return r.a.createElement("div",null,r.a.createElement("h2",null,k.title),r.a.createElement("p",null,r.a.createElement(i.b,{to:"/Create"},k.rowList.label1)),r.a.createElement("fieldset",null,r.a.createElement("legend",null,k.rowList.label2),0===t.rowList.length&&r.a.createElement("p",null,k.rowList.msg1),t.rowList.length>0&&t.rowList.map((function(e){return r.a.createElement("p",{key:e.id},r.a.createElement(i.b,{to:"/Display/"+e.id},e.name))}))))}(this)}},{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(t=this).state,a={state:n},e.next=5,y(a);case 5:t.setState(a.state);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(a.Component);function j(e){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/contacts/"+t.state.id).then((function(e){return e.json()})).then((function(e){t.state.row=e})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return C.apply(this,arguments)}function C(){return(C=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H={title:w,row:{label1:"Home",label2:"Edit",label3:"Delete",label4:"Contact",label5:"Name",label6:"Description"}};var S=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),a=t.call(this,e),Object(d.a)(a).state={id:e.match.params.id,row:{name:"",description:""}},a}return Object(f.a)(n,[{key:"render",value:function(){return function(e){var t=e.state,n=t.row;return r.a.createElement("div",null,r.a.createElement("h2",null,H.title),r.a.createElement("p",null,r.a.createElement(i.b,{to:"/"},H.row.label1),"\xa0",r.a.createElement(i.b,{to:"/Edit/"+t.id},H.row.label2),"\xa0",r.a.createElement(i.b,{to:"/Delete/"+t.id},H.row.label3)),r.a.createElement("fieldset",null,r.a.createElement("legend",null,H.row.label4),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"right"}},H.row.label5),r.a.createElement("td",null,n.name)),r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"right"}},H.row.label6),r.a.createElement("td",null,n.description))))))}(this)}},{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(t=this).state,a={state:n},e.next=5,D(a);case 5:t.setState(a);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(a.Component);function M(e){return F.apply(this,arguments)}function F(){return(F=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/contacts/"+t.state.id).then((function(e){return e.json()})).then((function(e){t.state.row=e})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return N.apply(this,arguments)}function N(){return(N=Object(m.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,a=n.row,e.next=4,fetch("/contacts/"+a.id,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:a.id,name:a.name,description:a.description})}).then((function(e){t.state.ok=!0})).catch((function(e){console.log(e),t.state.ok=!1}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return I.apply(this,arguments)}function I(){return(I=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return R.apply(this,arguments)}function R(){return(R=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.state.row.name){e.next=4;break}return t.state.ok=!1,e.abrupt("return");case 4:return e.next=6,A(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J={title:w,editForm:{label1:"Home",label2:"Cancel",label3:"Contact",label4:"Name",label5:"Description",label6:"Save"},invalidDataMsg:{msg1:"Name must be filled",label1:"Close"},confirmDialog:{msg1:"Confirm delete?",label1:"Yes",label2:"No"}};var T=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;Object(p.a)(this,n),a=t.call(this,e);var r=Object(d.a)(a);return r.state={id:e.match.params.id,isRedirect:!1,row:{name:"",description:""}},r.changeHandler=r.changeHandler.bind(r),r.submitHandler=r.submitHandler.bind(r),r.closeinvalidDataMsg=r.closeinvalidDataMsg.bind(r),a}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=e.state;return!0===t.isRedirect?r.a.createElement(o.a,{to:"/Display/"+t.id}):t.isInvalidContactData?function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,J.title),J.invalidDataMsg.msg1,r.a.createElement("button",{onClick:e.closeinvalidDataMsg},J.invalidDataMsg.label1))}(e):function(e){var t=e.state,n=t.row;return r.a.createElement("div",null,r.a.createElement("h2",null,J.title),r.a.createElement("p",null,r.a.createElement(i.b,{to:"/"},J.editForm.label1),"\xa0",r.a.createElement(i.b,{to:"/Display/"+t.id},J.label2)),r.a.createElement("fieldset",null,r.a.createElement("legend",null,J.editForm.label3),r.a.createElement("form",{onSubmit:e.submitHandler},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"right"}},J.editForm.label4),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"name",onChange:e.changeHandler,value:n.name}))),r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"right"}},J.editForm.label5),r.a.createElement("td",null,r.a.createElement("textarea",{style:{width:"100%"},name:"description",onChange:e.changeHandler,value:n.description}))),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2",style:{textAlign:"right"}},r.a.createElement("button",null,J.editForm.label6))))))))}(e)}},{key:"changeHandler",value:function(e){var t=this.state.row;t[e.target.name]=e.target.value,this.setState({row:t})}},{key:"submitHandler",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=(n=this).state,r={state:a},e.next=6,P(r);case 6:if(!r.state.ok){e.next=9;break}return n.setState({isRedirect:!0}),e.abrupt("return");case 9:n.setState({isInvalidContactData:!0});case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"closeinvalidDataMsg",value:function(){this.setState({isInvalidContactData:!1})}},{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(t=this).state,a={state:n},e.next=5,L(a);case 5:t.setState(a.state);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(a.Component);function B(e){return W.apply(this,arguments)}function W(){return(W=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,e.next=3,fetch("/contacts",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:n.row.name,description:n.row.description})}).then((function(e){t.state.ok=!0})).catch((function(e){t.state.ok=!1,console.log(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){return U.apply(this,arguments)}function U(){return(U=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(n=t.state).row.name){e.next=4;break}return n.ok=!1,e.abrupt("return");case 4:return e.next=6,B(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $={title:w,createForm:{label1:"Home",label2:"Cancel",label3:"Contact",label4:"Name",label5:"Description",label6:"Save"},invalidDataMsg:{msg1:"Name must be filled",label1:"Close"}};var q=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;Object(p.a)(this,n),a=t.call(this,e);var r=Object(d.a)(a);return r.state={row:{name:"",description:""},isRedirect:!1,isInvalidContactData:!1},r.changeHandler=r.changeHandler.bind(r),r.submitHandler=r.submitHandler.bind(r),r.closeinvalidDataMsg=r.closeinvalidDataMsg.bind(r),a}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=e.state;return t.isRedirect?r.a.createElement(o.a,{to:"/"}):t.isInvalidContactData?function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,$.title),$.invalidDataMsg.msg1,r.a.createElement("button",{onClick:e.closeinvalidDataMsg},$.invalidDataMsg.label1))}(e):function(e){var t=e.state.row;return r.a.createElement("div",null,r.a.createElement("h2",null,$.title),r.a.createElement("p",null,r.a.createElement(i.b,{to:"/"},$.createForm.label1),"\xa0",r.a.createElement(i.b,{to:"/"},$.createForm.label2)),r.a.createElement("fieldset",null,r.a.createElement("legend",null,$.createForm.label3),r.a.createElement("form",{onSubmit:e.submitHandler},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"right"}},$.createForm.label4),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"name",onChange:e.changeHandler,value:t.name}))),r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"right"}},$.createForm.label5),r.a.createElement("td",null,r.a.createElement("textarea",{style:{width:"100%"},name:"description",onChange:e.changeHandler,value:t.description}))),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2",style:{textAlign:"right"}},r.a.createElement("input",{type:"submit",value:$.createForm.label6}))))))))}(e)}},{key:"changeHandler",value:function(e){var t=this.state.row;t[e.target.name]=e.target.value,this.setState({row:t})}},{key:"submitHandler",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=(n=this).state,r={state:a},e.next=6,Y(r);case 6:n.setState(r.state),a.ok?n.setState({isRedirect:!0}):n.setState({isInvalidContactData:!0});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"closeinvalidDataMsg",value:function(){this.setState({isInvalidContactData:!1})}}]),n}(a.Component);function z(e){return G.apply(this,arguments)}function G(){return(G=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{ok:!0});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V={title:w,frontPage:{label1:"Yes",label2:"No",msg1:"Confirm Delete?"}};var X=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;Object(p.a)(this,n),a=t.call(this,e);var r=Object(d.a)(a);return r.state={id:e.match.params.id,option:""},r.yesHandler=r.yesHandler.bind(r),r.noHandler=r.noHandler.bind(r),a}return Object(f.a)(n,[{key:"render",value:function(){var e=this.state;return"y"===e.option?r.a.createElement(o.a,{to:"/"}):"n"===e.option?r.a.createElement(o.a,{to:"/Display/"+e.id}):function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,V.title),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,V.frontPage.msg1)),r.a.createElement("tr",null,r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement("button",{onClick:e.yesHandler},V.frontPage.label1),r.a.createElement("button",{onClick:e.noHandler},V.frontPage.label2))))))}(this)}},{key:"yesHandler",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.next=3,K();case 3:t.setState({option:"y"});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"noHandler",value:function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({option:"n"});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(a.Component);var Z=function(){return r.a.createElement(i.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:x}),r.a.createElement(o.b,{path:"/Display/:id",component:S}),r.a.createElement(o.b,{path:"/Edit/:id",component:T}),r.a.createElement(o.b,{path:"/Create",component:q}),r.a.createElement(o.b,{path:"/Delete/:id",component:X})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.c1cae2e8.chunk.js.map