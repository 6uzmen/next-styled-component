import React from "react";
import * as S from "./styles";

interface IProps {
  title: string;
  subtitle: string;
}

export default function Item({ title, subtitle }: IProps) {
  return (
    <S.ItemContainer>
      <S.CheckIcon src="/assets/images/webp/check.webp" alt="Check icon" />
      <div>
        <S.ItemTitle>{title}</S.ItemTitle>
        <S.ItemSubtitle>{subtitle}</S.ItemSubtitle>
      </div>
    </S.ItemContainer>
  );
}