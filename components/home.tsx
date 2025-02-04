"use client";

import { CardData } from "@/types/type";
import { useState } from "react";
import AquacultureNav from "./aquaculture-nav";
import Companies from "./companies";

export default function AquacultureHome() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  return (
    <div className="h-[100vh]">
      <AquacultureNav setSelectedCard={setSelectedCard} />
      <Companies selectedCard={selectedCard} />
    </div>
  );
}
