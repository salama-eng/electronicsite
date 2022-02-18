import searchinput from "./searchinput";
const React=require("React");
class App extends React.Component{
    onsearchsubmit =(entrey)=>
    {
        console.log(entrey);
    }
    render(){
        return (
            <div className='a'>
           <searchinput onsearchsubmit={this.onsearchsubmit}/>

            </div>

        )
    }
}


export default app;