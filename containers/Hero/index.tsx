import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { ButtonSecondary } from "../../components/Button/styles";
import * as S from "./styles";

export default function Hero() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [mobile, setMobile] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(1);


  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height / 0.5 + 1;

    setScrollPosition(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobile) { setMobile(true) } else { setMobile(false) }
  }, [isMobile]);

  const vidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    vidRef.current?.play();
    return () => {
      vidRef.current?.pause();
    };
  }, []);

  return (
    <div className="position-relative">
      <S.BackgroundVideoContainer scale={scrollPosition}>
        <S.BackgroundVideo
          ref={vidRef}
          autoPlay={true}
          playsInline={true}
          preload="metadata"
          loop={true}
          muted={true}
          controls={false}
          src="assets/videos/zircon-hero.webm"
        />
      </S.BackgroundVideoContainer>
      <div className="position-relative">
        <S.LandingContainer>
          <S.TitleContainer>
            <S.Title className="px-2">
              Software Development partner
              <br />
              <span className="fw-light">
                for the technologies driving the future
              </span>
            </S.Title>
            <ButtonSecondary
              className="mt-4 px-4"
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}
            >
              I Want To Know More
            </ButtonSecondary>
          </S.TitleContainer>
          <S.AwardsContainer>
            {!mobile ? (
              <>
                <S.AwardImage
                  src="https://xylo-assets.s3.amazonaws.com/images/svg/award-1.svg"
                  className="mx-5 mx-md-4"
                  alt="Award Image"
                />
                <S.AwardImage
                  src="https://xylo-assets.s3.amazonaws.com/images/svg/award-2.svg"
                  className="mx-5 mx-md-4"
                  alt="Award Image"
                />
              </>
            ) : (
              <S.AwardImage
                src="https://xylo-assets.s3.amazonaws.com/images/svg/award-2.svg"
                alt="Award Image"
              />
            )}
          </S.AwardsContainer>
        </S.LandingContainer>
      </div>
    </div>
  );
}
