
import React from "react";
import './App.css';
import 'tachyons';
// var arry=['divin','bhart']
class Addnew extends React.Component{
  constructor(props){
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleremove = this.handleremove.bind(this);
    
    this.state={
    list: [],
    value: '',
   
     
    }
  }
 

   handleChange=(ev)=>{
    this.setState({value: ev.target.value});
    this.setState(value=>{
      console.log(value)
      return value;
    });
    
  }
  handleremove=(index)=>{
    const copylist=Object.assign([],this.state.list)
    copylist.splice(index,1);
    this.setState({
      list : copylist
    })  
  }
  handleSubmit(event) {
    event.preventDefault();
    
    console.log(this.setState.list);
    this.setState({
      list: this.state.list.concat(this.state.value),
      value:'',
    })
    this.setState((state)=>{
      console.log(state.list);
      return state;
      
    })
  }
render(){
    const items=this.state.list.map((item,index)=>{
    console.log(item);
    
   return(<li className="items">{item}<i onClick={this.handleremove.bind(this,index)} className="fa fa-trash fa-2x" ></i><br></br></li>
       
   );
   
   });
  
  return(
  <div className="maindiv">
    


     <h3 className="tc"> Write any Word to Add Array</h3>
     
     
       <form onSubmit={this.handleSubmit} className="tc ma4">
        <label>
        
          <input type="text" className="tc" value={this.state.value} onChange={this.handleChange} />
        </label><br></br>
        <input type="submit" value="Submit" className="ma2" />
        
      </form>
      
   {
     <ol className="">{items}</ol>
   }
</div>
  )}
}
export default Addnew;