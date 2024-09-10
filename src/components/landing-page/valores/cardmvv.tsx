type Card = {
  id: number;
  title: string;
  text: string;
};

export default function Card({ id, title, text }: Card) {
  return (
    <div>
      <div
        className={
          "bg-gray-600  text-white flex items-center gap-7 p-5 flex-col text-center h-96 rounded-md m-m-10p "
        }
      >
        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl ">{title}</h1>
        <p className="text-sm lg:text-base">{text}</p>
      </div>
    </div>
  );
}
