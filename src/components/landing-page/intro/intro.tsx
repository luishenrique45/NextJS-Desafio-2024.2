import Image from "next/image";
export default function Introsec() {
  return (
    <div className="bg-azul-principal flex flex-col items-center justify-center">
      <div className="flex justify-center ">
        <p className="text-white text-2xl font-bold md:text-3xl lg:text-5xl 2xl:text-6xl p-10 ">
          Conheça a Cod.G
        </p>
      </div>
       <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-8">
            <div className=" md: m-4">
            <Image src={"/image.png"} width={1000} height={500} alt="jogo " className="max-h-[200px] max-w-[250px] md:max-h-[200px] md:max-w-[300px] lg:max-h-[400px] lg:max-w-[400px] xl:max-h-[300px] xl:max-w-[400px] 2xl:max-h-[500px] 2xl:max-w-[400px] " />
            </div>
         
       
        <div className="   2xl:w-2/3 ">
          <p className="text-white p-12 text-sm lg:text-xl mb-10  2xl:text-2xl ">
            
            Bem-vindo ao Cod.G, o seu destino definitivo para jogos de todos os
            gêneros e plataformas! Estamos entusiasmados em recebê-lo em nossa
            comunidade de entusiastas e gamers. Aqui, você encontrará uma
            seleção cuidadosamente curada dos melhores títulos, desde os
            lançamentos mais recentes até os clássicos atemporais.Navegue por
            nossas categorias, descubra ofertas exclusivas e aproveite uma
            experiência de compra intuitiva e segura. Agradecemos por escolher a
            Cod.G e desejamos que sua jornada no mundo dos games seja incrível e
            divertida. Explore, jogue e divirta-se!
          </p>
        </div>
      </div>
    </div>
  );
}
