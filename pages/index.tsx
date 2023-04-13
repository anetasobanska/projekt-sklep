import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { Main } from '../components/Main';
import { ProductDetails } from '../components/Product';

const DATA = {
  title: 'lorem',
  description: 'A lightweight simple garment for the upper body, usually short-sleeved. A lightweight simple garment for the upper body, usually short-sleeved. A lightweight simple garment for the upper body, usually short-sleeved. A lightweight simple garment for the upper body, usually short-sleeved. A lightweight simple garment for the upper body, usually short-sleeved. A lightweight simple garment for the upper body, usually short-sleeved.',
  thumbnailUrl: 'https://picsum.photos/id/1060/536/354',
  thumbnailAlt: 'Barista nalewajacy kawe do Chemesta.',
  rating: 4.5,
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <ProductDetails data={DATA} />
      </Main>
      <Footer />
    </div>
  )
}
