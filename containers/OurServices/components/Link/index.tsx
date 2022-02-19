import React from "react";
import * as S from "./styles";

interface IProps {
  href: string;
  label: string;
}

export default function Link({ href, label }: IProps) {
  return (
    <S.Container>
      <S.Icon src="/assets/images/svg/icons/plus.svg" alt="Plus icon" />
      <S.Label href={href}>{label}</S.Label>
    </S.Container>
  );
}