"use client";
import getApi from "@/server/api/get-secao";
import { useEffect, useState } from "react";
import Card from "@/components/landing-page/valores/cardmvv";
type ApiProps = {
  id: number;
  title: string;
  text: string;
};

export default function Mvv() {
  const [cards, setCards] = useState<ApiProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { identities } = await getApi();
        setCards(identities);
      } catch {
        console.error("Deu erro");
      }
    };
    fetchData();
  });

  return (
    <div className="flex  justify-center flex-col md:flex-row">
      {cards.map((card) => (
        <Card id={card.id} title={card.title} text={card.text} />
      ))}
    </div>
  );
}
