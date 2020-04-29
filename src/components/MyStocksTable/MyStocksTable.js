import React, { Component } from 'react';
import axios from 'axios';

class MyStocksTable extends Component {

  let 
    state = {
        table_data : null,
        deleted : false
    }


    componentDidMount(){
      this.getData();
    }

    
    getData = () => {
        axios.get('https://financialtracker-db23c.firebaseio.com/users.json').then(response =>{
                console.log(response.data);

                this.setState({
                    table_data : response.data
                });
            }); 
    }

    componentDidUpdate(){
      this.getData();
    }


    stopTracking = (event)=>{
      const id = event.target.value;
      axios.delete(`https://financialtracker-db23c.firebaseio.com/users/${id}.json`);
       
        this.setState({
          deleted : !this.state.deleted

        });
     
    }


    render() {
        
    const isSelected = this.props.isSelected;
        let showContent;
        
        console.log(this.state.table_data);
        
        if((this.state.table_data !== null) && (isSelected)){
        const myTableData = Object.entries(this.state.table_data);
         showContent =  myTableData.map((item) =>{

            return(
                <tr key = {item[1].symbol}>

                <td>{item[1].symbol}</td>
                <td>{item[1].stockName}</td>
                <td>{item[1].no_Of_Shares}</td>
                <td>{item[1].buy_Price}</td>
                <td>{item[1].currentPrice}</td>
                <td>{item[1].profitloss}</td>
                <td>
                <button
                  type="button"
                  className="StopTrackingBtn"
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    height: "30px",
                    textAlign: "center",
                    paddingTop: "2px"
                  }}
                  id="stopTrack"
                  value={item[0]}
                  onClick={this.stopTracking}
                >Stop Tracking</button>
              </td>

                </tr>


            )
        })
    }
    else{
        showContent = ( <tr className="text-center">
        <td colSpan="7">
          <strong><center>No Stocks have been selected</center></strong>
        </td>
      </tr>
    );
    }
        return (
            <tbody>{showContent}</tbody> 
                
            
        );
    }
}

export default MyStocksTable;