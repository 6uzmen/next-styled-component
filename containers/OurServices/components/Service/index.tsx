import React from "react";
import Link from "../Link";
import * as S from "./styles";

interface IProps {
  icon: string;
  title: string;
  subtitle: string;
  link: string;
  className?: string;
}

export default function Service({
  icon,
  title,
  subtitle,
  link,
  className,
}: IProps) {
  return (
    <S.ServiceContainer className={`${className}`}>
      <S.IconContainer>
        <S.ServiceIcon src={icon} alt="Service Icon" />
      </S.IconContainer>
      <S.ServiceTextContainer>
        <S.ServiceTitle>{title}</S.ServiceTitle>
        <S.ServiceSubtitle className="col-12 col-lg-11 col-xl-10">
          {subtitle}
        </S.ServiceSubtitle>
        <Link href={link} label='Learn More' />
      </S.ServiceTextContainer>
    </S.ServiceContainer>
  );
}