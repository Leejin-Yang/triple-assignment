import {
  TripleImage,
  PlayStoreImage,
  AppleBadgeImage,
} from '../../assets/images'

import { Container, AppImage, IndicatorList, AwardList } from './style'

function Summary() {
  return (
    <Container>
      <AppImage background={TripleImage}>2021년 12월 기준</AppImage>
      <IndicatorList>
        <li>
          <strong>700만 명</strong>의 여행자
        </li>
        <li>
          <strong>100만 개</strong>의 여행 리뷰
        </li>
        <li>
          <strong>470만 개</strong>의 여행 일정
        </li>
      </IndicatorList>
      <AwardList>
        <li>
          <img src={PlayStoreImage} alt="play-store" />
          <p>
            2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
          </p>
        </li>
        <li>
          <img src={AppleBadgeImage} alt="apple-badge" />
          <p>
            2018 애플 앱스토어 <br /> 오늘의 여행앱 선정
          </p>
        </li>
      </AwardList>
    </Container>
  )
}

export default Summary
