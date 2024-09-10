import { CardProd } from "../landing-page/principais-produtos/card-produtos";
import getPrincipaisprodutos from "../../../actions/home/actions";
export default async function CaixaP() {
  const products = await getPrincipaisprodutos()
  return (
    <div className="flex flex-col items-center  lg:flex-row">
      
      {products.map((product, index) => (
            <CardProd key={index} product={product} />
          ))}
      
      
    </div>
  );
}
