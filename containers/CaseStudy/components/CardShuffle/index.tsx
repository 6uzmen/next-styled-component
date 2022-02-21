import React from "react";
import { motion } from "framer-motion";
import { arrayMoveImmutable } from "array-move";
import styled from "styled-components";
import { CaseStudieType } from "../..";
import { Link } from "../../styles";

const CARD_COLORS = ["#8acbfd", "#9ed5ff", " #b3deff", "#c4e4fc"];
const CARD_OFFSET = -20;
const SCALE_FACTOR = 0.06;

interface IProps {
  items: CaseStudieType[];
}

export const CardShuffle = ({ items }: IProps) => {
  const [cards, setCards] = React.useState(items);
  const moveToEnd = (from: number) => {
    setCards(arrayMoveImmutable(cards, from, cards.length - 1));
  };

  const CardWrapStyle = styled.ul`
    position: relative;
    width: 100%;
    font-family: Roboto;
    margin: 0;
    transform: translateX(-35px);
  `;

  const CompanyLogo = styled.img`
    position: absolute;
    transform: translate(-30%, -30%);
    top: 0;
    left: 0;
    height: 46px;
    width: 46px;
    border-radius: 50%;
    overflow: hidden;
    background-color: black;
    padding: 5px;
  `;

  return (
    <CardWrapStyle>
      {cards.map((card, index) => {
        const canDrag = index === 0;
        return (
          <motion.li
            key={card.title}
            style={{
              position: "absolute",
              padding: "20px 40px 20px 30px",
              width: "100%",
              minHeight: "220px",
              borderRadius: "8px",
              transformOrigin: "top center",
              listStyle: "none",
              backgroundColor: CARD_COLORS[index],
              cursor: canDrag ? "grab" : "auto",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
            drag={canDrag ? "y" : false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={0.5}
            onDragEnd={() => moveToEnd(index)}
          >
            <CompanyLogo src={card.src} alt="company-logo" />
            {card.description}
            <Link className="mt-2" aria-label="Get to know more about this">
              <img src="assets/images/svg/icons/plus.svg" alt="Plus icon" />
              See More
            </Link>
          </motion.li>
        );
      })}
    </CardWrapStyle>
  );
};
