(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/home.966e5d31.svg"},21:function(e,t,a){e.exports=a.p+"static/media/trash.99d58fca.svg"},25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),c=a.n(r),l=(a(30),a(17)),i=a(1),s=a(2),u=a(4),m=a(3),p=a(9),d=a(10),h=a(21),f=a.n(h),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(){return{padding:"17px 14px",borderBottom:"1px solid black",color:e.props.todo.completed?"#121212":"green",display:"flex",alignItems:"center",justifyContent:"space-between",textAlign:"left"}},e.checkStyle={height:"24px",width:"24px"},e.delStyle={height:"24px",width:"24px",border:"none",borderRadius:"4px",color:"#fafafa",cursor:"pointer"},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.task;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("button",{type:"checkbox",style:this.checkStyle,onClick:this.props.markComplete.bind(this,t)}," x "),o.a.createElement("h3",{style:this.flexStyle},"  ",a,"  "),o.a.createElement("img",{src:f.a,alt:"",style:this.delStyle,onClick:this.props.delTodo.bind(this,t)}))}}]),a}(o.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(b,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo,delAll:e.props.delAll})}))}}]),a}(o.a.Component),y=a(31),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={time:new Date},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({time:new Date})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",{className:"clockStyle"},y(this.state.time).format("dddd, MMMM DD")))}}]),a}(o.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("p",{className:"activeTask"},"3, Active Task")}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"first"},o.a.createElement("div",{className:"clock"},o.a.createElement(k,null)),o.a.createElement(j,null)),o.a.createElement("div",{className:"second"},o.a.createElement(p.b,{className:"taskLink one",to:"/Incomplete"},"Incomplete Task"),o.a.createElement(p.b,{className:"taskLink two",to:"/Complete"}," Completed Task")))}}]),a}(n.Component),O=a(24),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onSubmit=function(t){t.preventDefault(),e.props.AddTodo(e.state.title),e.setState({title:""})},e.onChange=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:this.formStyle},o.a.createElement("div",{className:"input_together"},o.a.createElement("input",{type:"text",name:"title",className:"inputStyle",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",className:"submmitButton",value:"Add Task"})))}}]),a}(o.a.Component),C=a(13),x=a.n(C),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"incomplete"},o.a.createElement(p.b,{to:"/"}," ",o.a.createElement("img",{src:x.a,alt:"",height:"24px",width:"24px"})),o.a.createElement("h2",null," Incomplete task "))}}]),a}(n.Component),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"complete"},o.a.createElement(p.b,{to:"/"}," ",o.a.createElement("img",{src:x.a,alt:"",height:"24px",width:"24px"})," "),o.a.createElement("h2",null," Complete task "))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.task;return o.a.createElement("div",{className:"last"},o.a.createElement("h2",{className:"options"}," Your Options"),o.a.createElement("button",{className:"eraseStyle",onClick:this.props.delAll.bind(this,t)}," Erase all ")," ",a)}}]),a}(o.a.Component),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("h1",null,"404")}}]),a}(o.a.Component),T=(a(38),a(42)),I=(a(39),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){e.setState({todos:Object(l.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.delAll=function(t){e.setState({todos:[]})},e.AddTodo=function(t){var a={id:Object(T.a)(),task:t,confirm:!1};e.setState({todos:[].concat(Object(l.a)(e.state.todos),[a])})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement(d.c,null,o.a.createElement("div",{className:"containerStyle"},o.a.createElement(d.a,{exact:!0,path:"/",component:E}),o.a.createElement(d.a,{path:"/Complete",component:w}),o.a.createElement(d.a,{path:"/Incomplete",component:S}),o.a.createElement("div",null,o.a.createElement(d.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{AddTodo:e.AddTodo}),o.a.createElement(N,{delAll:e.delAll}),o.a.createElement(v,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}))),o.a.createElement(d.a,{component:A})))}}]),a}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.03ee0c93.chunk.js.map