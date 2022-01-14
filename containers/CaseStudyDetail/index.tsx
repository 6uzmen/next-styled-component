import React from 'react'
import Image from 'next/image';
import * as S from './styles'

export type CaseStudyDetailType = { title: string; overview: string, challenge: string, solution: string; displayImage: string; link: string }

interface IProps {
    caseStudy: CaseStudyDetailType;
}

export default function CaseStudyDetail({ caseStudy }: IProps) {
    return (
        <div className="col-12 col-xl-10">
            <S.DisplayImage src={caseStudy.displayImage} alt='display-image' />
            <S.Title className='my-4'>{caseStudy.title}</S.Title>
            <S.SectionContainer background='#e4e4e4' className='my-4'>
                <S.Subtitle >Overview</S.Subtitle>
                <S.Paragraph className='mb-4'>{caseStudy.overview}</S.Paragraph>
            </S.SectionContainer>
            <S.SectionContainer background='#a4dbfc' className='my-4'>
                <S.Subtitle>Challange</S.Subtitle>
                <S.Paragraph className='mb-4'>{caseStudy.challenge}</S.Paragraph>
            </S.SectionContainer>
            <S.SectionContainer background='#b2f7ca' className='mt-4'>
                <S.Subtitle>Solution</S.Subtitle>
                <S.Paragraph >{caseStudy.solution}</S.Paragraph>
            </S.SectionContainer>
        </div>
    )
}
