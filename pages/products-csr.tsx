import { ProductDetails } from "@/components/Product";
import { useQuery } from "@tanstack/react-query";

const getProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();
  return data;
}

const ProductsCSRPage = () => {
  const {isLoading, data, error} = useQuery(['products'], getProducts);
 
  if(isLoading) {
    return <div>Loading...</div>
  }

  if(!data || error) {
    return <div>An error has occurred...</div>
  }
    return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((product) => {
        return (
          <li className="shadow-xl border-2" key={product.id}>
            <ProductDetails data={{
              id: product.id,
              title: product.title,
              description: product.description,
              thumbnailUrl: product.image,
              thumbnailAlt: product.title,
              rating: product.rating.rate,
            }} />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsCSRPage;

interface StoreApiResponse {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      {
        rate:  number;
        count: number;
    };
}



