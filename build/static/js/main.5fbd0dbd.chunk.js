(this["webpackJsonpfinancial-portfolio-tracker-app"]=this["webpackJsonpfinancial-portfolio-tracker-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(50)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),l=(a(23),a(24),a(7)),s=a(2),i=a(3),u=a(4),m=a(5),d=(a(25),a(6)),p=a.n(d),f=(a(43),function(e){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("span",{className:"NavbarTitle"},e.title))}),h=(a(44),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={newcurrentprice:null,profit:null},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.symbol,a=this.props.date,n=this.props.buyprice,r=this.props.numberOfShares;p.a.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".concat(t,"&outputsize=full&apikey=").concat("0XCP84NVEHMH0GIX")).then((function(t){var o=t.data["Time Series (Daily)"][a]["4. close"],c=(o-n)*r;c=+c.toFixed(2),e.setState({newcurrentprice:o,profit:c})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,this.state.newcurrentprice),r.a.createElement("td",null,this.state.profit))}}]),a}(n.Component)),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={myStocks:{},isError:!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.myStocks).map((function(t){var a=e.props.myStocks[t];return r.a.createElement("tr",{key:a.symbol},r.a.createElement("td",null,a.symbol),r.a.createElement("td",null,a.name),r.a.createElement("td",null,a.numberOfShares),r.a.createElement("td",null,a.closingPrice),r.a.createElement(h,{symbol:a.symbol,date:a.date,buyprice:a.closingPrice,numberOfShares:a.numberOfShares}),r.a.createElement("td",null,r.a.createElement("button",{className:"StopTrackingbtn",onClick:function(){return e.props.stopTracking(a.symbol)}},"Stop Tracking")))}));return r.a.createElement("div",{className:"MyStocks"},r.a.createElement("div",{className:"Header"},r.a.createElement("span",{className:"MyStocksTitle"},"My Stocks")),r.a.createElement("div",{className:"body"},this.state.isError?r.a.createElement("p",null,"There seems to be a server issue, please try agian later"):r.a.createElement("table",{id:"MyStocksTable",className:"MyStocksTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Stock symbol"),r.a.createElement("th",null,"Stock name"),r.a.createElement("th",null,"No.of shares"),r.a.createElement("th",null,"Buy price"),r.a.createElement("th",null,"Current price"),r.a.createElement("th",null,"Profit/Loss"),r.a.createElement("th",null,"Stop Tracking"))),r.a.createElement("tbody",null,t))))}}]),a}(n.Component),y=(a(45),function(e){return r.a.createElement("div",{className:"HorizontalLine"},r.a.createElement("hr",{className:"hrline"}))}),E=(a(46),a(47),a(48),function(e){return r.a.createElement("div",{className:"AddStockButton"},r.a.createElement("button",{className:"StockButton",onClick:function(){return e.clicked(e.stock)}},e.stock.symbol),r.a.createElement("span",{className:"stockname"},e.stock.name))}),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.allStocks.map((function(t){return t?r.a.createElement(E,{key:t.symbol,stock:t,clicked:function(t){return e.props.addStock(t)}}):null}));return r.a.createElement("div",{className:"AddStockButtons"},t)}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"AddStocks"},r.a.createElement("div",{className:"AddStocksTitle"},"Add Stocks to My Stocks"),this.props.error&&r.a.createElement("p",null,this.props.error),this.props.allStocks&&this.props.allStocks.length>0&&r.a.createElement(S,{addStock:function(t){return e.props.addStock(t)},allStocks:this.props.allStocks}))}}]),a}(n.Component),v=(a(49),function(){return r.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)",zIndex:100,position:"fixed",left:0,top:0}})}),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"modalbody"},r.a.createElement("button",{className:"closebutton",onClick:function(){return e.props.close(e.props.modalCloseHandler)}},"X"),r.a.createElement("h3",null,this.props.title),this.props.content))}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={myStocks:{},allStocks:{},showModal:!1,selectedStock:{},dateError:!1,dateErrorMsg:null,formComplete:!1,formIncompleteError:!1},n.addStockHandler=function(e){var t={};t.symbol=e.symbol,t.name=e.name,n.setState({showModel:!0,selectedStock:t})},n.modalCloseHandler=function(){n.setState({showModel:!1})},n.addStockToDBHandler=function(){if(0===n.BuyingPrice.current.value.length||0===n.BuyingDate.current.value.length||0===n.NoOfShares.current.value.length)n.setState({formComplete:!1,formIncompleteError:!0});else{var e=Object(l.a)({},n.state.selectedStock);e.closingPrice=n.BuyingPrice.current.value,e.numberOfShares=n.NoOfShares.current.value,e.date=n.BuyingDate.current.value,p.a.post("https://financial-portfolio-trac-178fd.firebaseio.com/myStocks.json",e).then((function(e){var t=Object(l.a)({},n.state.allStocks),a=[];for(var r in t)t[r].symbol!==n.state.selectedStock.symbol&&a.push(t[r]);var o={};p.a.get("https://financial-portfolio-trac-178fd.firebaseio.com/myStocks.json").then((function(e){o=e.data,p.a.put("https://financial-portfolio-trac-178fd.firebaseio.com/allStocks.json",a).then((function(e){n.setState({selectedStock:{},showModel:!1,allStocks:a,myStocks:o})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}},n.dateHandler=function(e){0===new Date(e.target.value).getDay()||6===new Date(e.target.value).getDay()?n.setState({dateError:!0,dateErrorMsg:"you cannot select a weekend date"}):new Date(e.target.value).getTime()>(new Date).getTime()?n.setState({dateError:!0,dateErrorMsg:"you cannot select a future date"}):n.setState({dateError:!1,dateErrorMsg:null})},n.stopTrackingHandler=function(e){var t=n.state.myStocks,a={},r={};for(var o in t)t[o].symbol!==e?a[o]=t[o]:(r.name=t[o].name,r.symbol=t[o].symbol);var c=n.state.allStocks;c.push(r),p.a.put("https://financial-portfolio-trac-178fd.firebaseio.com/myStocks.json",a).then((function(e){p.a.put("https://financial-portfolio-trac-178fd.firebaseio.com/allStocks.json",c).then((function(e){return e})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})),n.setState({allStocks:c,myStocks:a})},n.NoOfShares=r.a.createRef(),n.BuyingPrice=r.a.createRef(),n.BuyingDate=r.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://financial-portfolio-trac-178fd.firebaseio.com/allStocks.json").then((function(t){var a=t.data;p.a.get("https://financial-portfolio-trac-178fd.firebaseio.com/myStocks.json").then((function(t){e.setState({myStocks:t.data,allStocks:a})}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.showModel?r.a.createElement(r.a.Fragment,null,this.state.formIncompleteError?r.a.createElement("p",{style:{color:"red"}},"Kindly complete the form before adding this stock for tracking"):null,r.a.createElement("div",{className:"AddStockForm"},r.a.createElement("div",{className:"FormInput"},r.a.createElement("span",{className:"Lable"},"Company Name:"),r.a.createElement("span",{className:"cname"},this.state.selectedStock.name)),r.a.createElement("div",{className:"FormInput"},r.a.createElement("span",{className:"Lable"},"No. of Shares:"),r.a.createElement("input",{id:"noShares",type:"number",min:"1",placeholder:"No of Shares",ref:this.NoOfShares})),r.a.createElement("div",{className:"FormInput"},r.a.createElement("span",{className:"Lable"},"Buy Price:"),r.a.createElement("input",{id:"buyPrice",type:"number",min:"1",placeholder:"buying Price",ref:this.BuyingPrice})),r.a.createElement("div",{className:"FormInput"},r.a.createElement("span",{className:"Lable"},"Buy Date:"),r.a.createElement("input",{id:"buyDate",type:"date",onChange:this.dateHandler,ref:this.BuyingDate})),this.state.dateError?r.a.createElement("span",{style:{color:"red"}},this.state.dateErrorMsg):null),r.a.createElement("button",{className:"AddButton",disabled:this.state.formComplete,onClick:this.addStockToDBHandler},"Add")):null;return r.a.createElement("div",null,this.state.showModel?r.a.createElement(g,{title:"Add ".concat(this.state.selectedStock.name," to My Stocks"),content:e,close:this.modalCloseHandler}):null,r.a.createElement(f,{title:"Finance Portfolio Tracker"}),r.a.createElement(k,{myStocks:this.state.myStocks,stopTracking:this.stopTrackingHandler}),r.a.createElement(y,null),Object.keys(this.state.myStocks).length<5?r.a.createElement(b,{allStocks:this.state.allStocks,addStock:this.addStockHandler}):r.a.createElement(b,{error:"You can add only 5 stocks for tracking!"}))}}]),a}(n.Component);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.5fbd0dbd.chunk.js.map