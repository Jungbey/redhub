(this.webpackJsonpreadhub_c=this.webpackJsonpreadhub_c||[]).push([[0],{135:function(e,t,a){e.exports=a(232)},141:function(e,t,a){},225:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),s=a.n(o),l=(a(95),a(30)),i=a(31),c=a(33),u=a(32),m=a(34),d=a(15),h=a.n(d),f=a(41),p=(a(141),a(42)),g=a.n(p),v=a(236),E=a(235),b=a(129),w=a(70),O=a.n(w),C=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navigation"},r.a.createElement("span",null,this.props.RootName))}}]),t}(r.a.Component),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleInfiniteOnLoad=function(){var e=a.state.data;if(a.setState({loading:!0}),e.length>60)return v.a.warning("\u6c42\u5b81\u522b\u518d\u7ffb\u5566 Q^Q"),void a.setState({hasMore:!1,loading:!1});a.getHotTopic3()},a.state={data:[],lastCursor:"",loading:!1,hasMore:!0},a.getHotTopic(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getHotTopic",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("function getHotTopic start"),console.log(this.state.lastCursor),e.next=4,g()({url:"/topic",method:"get",params:{pageSize:5,lastCursor:this.state.lastCursor}});case 4:t=e.sent,a=t.data.data[4].order,console.log(t.data.data),this.setState({data:t.data.data,lastCursor:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHotTopic3",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("function3 start"),console.log(this.state.lastCursor),e.next=4,g()({url:"/topic",method:"get",params:{pageSize:5,lastCursor:this.state.lastCursor}});case 4:t=e.sent,a=t.data.data[4].order,console.log(t.data.data),n=(n=this.state.data).concat(t.data.data),this.setState({data:n,lastCursor:a,loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"infomation-container"},r.a.createElement("div",{className:"demo-infinite-container"},r.a.createElement(O.a,{initialLoad:!1,pageStart:0,loadMore:this.handleInfiniteOnLoad,hasMore:!this.state.loading&&this.state.hasMore,useWindow:!1},r.a.createElement(E.a,{dataSource:this.state.data,renderItem:function(e){console.log(e),console.log(e.newsArray);var t=e.newsArray.map((function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.url},e.title," ",r.a.createElement("br",null),r.a.createElement("span",{className:"siteName"},e.siteName)))}));return r.a.createElement("div",{className:"infomation"},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.summary),r.a.createElement("ul",null,t),r.a.createElement("hr",null))}},this.state.loading&&this.state.hasMore&&r.a.createElement("div",{className:"demo-loading-container"},r.a.createElement(b.a,null))))))}}]),t}(r.a.Component),j=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleInfiniteOnLoad=function(){var e=a.state.data;if(a.setState({loading:!0}),e.length>60)return v.a.warning("\u6c42\u5b81\u522b\u518d\u7ffb\u5566 Q^Q"),void a.setState({hasMore:!1,loading:!1});a.getTechnologyNews3()};var n=Date.parse(new Date);return console.log(n),a.state={data:[],lastCursor:n,loading:!1,hasMore:!0},a.getTechnologyNews(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getTechnologyNews",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("function getHotTopic start"),console.log(this.state.lastCursor),e.next=4,g()({url:"/news",method:"get",params:{pageSize:10,lastCursor:this.state.lastCursor}});case 4:t=e.sent,console.log(t),a=this.state.lastCursor,n=a-36e5,this.setState({data:t.data.data,lastCursor:n});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getTechnologyNews3",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("function3 start"),console.log(this.state.lastCursor),e.next=4,g()({url:"/news",method:"get",params:{pageSize:10,lastCursor:this.state.lastCursor}});case 4:t=e.sent,a=this.state.lastCursor,n=a-36e5,console.log(t.data.data),r=(r=this.state.data).concat(t.data.data),this.setState({data:r,lastCursor:n,loading:!1});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"infomation-container"},r.a.createElement("div",{className:"demo-infinite-container"},r.a.createElement(O.a,{initialLoad:!1,pageStart:0,loadMore:this.handleInfiniteOnLoad,hasMore:!this.state.loading&&this.state.hasMore,useWindow:!1},r.a.createElement(E.a,{dataSource:this.state.data,renderItem:function(e){return r.a.createElement("div",{className:"infomation"},r.a.createElement("a",{href:e.url}," ",r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.summary,r.a.createElement("span",{className:"technewsSiteName"},e.siteName))),r.a.createElement("hr",null))}},this.state.loading&&this.state.hasMore&&r.a.createElement("div",{className:"demo-loading-container"},r.a.createElement(b.a,null))))))}}]),t}(r.a.Component),y=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleInfiniteOnLoad=function(){var e=a.state.data;if(a.setState({loading:!0}),e.length>60)return v.a.warning("\u6c42\u5b81\u522b\u518d\u7ffb\u5566 Q^Q"),void a.setState({hasMore:!1,loading:!1});a.getDeveloperInformation3()};var n=Date.parse(new Date);return console.log(n),a.state={data:[],lastCursor:n,loading:!1,hasMore:!0},a.getDeveloperInformation(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getDeveloperInformation",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("function getDeveloperInformation start"),console.log(this.state.lastCursor),e.next=4,g()({url:"/technews",method:"get",params:{pageSize:10,lastCursor:this.state.lastCursor}});case 4:t=e.sent,console.log(t),a=this.state.lastCursor,n=a-36e5,this.setState({data:t.data.data,lastCursor:n});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDeveloperInformation3",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("function3 start"),console.log(this.state.lastCursor),e.next=4,g()({url:"/technews",method:"get",params:{pageSize:10,lastCursor:this.state.lastCursor}});case 4:t=e.sent,a=this.state.lastCursor,n=a-36e5,console.log(t.data.data),r=(r=this.state.data).concat(t.data.data),this.setState({data:r,lastCursor:n,loading:!1});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"infomation-container"},r.a.createElement("div",{className:"demo-infinite-container"},r.a.createElement(O.a,{initialLoad:!1,pageStart:0,loadMore:this.handleInfiniteOnLoad,hasMore:!this.state.loading&&this.state.hasMore,useWindow:!1},r.a.createElement(E.a,{dataSource:this.state.data,renderItem:function(e){return r.a.createElement("div",{className:"infomation"},r.a.createElement("a",{href:e.url}," ",r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.summary,r.a.createElement("span",{className:"technewsSiteName"},e.siteName))),r.a.createElement("hr",null))}},this.state.loading&&this.state.hasMore&&r.a.createElement("div",{className:"demo-loading-container"},r.a.createElement(b.a,null))))))}}]),t}(r.a.Component),S=(a(225),a(90)),k=a(29),M=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navigationBarContainer"},r.a.createElement("div",{className:"navianavigationContainer"},r.a.createElement(S.a,null,r.a.createElement("span",null,r.a.createElement("a",{href:"/"},r.a.createElement(C,{RootName:"\u70ed\u95e8\u8bdd\u9898"})),r.a.createElement("a",{href:"/technologyNews"},r.a.createElement(C,{RootName:"\u79d1\u6280\u52a8\u6001"})),r.a.createElement("a",{href:"/developerInformation"},r.a.createElement(C,{RootName:"\u5f00\u53d1\u8005\u8d44\u8baf"}))),r.a.createElement("span",null,r.a.createElement(C,{RootName:"\u767b\u5f55"})))),r.a.createElement("hr",null))}}]),t}(r.a.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"infomationTable"},r.a.createElement("div",{className:"box"}),r.a.createElement(S.a,null,r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/"},r.a.createElement(N,null)),r.a.createElement(k.a,{path:"/technologyNews"},r.a.createElement(j,null)),r.a.createElement(k.a,{path:"/developerInformation"},r.a.createElement(y,null)))),r.a.createElement("hr",null))}}]),t}(r.a.Component);var x=function(){return r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(228),a(231);s.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.22097927.chunk.js.map