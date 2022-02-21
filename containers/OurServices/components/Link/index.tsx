import React from "react";
import * as S from "./styles";

interface IProps {
  href: string;
  label: string;
  ariaLabel?: string;
}

export default function Link({
  href,
  label,
  ariaLabel = "Get to know more about this",
}: IProps) {
  return (
    <S.Container>
      <S.Icon src="assets/images/svg/icons/plus.svg" alt="Plus icon" />
      <S.Label href={href} aria-label={ariaLabel}>
        {label}
      </S.Label>
    </S.Container>
  );
}
