import { CardData } from "@/types/type";
import cardsData from "../public/data/cards.json"

type Props = {
  setSelectedCard: (card: CardData | null) => void;
};

export default function AquacultureNav({ setSelectedCard }: Props) {
  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    console.log("Selected card:", card);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 grid gap-4 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cardsData.categories.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card)}
            className="px-6 py-4 rounded-full text-white font-medium text-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: card.backgroundColor }}
          >
            {card.title}
          </button>
        ))}
      </div>
      <button
        onClick={() => handleCardClick(cardsData.social)}
        className="w-full px-6 py-4 rounded-full text-white font-medium text-center hover:opacity-90 transition-opacity mt-2"
        style={{ backgroundColor: cardsData.social.backgroundColor }}
      >
        {cardsData.social.title}
      </button>
    </div>
  );
}
