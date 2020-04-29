import React, { Component } from "react";
import axios from "axios";
import "./Stocksbutton.css";

class Stocksbutton extends Component {
  state = {
    stock: null,
    count: 0,
    showStock: null,
    currentPrice: null,
    flag : true
  };

  componentDidMount() {
    axios
      .get("https://burger-app-8f654.firebaseio.com/companyStock.json")
      .then((Response) => {
        
        
        const myCount = Object.keys(Response.data).length;
        this.setState({
          stock: Response.data,
          count: myCount,
        });
      });
  }

  myClickHandler = (event) => {
    const symbol = event.target.value;
    const stockName = event.target.name;
    const id = event.target.id;
    const flag = true;
    

    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=WMF1579VOEHD7K0V`
      )
      .then((res) => {
        let dailyData = res.data["Time Series (Daily)"];
        let latestData = Object.values(dailyData)[0];
        const closingPrice = latestData["4. close"];
       this.props.currentPrice(id,stockName,symbol,flag,closingPrice);
       
        
        
      });
  };

  render() {
    let showStock = null;
    if (this.state.stock !== null) {
      let mystock = Object.entries(this.state.stock);
      showStock = mystock.map((item) => {
        return (
          <li key={item[0]}>
            <button
              type="button"
              className="StockButton"
              name={item[1].name}
              value={item[1].symbol}
              id={item[0]}
              onClick={this.myClickHandler}
            >
              {" "}
              {item[1].symbol}{" "}
            </button>{" "}
            <span className="mySpan">{item[1].name}</span>
          </li>
        );
      });
    }
          
     else {
      console.log("There are no stocks available");
    }
    return (
      <div className="container">
        <h1>Add </h1>
        <ul className="buttonList">{showStock}</ul>
      </div>
    );
  }
}

export default Stocksbutton;
