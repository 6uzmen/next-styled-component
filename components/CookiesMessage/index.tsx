import React, { useEffect, useState } from "react";
import * as S from "./styles";

export default function Index() {
  const [hasCookies, setHasCookies] = useState<boolean>(true);
  const handleAccept = () => {
    localStorage.setItem("hasCookies", JSON.stringify(true));
    setHasCookies(true);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      let storageData = localStorage.getItem("hasCookies");
      if (storageData === undefined || storageData === null) {
        localStorage.setItem("hasCookies", JSON.stringify(false));
        setHasCookies(false);
      } else {
        setHasCookies(JSON.parse(storageData));
      }
    }
  }, []);
  return (
    <>
      {!hasCookies && (
        <S.CookiesContainer>
          <S.MessageContainer>
            <S.CookiesMessage>
              By using this website, you agree to our use of cookies. We use
              cookies to provide you with a great experience and to help our
              website run effectively.
            </S.CookiesMessage>
          </S.MessageContainer>
          <S.CookiesButton onClick={handleAccept} className="py-2 px-4">
            Accept
          </S.CookiesButton>
        </S.CookiesContainer>
      )}
    </>
  );
}