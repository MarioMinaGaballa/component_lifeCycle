import { Component } from 'react'
import { constrctorStyle, didMountingStyle, didUpdatingStyle, unMountingStyle } from '../sytles';


interface IProps {}
interface IState {
  counter: number;
  products: [];
}
 class ProductsPage extends Component<IProps, IState> {
    constructor(props: IProps) {
      super(props);
  
      this.state = {
        counter: 0,
        products: [],
      };
      console.log("%cMounting - constructor - #1", constrctorStyle);
    }
    
  // FETCH DATA FROM API
  componentDidMount(){
    console.log("%cDidMount - componantDidMount - #3 - API",didMountingStyle);
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data=>{
      this.setState({products:data.products})
    });
  }
  componentDidUpdate() {
    console.log("%cDidUpdate - componantDidUpdate - AFter re-render",didUpdatingStyle);
    
  }
  
componentWillUnmount(){
  console.log("%cDidUnmount - componentWillUnmount - AFter re-render",unMountingStyle);
}


  render() {
    return (
      <div className='border-2 border-red-800'>
        ProductsPage
      {
             this.state.products.map(({id,title}:{id:number;title:string})=>(
              <h3 key={id}>{title}</h3>
              ))}
      </div>
    )
  }
}
export default ProductsPage 