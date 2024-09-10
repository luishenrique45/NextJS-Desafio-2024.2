import { useState, useEffect } from "react";
import NavBar from "@/components/nave";
import FooTer from "@/components/footer/fooTer";
import CaixaP from "@/components/pag-produtos/caixadeprodutos";
import Search from "@/components/pesquisa";

export default async function Home() {
  //const query = searchParams?.query || "";
  //const currentPage = Number(searchParams?.page) || 1;

  //const [products, setProducts] = useState([]);
  //const [count, setCount] = useState(0);
  //const {products,count} = await fetchFilterProducts (query,currentPage||4)
  //const fetchFilterProducts = async (query: string, page: number) => {
  //try {
  //const response = await fetch(`/api/products?query=${query}&page=${page}`);
  //const data = await response.json();
  //setProducts(data.products);
  //setCount(data.count);
  //} catch (error) {
  //console.error("Erro ao buscar os produtos filtrados:", error);
  //}
  //};

  //useEffect(() => {
  //fetchFilterProducts(query, currentPage);
  //}, [query, currentPage]);
  return (
    <body>
      <NavBar />
      <div className="bg-cinza-principal flex  flex-col gap-6 justify-center items-center md:fundop lg:h-screen">
        <div>
          <Search />
        </div>

        <CaixaP/>
      </div>
      <FooTer />
    </body>
  );
}
