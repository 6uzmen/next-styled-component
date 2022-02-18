import React from "react";
import { animated, to, useSprings } from "react-spring";
import { useDrag } from "react-use-gesture";
import { CardWrap, CardTitle, CardParagraph } from "./styles";
import { arrayMoveImmutable } from "array-move";
import { useMediaQuery } from "react-responsive";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { CompanyLogo, Link } from "../../styles";
import { CaseStudieType } from "../..";
import Image from "next/image"

interface IProps {
  items: CaseStudieType[];
  setCurrentCase: any;
}

export const CardTest = ({ items, setCurrentCase }: IProps) => {
  const cards = ["#c4e4fc", " #b3deff", "#9ed5ff", "#8acbfd",];
  const config = { tension: 400, friction: 20 };
  const CARD_COUNT = items.length;
  const CARD_OFFSET = 20;
  // @ts-nocheck
  const setScale = (count: number) => 1 - count / 20;
  // @ts-ignore
  const setter = (order, curIndex, y, down) => (index: number) => {
    index = order.indexOf(index);
    const isBelow = y < -100;

    return down && index === curIndex
      ? {
        scale: isBelow ? setScale(CARD_COUNT) : 1,
        y,
        zIndex: isBelow ? 1 : CARD_COUNT + 1,
        config,
        immediate: (key: string) => key === "y" || key === "zIndex",
      }
      : {
        scale: setScale(index),
        y: index * CARD_OFFSET,
        // Add 1 here so we don’t need to use 0 above.
        zIndex: CARD_COUNT - index + 1,
        immediate: (key: string) => key === "zIndex",
      };
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const ref = React.useRef(null);
  const cardOrder = React.useRef(items.map((_, index) => index));

  const [springs, setSprings] = useSprings(
    CARD_COUNT,
    // @ts-ignore
    setter(cardOrder.current)
  );

  // Set the drag hook and define component movement based on gesture data.
  const bind = useDrag((event) => {
    const {
      args: [origlIndex],
      down,
      movement: [, y],
    } = event;
    const curIndex = cardOrder.current.indexOf(origlIndex);
    const newOrder = arrayMoveImmutable(cardOrder.current, 0, CARD_COUNT);
    setCurrentCase(items[cardOrder.current[1]]);
    // @ts-ignore
    isMobile && disableBodyScroll(ref.current, { reserveScrollBarGap: true })

    if (!down) {
      cardOrder.current = newOrder;
      // @ts-ignore
      isMobile && enableBodyScroll(ref.current)
    }

    setSprings(setter(cardOrder.current, curIndex, y, down));
  });

  return (
    <CardWrap ref={ref}>
      {springs.map(({ scale, y, zIndex }, index) => {
        return (
          <animated.div
            {...bind(index)}
            style={{
              backgroundColor: to(
                [zIndex],
                (zIndex) => cards[(zIndex - 2)]
              ),
              borderRadius: "3% / 5%",
              padding: '25px 20px 10px 25px',
              cursor: "grab",
              left: 0,
              width: "100%",
              height: "240px",
              position: "absolute",
              touchAction: "none",
              right: 0,
              transform: to(
                [y, scale],
                (y, scale) => `translateY(${y}px) scale(${scale})`
              ),
              transformOrigin: "top center",
              zIndex,
            }}
            key={index}
          >
            <CompanyLogo background={items[index]?.iconBackground} src={items[index].src} alt="company-logo" />
            <CardTitle>
              {items[index].title}
            </CardTitle>
            <CardParagraph>
              {items[index].description}
            </CardParagraph>
            <Link className="mt-1" href={items[index].link}>
              <Image src="https://xylo-assets.s3.amazonaws.com/images/svg/icons/plus.svg" alt="Plus icon" width={14} height={14} />
              <span className="ps-2">See more</span>
            </Link>
          </animated.div>
        );
      })}
    </CardWrap>
  );
};
