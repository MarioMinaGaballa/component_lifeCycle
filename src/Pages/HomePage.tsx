import  { Component } from 'react'

interface IProps{}
interface IState{
  counter:number;
  products:[]
}
 class HomePage extends Component <IProps,IState> {
  constructor (props:IProps){
    super(props)
 
 this.state={
  counter:0,
  products:[]
 }
  console.log();
  
  }
  render() {
    return (
      <div className='border-red-500 border-solid border-4'>
        <h2>Home page</h2>
        <h4>counter {this.state.counter}</h4>
      </div>
    )
  }
}
export default HomePage