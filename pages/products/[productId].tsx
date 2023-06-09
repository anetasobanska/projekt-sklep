import { ProductDetails } from "@/components/Product";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Link from 'next/link';

const ProductIdPage = ({ data, }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if(!data) {
        return <div>oops something went wrong here</div>
    }
    const router = useRouter();
    return <div>
        <Link href='/products'>Back to Products List</Link>
        <ProductDetails data={{
                id: data.id,
                title: data.title,
                thumbnailUrl: data.image,
                thumbnailAlt: data.title,
                description: data.description,
                rating: data.rating.rate,
            }} />
    </div>
};

export default ProductIdPage;

export const getStaticPaths = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/`);
    const data: StoreApiResponse[] = await res.json();
    return {
        paths: data.map(product => {
            return {
                params: {
                    productId: product.id.toString(),
                },
            };
        }),
        // [
        //     {
        //         params: {
        //             productId: '1',
        //         },
        //     },
        // ],
        fallback: false,
    };
};

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.productId) {
    return { props: {}, notFound: true };
  }
  const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
  const data: StoreApiResponse | null = await res.json();

  return {
    props: {
      data,
    },
  };
}

// export const getStaticProps = async ({params,}: InferGetStaticPaths<typeof getStaticPaths>) => {
//     if(!params?.productId){
//         return {
//             props: {},
//             notFound: true,
//         }
//     }
//   const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
//   const data: StoreApiResponse | null = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

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
