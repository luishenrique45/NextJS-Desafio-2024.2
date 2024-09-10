import Image from "next/image";
export default function Loguser() {
  return (
    <div className="flex bg-white  justify-center rounded-2xl  h-80 lg: flex-row ">
      <div className="lg:flex flex-col justify-center items-center bg-black rounded-l-2xl gap-2">
        <div className="hidden lg:flex flex-col p-4">
          <h1 className="text-white font-bold text-4xl">Bem Vindo!</h1>
          <div>
            <h1 className="text-white text-center font-bold text-3xl">
              a Cold.G
            </h1>
          </div>
        </div>
        <div className="hidden lg:flex rounded-full bg-white  justify-center">
          <Image src={"/logo/file.png"} width={100} height={60} alt="logo" />
        </div>
      </div>
      <div className="bg-white rounded-2xl p-3 flex flex-col items-center border-2 border-black gap-3 lg:rounded-l-none  ">
        <div className="p-2">
          <h1 className="text-2xl text-black font-bold">Login</h1>
        </div>
        <div>
          <Image src={"/user.png"} width={80} height={50} alt="use" />
        </div>

        <form action="" className="flex flex-col  items-center gap-2 ">
          <input
            type="email"
            name=""
            id=""
            placeholder=" E-mail"
            className="border-black border-2 w-4/5 rounded-3xl "
          />
          <input
            type="password"
            name=""
            id=""
            placeholder=" Senha"
            className="rounded-3xl  border-black border-2 w-4/5 "
          />
          <button className="bg-black text-sm text-white rounded-3xl w-4/5 p-1 ">
            login
          </button>
        </form>
      </div>
    </div>
  );
}
