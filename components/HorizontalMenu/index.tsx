import React from "react";
import * as S from "./styles";

export type HorizontalMenuItem = {
  link: string;
  label: string;
  id: string;
};

interface IProps {
  items: HorizontalMenuItem[];
  active: string;
  className?: string;
}

export default function HorizontalMenu({ items, active, className = "" }: IProps) {
  return (
    <S.MenuContainer className={className + `d-flex flex-col flex-md-row`}>
      {items?.map((item) => {
        return (
          <S.MenuItem active={item.id === active} href={item.link} key={item.label}>
            <S.MenuText>{item.label}</S.MenuText>
          </S.MenuItem>
        );
      })}
    </S.MenuContainer>
  );
}
