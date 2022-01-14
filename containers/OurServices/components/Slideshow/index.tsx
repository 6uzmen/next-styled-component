import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Service from "../../components/Service";
import { ServiceType } from "../..";
import * as S from "./styles";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface IProps {
  items: ServiceType[];
}

export default function Slideshow({ items }: IProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const itemIndex = wrap(0, items.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div
      className="d-flex col-12 position-relative mt-4"
      style={{ height: "360px", width: "100" }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <div
            className="position-absolute mt-2"
            style={{
              minHeight: "360px",
              minWidth: "80vw",
            }}
          >
            <Service
              key={items[itemIndex].name + itemIndex}
              title={items[itemIndex].name}
              subtitle={items[itemIndex].description}
              icon={items[itemIndex].icon}
              link={items[itemIndex].link}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <S.DotContainer>
        {items.map((item, index) => (
          <S.Dot key={item.name} active={index === itemIndex} />
        ))}
      </S.DotContainer>
    </div>
  );
}
