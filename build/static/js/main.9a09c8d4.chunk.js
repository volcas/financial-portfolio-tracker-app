(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(54)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),l=(a(25),a(26),a(8)),s=a(2),i=a(3),u=a(5),m=a(4),p=a(6),f=(a(27),a(28),function(e){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("span",{className:"NavbarTitle"},e.title))}),d=(a(29),a(7)),h=a.n(d),y=a(19);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={myStocks:{},isError:!1},a.shouldComponentUpdate=function(e,t){return Object(y.isEqual)(t,a.state)},a.createRows=function(){var e={};Object.keys(a.props.myStocks).map((function(t){var n=a.props.myStocks[t];return e[n.symbol]=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},n),h.a.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+n.symbol+"&outputsize=compact&apikey=6X6YP8313WMG8Y86").then((function(t){console.log(t);var r=t.data["Time Series (Daily)"],o=new Date,c=0;0===o.getDay()&&(c=2),6===o.getDay()&&(c=1);var l=o.getFullYear(),s=parseInt(o.getMonth())+1,i=parseInt(o.getDate()-c)<10?"0"+parseInt(o.getDate()-c):parseInt(o.getDate()-c),u=l+"-"+s+"-"+i;void 0===r[u.toString()]&&(u=(new Date).getTimezoneOffset()&&1===(new Date).getDay()?l+"-"+s+"-"+(i-3):l+"-"+s+"-"+(i-1));var m=r[u.toString()]["4. close"],p=parseInt([m-n.closingPrice]*n.numberOfShares);e[n.symbol].currentClosingPrice=m,e[n.symbol].calculateProfit=p,a.setState({myStocks:e})})).catch((function(e){console.log(e),a.setState({isError:!0})})),!0}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;Object.keys(this.props.myStocks).length>0&&Object.keys(this.props.myStocks).length!==Object.keys(this.state.myStocks).length&&!1===this.state.isError&&this.createRows();var t=Object.keys(this.state.myStocks).map((function(t){var a=e.state.myStocks[t];return r.a.createElement("tr",{key:a.symbol},r.a.createElement("td",null,a.symbol),r.a.createElement("td",null,a.name),r.a.createElement("td",null,a.numberOfShares),r.a.createElement("td",null,a.closingPrice),r.a.createElement("td",null,a.currentClosingPrice),r.a.createElement("td",null,a.calculateProfit),r.a.createElement("td",null,r.a.createElement("button",{className:"StopTrackingBtn",onClick:function(){return e.props.stopTracking(a.symbol)}},"Stop Tracking")))}));return r.a.createElement("div",{className:"MyStocks"},r.a.createElement("div",{className:"Header"},r.a.createElement("span",{className:"MyStocksTitle"},"My Stocks")),r.a.createElement("div",{className:"Body"},this.state.isError?r.a.createElement("p",null,"There seems to be a server issue, please try again later."):r.a.createElement("table",{id:"MyStocksTable",className:"MyStocksTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Stock symbol"),r.a.createElement("th",null,"Stock name"),r.a.createElement("th",null,"No.of shares"),r.a.createElement("th",null,"Buy price"),r.a.createElement("th",null,"Current price"),r.a.createElement("th",null,"Profit/Loss"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t))))}}]),t}(n.Component),S=(a(49),a(50),a(51),function(e){return console.log(e),r.a.createElement("div",{className:"AddStockButton"},r.a.createElement("button",{className:"StockButton",onClick:function(){return e.clicked(e.stock)}},e.stock.symbol),e.stock.name)}),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={allStocksData:{}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.allStocks.map((function(t){return r.a.createElement(S,{key:t.symbol,stock:t,clicked:function(t){return e.props.addStock(t)}})}));return r.a.createElement("div",{className:"AddStockButtons"},t)}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).newAllStocksHandler=function(e){a.setState({allStocks:e})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"AddStocks"},r.a.createElement("div",{className:"AddStocksTitle"},"Add stocks to my stocks"),this.props.error&&r.a.createElement("p",null,this.props.error),this.props.allStocks&&this.props.allStocks.length>0&&r.a.createElement(g,{addStock:function(t){return e.props.addStock(t)},allStocks:this.props.allStocks,newAllStocks:function(t){console.log(t),e.newAllStocksHandler(t)},newMyStocks:this.props.newMyStocks}))}}]),t}(n.Component),v=(a(52),function(){return r.a.createElement("div",{className:"HorizontalLine"})}),O=(a(53),function(){return r.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)",zIndex:100,position:"fixed",left:0,top:0}})}),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("span",{className:"Close",onClick:this.props.close},"X"),r.a.createElement("div",{style:{height:"350px",textAlign:"center",position:"fixed",backgroundColor:"#fff",zIndex:500,left:"15%",top:"10%",boxSizing:"border-box",width:"70%",overflowY:"scroll"}},r.a.createElement("h2",null,this.props.title),this.props.content))}}]),t}(n.Component);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={myStocks:{},allStocks:{},showModal:!1,selectedStock:{},dateError:!1,dateErrorMsg:null,formComplete:!1,formIncompleteError:!1},a.addStockHandler=function(e){var t={};t.symbol=e.symbol,t.name=e.name,a.setState({showModal:!0,selectedStock:t})},a.modalCloseHandler=function(){a.setState({showModal:!1})},a.addStockToDBHandler=function(){if(0===a.BuyingPrice.current.value.length&&0===a.BuyingDate.current.value.length&&0===a.NoOfShares.current.value.length)a.setState({formComplete:!1,formIncompleteError:!0});else{var e=D({},a.state.selectedStock);e.closingPrice=a.BuyingPrice.current.value,e.date=a.BuyingDate.current.value,e.numberOfShares=a.NoOfShares.current.value,h.a.post("https://finance-portfolio-tracker.firebaseio.com/myStocksValue.json",e).then((function(e){var t=D({},a.state.allStocks),n=[];for(var r in t)t[r].symbol!==a.state.selectedStock.symbol&&n.push(t[r]);var o={};h.a.get("https://finance-portfolio-tracker.firebaseio.com/myStocksValue.json").then((function(e){o=e.data,h.a.put("https://finance-portfolio-tracker.firebaseio.com/allStocksValue.json",n).then((function(e){a.setState({selectedStock:{},showModal:!1,allStocks:n,myStocks:o})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}},a.dateHandler=function(e){0===new Date(e.target.value).getDay()||6===new Date(e.target.value).getDay()?a.setState({dateError:!0,dateErrorMsg:"You cannot select a weekend date"}):new Date(e.target.value).getTime()>(new Date).getTime()?a.setState({dateError:!0,dateErrorMsg:"You cannot select a future date"}):a.setState({dateError:!1,dateErrorMsg:null})},a.stopTrackingHandler=function(e){var t=a.state.myStocks,n={},r={};for(var o in t)t[o].symbol!==e?n[o]=t[o]:(r.name=t[o].name,r.symbol=t[o].symbol);var c=a.state.allStocks;c.push(r),h.a.put("https://finance-portfolio-tracker.firebaseio.com/allStocksValue.json",c).then((function(e){return e})).catch((function(e){console.log(e)})),h.a.put("https://finance-portfolio-tracker.firebaseio.com/myStocksValue.json",n).then((function(e){return e})).catch((function(e){console.log(e)})),a.setState({allStocks:c,myStocks:n})},a.NoOfShares=r.a.createRef(),a.BuyingPrice=r.a.createRef(),a.BuyingDate=r.a.createRef(),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://finance-portfolio-tracker.firebaseio.com/allStocksValue.json").then((function(t){var a=t.data;h.a.get("https://finance-portfolio-tracker.firebaseio.com/myStocksValue.json").then((function(t){e.setState({myStocks:t.data,allStocks:a})}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=new Date,t=this.state.showModal?r.a.createElement(r.a.Fragment,null,this.state.formIncompleteError?r.a.createElement("p",null,"Kindly complete the form before adding this stock for tracking."):null,r.a.createElement("div",{className:"AddStockForm"},r.a.createElement("div",{className:"FormRow"},r.a.createElement("span",{className:"Label"},"Company Name:"),r.a.createElement("span",null,this.state.selectedStock.name)),r.a.createElement("div",{className:"FormRow"},r.a.createElement("span",{className:"Label"},"No. of Shares:"),r.a.createElement("input",{type:"number",min:"1",placeholder:"No. of shares",ref:this.NoOfShares})),r.a.createElement("div",{className:"FormRow"},r.a.createElement("span",{className:"Label"},"Buy Price:")," ",r.a.createElement("input",{type:"number",min:"1",placeholder:"Buying Price",ref:this.BuyingPrice})),r.a.createElement("div",{className:"FormRow"},r.a.createElement("span",{className:"Label"},"Buy Date:"),this.state.dateError?r.a.createElement("span",null,this.state.dateErrorMsg):null,r.a.createElement("input",{type:"date",onChange:this.dateHandler,ref:this.BuyingDate}))),r.a.createElement("button",{className:"AddButton",disabled:this.state.formComplete,onClick:this.addStockToDBHandler},"Add")):null,a=0===e.getDay()||7===e.getDay()?r.a.createElement("p",null,"*Since today is a weekend, the current price refers to the last updated working day price."):null;return r.a.createElement("div",null,this.state.showModal?r.a.createElement(j,{title:"Add "+this.state.selectedStock.name+" to My Stocks",content:t,close:this.modalCloseHandler}):null,a,r.a.createElement(f,{title:"Finance Portfolio Tracker"}),r.a.createElement(b,{myStocks:this.state.myStocks,stopTracking:this.stopTrackingHandler}),r.a.createElement(v,null),Object.keys(this.state.myStocks).length<6?r.a.createElement(E,{allStocks:this.state.allStocks,addStock:this.addStockHandler}):r.a.createElement(E,{error:"You can add only 5 stocks for tracking!"}))}}]),t}(n.Component);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.9a09c8d4.chunk.js.map