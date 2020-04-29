import React, { Component } from 'react';
import Stocksbutton from '../../components/Stocksbutton/Stocksbutton';
import Modal from '../../components/Modal/Modal';
import MyStocksTable from '../../components/MyStocksTable/MyStocksTable';

class Main extends Component {

    state = {
        id : null,
        stockName : null,
        symbol : null,
        flag : false,
        currentPrice : 0,
        isSelected : false,
        delete_Id : false
        
        
    }

    getCurrentPrice = (id,stockName,symbol,flag,currentPrice) => {
        this.setState({ 
            id : id,
            stockName : stockName,
            symbol : symbol,
            flag : flag,
            currentPrice : currentPrice
        });
    }

    showModal = (event)=>{
        this.setState({
            flag : !this.state.flag,
            isSelected : true
        });
   }

    render() {
        let displayModal = null;

        if(this.state.flag){

                displayModal = (<Modal
                closeModal = {this.showModal}
                currentPrice = {this.state.currentPrice}
                stockName = {this.state.stockName}
                symbol = {this.state.symbol}
                flag = {this.state.flag}
                isClicked = {this.isClicked}
                
                
                />);
        }

        
            
        
        return (
            <div className = "MyStocks">
                <div className = "container">
                    <h1>My Stocks</h1>
                    <div className="Mytable">
                        <table className = "table table-dark">
                            <thead>
                            <tr>
                                <th>Stock symbol</th>
                                <th>Stock name</th>
                                <th>No.of shares</th>
                                <th>Buy price</th>
                                <th>Current price</th>
                                <th>Profit/Loss</th>
                                </tr>
                            </thead>
                            <MyStocksTable isSelected = {this.state.isSelected} />
                            
                        </table>
                    </div>
                    <div className = "AddStocksTitle">
                    <Stocksbutton currentPrice = {this.getCurrentPrice} />
                    </div>
                    
                    <div className="AddStockForm">{displayModal}</div>
                    
                </div>
                
            </div>
        );
    }
}

export default Main;