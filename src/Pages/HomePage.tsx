import { Component } from "react";


interface IProps {}
interface IState {
  counter: number;
  products: [];
}
class HomePage extends Component<IProps, IState> {
  
  render() {

    return (
      <div className="border-red-500 border-solid border-4">
        <h2>Home page</h2>
    
      </div>
    );
  }
}
export default HomePage;
