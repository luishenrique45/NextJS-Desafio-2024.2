import Loguser from "@/components/loginpage/loguser";
import NavBar from "@/components/nave";
export default function Home() {
  return (
    <body>
      <NavBar />
      <div className=" flex  justify-center items-center h-screen bg-cinza-principal md:fundologin ">
        <Loguser />
      </div>
    </body>
  );
}
