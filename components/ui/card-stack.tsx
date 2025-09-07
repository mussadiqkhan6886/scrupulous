"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

let interval: any;

type Card = {
  id: number;
  img: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 4000);
  };

  return (
    <div className="relative  h-full w-full">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-transparent h-full w-full rounded-3xl p-3 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05]"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <Image className="w-full h-full rounded" src={card.img} alt="image" width={500} height={500} />
          </motion.div>
        );
      })}
    </div>
  );
};
