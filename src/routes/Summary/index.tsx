import {
  TripleImage,
  PlayStoreImage,
  AppleBadgeImage,
} from '../../assets/images'
import Award from '../../components/Award'
import Indicator from '../../components/Indicator'

import { Container, AppImage, IndicatorList, AwardList } from './style'

function Summary() {
  return (
    <Container>
      <AppImage background={TripleImage}>2021년 12월 기준</AppImage>
      <IndicatorList>
        <Indicator endPoint={700} unit="만 명" desc="의 여행자" />
        <Indicator endPoint={100} unit="만 개" desc="의 여행 리뷰" />
        <Indicator endPoint={470} unit="만 개" desc="의 여행 일정" />
      </IndicatorList>
      <AwardList>
        <Award
          imgSrc={PlayStoreImage}
          imgAlt="play-store"
          year="2018"
          institution="구글 플레이스토어"
          award="올해의 앱 최우수상 수상"
        />
        <Award
          imgSrc={AppleBadgeImage}
          imgAlt="apple-badge"
          year="2018"
          institution="애플 앱스토어"
          award="오늘의 여행앱 선정"
        />
      </AwardList>
    </Container>
  )
}

export default Summary
