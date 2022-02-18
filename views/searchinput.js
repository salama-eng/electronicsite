import React from "react";
import ReactDom from "react-dom";
class searchinput extends React.Component{
state ={entry :''}
onFormSubmit =(event)=>
{
    event.preventDefault()
    this.props.onFormSubmit(this.state.entry)
}
render(){
    <div className="ui segment">
        <form onSubmit={this.onFormSubmit}className='ui form'>
            <div className="field">
                <div className="ui massive icon input">
                    <input type="text"
                    placeholder="search..."
                    onChange={(event) => this.setState({entry:event.targer.value})}
                    value={this.state.entry}
                    />
                </div>
            </div>
        </form>
    


    </div>
}
} 
export default searchinput;