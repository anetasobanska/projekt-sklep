import { ProductListItem } from "@/components/Product";
import { InferGetStaticPropsType } from "next";

const ProductsPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((product) => {
        return (
          <li className="shadow-xl border-2" key={product.id}>
            <ProductListItem data={{
              id: product.id,
              title: product.title,
              thumbnailUrl: product.image,
              thumbnailAlt: product.title,
            }} />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsPage;

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

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



