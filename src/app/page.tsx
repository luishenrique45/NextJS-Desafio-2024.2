import Introsec from "../components/landing-page/intro/intro";
import FooTer from "../components/footer/fooTer";
import PriP from "../components/landing-page/principais-produtos";
import Mvv from "@/components/landing-page/valores/mvv";
import NavBar from "@/components/nave";
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
import { EmblaOptionsType } from "embla-carousel";
import getPrincipaisprodutos from "../../actions/home/actions";

export default async function Home() {
  const products =await getPrincipaisprodutos()
  return (
    <div>
      <NavBar />
      <Introsec />
      <Mvv />
      <PriP products={products}/>
      <FooTer />
    </div>
  );
}
