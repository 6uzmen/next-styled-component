import React from "react";
import * as S from "./styles";

export default function Index() {
  return (
    <S.FooterContainer id="footer">
      <S.FooterWrapper className="container flex-wrap">
        <S.SocialMediaWrapper className="col-12 col-md-6 justify-content-center justify-content-md-start">
          <S.SocialMediaContainer>
            <S.SocialMediaIconWrapper href="https://www.facebook.com/WeAreZirconTech">
              <S.SocialMediaIcon
                src="/assets/images/svg/icons/Facebook.svg"
                alt="social media facebook"
              />
            </S.SocialMediaIconWrapper>
            <S.SocialMediaIconWrapper href="https://twitter.com/Zircon_Tech">
              <S.SocialMediaIcon
                src="/assets/images/svg/icons/Twitter.svg"
                alt="social media twitter"
              />
            </S.SocialMediaIconWrapper>
            <S.SocialMediaIconWrapper href="https://www.instagram.com/zircon.tech/">
              <S.SocialMediaIcon
                src="/assets/images/svg/icons/Instagram.svg"
                alt="social media instagram"
              />
            </S.SocialMediaIconWrapper>
            <S.SocialMediaIconWrapper href="https://www.linkedin.com/company/zircontech/">
              <S.SocialMediaIcon
                src="/assets/images/svg/icons/Linkedin.svg"
                alt="social media linkedin"
              />
            </S.SocialMediaIconWrapper>
          </S.SocialMediaContainer>
        </S.SocialMediaWrapper>
        <S.Copyright className="col-12 col-md-6 justify-content-center justify-content-md-end py-4">
          ©2022 ZIRCONTech. All rights reserved
        </S.Copyright>
      </S.FooterWrapper>
    </S.FooterContainer>
  );
}
