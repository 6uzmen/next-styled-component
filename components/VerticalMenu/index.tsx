import React, { useState } from "react";
import * as S from "./styles";

interface IProps {
  items: {
    label: string;
    link?: string;
    subItems?: { label: string; link: string }[];
  }[];
  handleOpen?: () => void;
}

export default function VerticalMenu({ items, handleOpen }: IProps) {
  return (
    <S.MenuContainer>
      {items.map((item, index) => {
        return <Item key={index} item={item} handleOpen={handleOpen} />;
      })}
    </S.MenuContainer>
  );
}

interface IPropsItem {
  item: {
    label: string;
    link?: string;
    subItems?: { label: string; link: string }[];
  };
  handleOpen?: () => void;
}

export const Item = ({ item, handleOpen }: IPropsItem) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <S.ItemContainer hasChilds={item.subItems !== undefined}>
        <S.ItemLabel href={item?.link} onClick={handleOpen}>
          {item.label}
        </S.ItemLabel>
        {item?.subItems && (
          <S.ArrowIcon
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            src="https://xylo-assets.s3.amazonaws.com/images/svg/icons/arrow-upper-blue.svg"
            alt="Arrow icon"
          />
        )}
      </S.ItemContainer>
      {item.subItems !== undefined && (
        <S.SubItemsWrapper>
          {item.subItems.map((subItem, index) => {
            return (
              <S.SubItemContainer key={subItem.label + index} isOpen={isOpen}>
                <S.SubItemLabel onClick={handleOpen}>
                  {subItem.label}
                </S.SubItemLabel>
              </S.SubItemContainer>
            );
          })}
        </S.SubItemsWrapper>
      )}
    </>
  );
};
