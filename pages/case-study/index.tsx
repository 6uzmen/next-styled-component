import React from "react";
import Head from "../../components/Head";
import HorizontalMenu from "../../components/HorizontalMenu";
import Navbar from "../../components/Navbar";
import * as S from "./styles";
import { MenuItems } from "./menuItems";
import { ButtonPrimary } from "../../components/Button/styles";
import { caseStudy as infiniteCase } from './infinite'
import { caseStudy as cuckooCase } from './cuckoo'
import { caseStudy as givetrackCase } from './givetrack'
import { caseStudy as monaxCase } from './monax'
import { CaseStudyDetailType } from "../../containers/CaseStudyDetail";
export default function CaseStudy() {
    const casesArray: CaseStudyDetailType[] = [infiniteCase, cuckooCase, givetrackCase, monaxCase];
    return (
        <div>
            <Navbar variant={true} />
            <Head />
            <S.Content className="d-flex flex-wrap gap-3">
                <S.Title className='col-12'>Case Studies</S.Title>
                <div className="flex-grow-1 d-none d-xl-flex">
                    <HorizontalMenu active="" className="flex-grow-1 col-12" items={MenuItems} />
                </div>
                <S.PreviewsWrapper className="col-12 col-xl-10">
                    {casesArray.map((x, index) => {
                        return (<S.PreviewContainer key={index} className="d-flex flex-wrap">
                            <S.PreviewImage
                                src={x?.displayImage}
                                className="col-12 col-md-4"
                            />
                            <div className="d-flex flex-column justify-content-between col-12 col-md-8 px-4 py-3">
                                <div>
                                    <S.PreviewTitle>{x?.title}</S.PreviewTitle>
                                    <S.PreviewDescription className="mt-2">
                                        {`Overview: ${x?.overview}`}
                                    </S.PreviewDescription>
                                </div>
                                <div className='d-flex w-100 justify-content-end'>
                                    {/* @ts-ignore */}
                                    <ButtonPrimary onClick={() => window.location = x.link}>See Case</ButtonPrimary>
                                </div>
                            </div>
                        </S.PreviewContainer>
                        )
                    })}
                </S.PreviewsWrapper>
            </S.Content>
        </div>
    );
}
