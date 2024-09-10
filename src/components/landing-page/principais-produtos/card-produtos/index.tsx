import Image from "next/image";
import { Principaisprodutos } from "../../../../../types/home/home";
import Link from "next/link";
type CardProdProps = {
  product: Principaisprodutos;
};
export function CardProd({ product }: CardProdProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="flex items-center  flex-col gap-9 border-2 h-96 bg-white bg-opacity-70 border-black w-60 lg:w-80 ">
        <div className="flex items-center"></div>
        <Image src={product.image} width={200} height={80} alt="capa" />
        <div className="flex items-center">
          <h1 className="text-black text-lg text-center font-bold lg:text-2xl ">
            {product.title}
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <span className="text-black text-lg text-center font-bold lg:text-2xl ">
              {product.price}
            </span>
          </div>
          <h1 className="text-black text-base font-bold text-center lg:text-2xl">
            descriçao:
          </h1>
          <div className="flex items-center m-3">
            <p className="text-black text-xs text-center lg:text-xl  ">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
