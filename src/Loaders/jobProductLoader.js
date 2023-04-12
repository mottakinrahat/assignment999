import { getShoppingCart } from "../utilities/fakedb";

const jobProductsLoader=async()=>{
  const loadedProducts = await fetch('/job.json');
  const products=await loadedProducts.json();
  console.log(products);

  const storedJob=getShoppingCart()
  const savedJob=[];
  for(const id in storedJob){
     const addedJobProducts=products.find(pd=>pd.id===parseInt(id))
     if(addedJobProducts){
        const quantity=storedJob[id].quantity;
        addedJobProducts.quantity=quantity;

        savedJob.push(addedJobProducts);
     }
  }
  return savedJob;


}

export default jobProductsLoader;