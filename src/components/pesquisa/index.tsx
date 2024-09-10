"use client";
import { Product } from "@prisma/client";
import { Search as Searchicon } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";



export default function Search() {
 // const searchParams = useSearchParams();
  //const router = useRouter();

  //const [searchTerm, setSearchTerm] = useState<string>(
    //searchParams.get("query") || ""
  //);

  //const fetchFilterProducts = async (query: string, currentPage: number) => {
    //try {
      //const response = await fetch(`/api/products?query=${query}&page=${currentPage}`);
      //const data = await response.json();
      //return data;
    //} catch (error) {
      //console.error("Error fetching filtered products:", error);
  //    return { products: [], count: 0 };
   // }
 // };

  //const handleSearch = (query: string) => {
    //if (!query) {
     // return;
   // }
   // const params = new URLSearchParams();
   // params.set("query", query);
    //router.replace(`/search/?${params.toString()}`);
 // };

  //const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   // e.preventDefault();
    //handleSearch(searchTerm);
 // };

  //useEffect(() => {
   // setSearchTerm(searchParams.get("query") || "");
 // }, [searchParams]);

  return (
    <form
      id="pesquisa"
    //  onSubmit={handleSubmit}
      className="flex basis-full"
      autoComplete="off"
    >
      <div className="flex w-full flex-col items-center gap-6 my-10">
        <div className="relative flex w-full items-center">
          <Searchicon className="w-5 h-5 absolute text-black right-5" />
          <input
            id="search"
            name="search"
            type="text"
            className="w-full rounded-xl px-6 text-black bg-white border-black border-2 hover:bg-zinc-800 caret-white transition-all duration-300"
            placeholder="Pesquisar"
           // value={searchTerm}
          //  onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}


