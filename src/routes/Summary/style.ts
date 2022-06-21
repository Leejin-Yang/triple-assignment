import styled, { keyframes } from 'styled-components'

import colors from '../../styles/constants/colors'

interface AppImageProp {
  background: string
}

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled.section`
  position: relative;
  width: 1200px;
  padding-top: 150px;
  margin: 0 auto;
`

export const AppImage = styled.div<AppImageProp>`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 340px;
  padding-top: 280px;
  font-size: 15px;
  color: ${colors.textSecondary};
  text-align: center;
  background-image: ${(props) => `url(${props.background}) `};
  background-repeat: no-repeat;
  background-size: 400px 340px;
  animation-name: ${appear};
  animation-duration: 700ms;
`

export const IndicatorList = styled.ul`
  margin-left: 690px;
  opacity: 0;
  animation-name: ${appear};
  animation-duration: 700ms;
  animation-delay: 100ms;
  animation-fill-mode: forwards;
`

export const AwardList = styled.ul`
  display: flex;
  margin: 50px 0 0 690px;
  opacity: 0;
  animation-name: ${appear};
  animation-duration: 700ms;
  animation-delay: 200ms;
  animation-fill-mode: forwards;

  li + li {
    margin-left: 54px;
  }
`
