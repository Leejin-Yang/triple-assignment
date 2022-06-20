import styled from 'styled-components'

import colors from '../../styles/constants/colors'

interface AppImageProp {
  background: string
}

const Container = styled.section`
  position: relative;
  width: 1200px;
  padding-top: 150px;
  margin: 0 auto;
`

const AppImage = styled.div<AppImageProp>`
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
`

const IndicatorList = styled.ul`
  margin-left: 720px;

  li {
    font-size: 36px;
    line-height: 1.6;
    color: ${colors.text};

    strong {
      font-weight: bold;
    }
  }
`

const AwardList = styled.ul`
  display: flex;
  margin: 50px 0 0 720px;

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 54px;
      height: 54px;
    }

    p {
      padding-left: 10px;
      font-size: 14px;
      font-weight: bold;
      line-height: 22px;
      color: ${colors.textSecondary};
    }
  }

  li + li {
    margin-left: 40px;
  }
`

export { Container, AppImage, IndicatorList, AwardList }
