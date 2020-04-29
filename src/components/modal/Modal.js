import React, { Component } from 'react';
import axios from 'axios';

class Modal extends Component {

    state = {
        stockName : null,
        no_of_shares : 0,
        buy_price : 0,
        date : null

    }


    closeModal = (event)=>{
       this.props.closeModal(event) && this.props.closeModal();

    }

    addStock = (event)=>{
       
        console.log(this.props.currentPrice);
        
        let profitloss = (this.props.currentPrice - this.state.buy_Price) * (this.state.no_Of_Shares);
        let firebase_Data = {

        stockName : this.props.stockName,
        currentPrice : this.props.currentPrice,
        buy_Price : this.state.buy_Price,
        no_Of_Shares : this.state.no_Of_Shares,
        date : this.state.date,
        profitloss : profitloss,
        symbol : this.props.symbol

        }

        axios.post('https://financialtracker-db23c.firebaseio.com/users.json',firebase_Data).then(response =>{
            this.closeModal();
            
        }).catch(error => console.log(error));

        
    }

    handleInput = (event) =>{
        
        let value = event.target.value;
        if(event.target.name === "no_Of_Shares"){
            this.setState({
                no_Of_Shares : value

            });
        }

        else if(event.target.name === "buy_price"){
            this.setState({
                buy_Price : value
            });
        }

        else if(event.target.name === "date"){
            this.setState({
                date : value
            });
        
        }

    }

    render() {
        if(!this.props.flag){
            return null;
        }
        return (

            <div>
                
                <div style={{height: '500px', textAlign: 'center', position: 'fixed', 
                        backgroundColor: '#D3D3D3', zIndex: '500', left: '15%', top: '15%', 
                        boxSizing: 'border-box', width: '70%', borderRadius:'10px'}}>
                            <button type="button" className="close" onClick={this.closeModal}>&times;</button>
                        <h2>Add {this.props.stockName} to My Stocks</h2>  <br/><br/>  
                        <form>
                            <label htmlFor='name'> <strong>Company Name</strong></label> : <strong>{this.props.stockName}</strong><br/><br/>
                            
                            <label htmlFor="name"><strong>No. of Shares</strong></label> : <input id='noShares' type='number' placeholder='No. of Shares'
                                    name='no_Of_Shares'  onChange = {this.handleInput} ></input>
                                <br/><br/>
        
                         <label htmlFor="name"><strong>Buy Price</strong></label> : <input type="number" id='buyPrice' placeholder='Buying Price'
                                    name='buy_price' onChange = {this.handleInput}   ></input>
                                <br/><br/>
                            <label htmlFor="name"><strong>Buy Date</strong></label> : <input type='Date' id='buyDate' name='date' onChange = {this.handleInput}
                                    ></input>
                            <br/><br/>
                            
                        </form>
                       
                        <button type='button' className='btn btn-primary' id='addForm' onClick={this.addStock}>Add</button>
                       <button type="button" className='closeButton' style={{backgroundColor:"red",height:"40px",textAlign:"center",padding:"5px",color:"white",borderRadius:"2px"}} id="closeBtn" onClick={this.closeModal}>Close</button><br/><br/>
                       <div id="errorMsg"></div>
                 </div>
            </div>
        )
    }
}

export default Modal;