import { AdmtaB } from "@/components/admpage/admtab";
import FooTer from "@/components/footer/fooTer";
import NavBar from "@/components/nave";
export default function home() {
  return (
    <body>
      <NavBar/>
      <div className="flex flex-col gap-10 bg-azul-principal items-center justify-center h-screen w-screen">
        <div>
          <button className="w-auto h-8 pl-4 pr-4 text-white bg-black rounded-full">
            Criar
          </button>
        </div>
        <AdmtaB />
      </div>
      <FooTer/>
    </body>
  );
}
