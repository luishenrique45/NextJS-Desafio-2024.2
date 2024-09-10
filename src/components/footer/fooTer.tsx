import Image from "next/image";

export default function FooTer() {
  return (
    <div className=" bottom-0 w-full flex items-center justify-center gap-4 bg-black md:gap-12 ">
      <div className="bg-white rounded-full ">
        <Image
          src={"/logo/file.png"}
          width={50}
          height={50}
          alt="jogo "
          className="md:w-full"
        />
      </div>
      <div>
        <p className="text-white text-xs font-bold md:text-base lg:text-3xl">
          Pre-vendas exclusivas so aqui na Cod.D
        </p>
      </div>
      <div className="flex flex-col gap-4 m-2 ">
        <a href="">
          {" "}
          <Image
            src={"/footer-image/insta.png"}
            width={30}
            height={50}
            alt="jogo "
            className="md:w-full"
          />{" "}
        </a>
        <a href="">
          {" "}
          <Image
            src={"/footer-image/facebook.png"}
            width={30}
            height={50}
            alt="jogo "
            className="md:w-full"
          />{" "}
        </a>
        <a href="">
          {" "}
          <Image
            src={"/footer-image/telefone.png"}
            width={30}
            height={50}
            alt="jogo "
            className="md:w-full"
          />{" "}
        </a>
      </div>
    </div>
  );
}
