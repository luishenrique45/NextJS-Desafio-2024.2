import { Principaisprodutos} from "../../../../types/home/home";
import { CardProd } from "./card-produtos";
import Link from "next/link";

const links = [{ href: "/produtos", label: "ver mais" }];

type PrincipaisprodutosProps = {
  products: Principaisprodutos[];
}

export default function PriP({ products }: PrincipaisprodutosProps) {
  return (
    <div className=" flex items-center flex-col gap-6">
      <div className="flex items-center flex-col gap-10 ">
        <div className="text-black text-2xl font-bold p-6 lg:text-6xl ">
          <h1>Pricipais Produtos:</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          {products.map((product, index) => (
            <CardProd key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="pb-10">
        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            <span className="text-black font-bold p-6 lg:text-2xl">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
