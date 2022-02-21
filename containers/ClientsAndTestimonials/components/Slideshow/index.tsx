import { forwardRef, useImperativeHandle, useState } from "react";
import * as S from "./styles";
import { motion } from "framer-motion";
import { wrap } from "popmotion";
import { TypeTestimonial } from "../..";

interface IProps {
  items: TypeTestimonial[];
  ref: any;
}

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

export const Slideshow = forwardRef(({ items }: IProps, ref) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const itemIndex = wrap(0, items.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useImperativeHandle(ref, () => ({
    doSwipe(x: number) {
      paginate(x);
    },
  }));
  return (
    <S.TestimonialContainer className="d-flex flex-wrap overflow-hidden px-0 px-lg-4">
      <motion.div
        className="col-12"
        style={{ cursor: "grab" }}
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_: any, { offset, velocity }: any) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      >
        <div>
          <S.TestimonialTitle>{items[itemIndex].title}</S.TestimonialTitle>
          <S.TestimonialParagraph>
            {items[itemIndex].paragraph}
          </S.TestimonialParagraph>
          <S.ClientContainer>
            <S.ClientAvatar
              src={items[itemIndex].picture}
              alt="Client Avatar"
            />
            <S.ClientInformationContainer>
              <S.ClientName>{items[itemIndex].name}</S.ClientName>
              <S.ClientPosition>{items[itemIndex].position}</S.ClientPosition>
            </S.ClientInformationContainer>
            <S.CompanyLogo src={items[itemIndex].logo} alt="Company logo" />
          </S.ClientContainer>
        </div>
      </motion.div>
      <S.DotContainer>
        {items.map((item, index) => (
          <S.Dot key={item.name} active={index === itemIndex} />
        ))}
      </S.DotContainer>
    </S.TestimonialContainer>
  );
});

export default Slideshow;
