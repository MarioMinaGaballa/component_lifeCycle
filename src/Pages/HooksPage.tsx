import { useEffect, useState } from "react";

const HooksPage = () => {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

  // **LIFE
  (async()=>{
    try {
      const response = await (await fetch('https://dummyjson.com/products',{signal})).json();
      setProducts(response.products)
    } catch (error) {
      console.log(error);
      
    }
  })();


   
    // const fetchProducts = async () => {
    //   try {
    //     const response = await fetch("https://dummyjson.com/products", {signal});
    //     const jsonData = await response.json();
    //     setProducts(jsonData.products);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchProducts();
    //CleanUp >> unMounted cancel Request
    return () => {
      controller.abort()
    };
  
  }, []);

  useEffect(() => {
    console.log("Counter is changed");

    //CleanUp >> unMounted
    return () => {};
  }, [counter]);
  return (
    <>
      <h2>counter {counter}</h2>
      <button onClick={() => setCounter((prev) => prev - 1)}>
        Decrement -
      </button>
      <br />
      <button onClick={() => setCounter((prev) => prev + 1)}>
        incresement +
      </button>
      {products.length ? (
        products.map(({ id, title }: { id: number; title: string }) => (
          <p key={id}>{title}</p>
        ))
      ) : (
        <h3>Loading......</h3>
      )}
    </>
  );
};

export default HooksPage;
