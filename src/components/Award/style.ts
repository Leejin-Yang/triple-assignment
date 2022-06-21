import styled from 'styled-components'

import colors from '../../styles/constants/colors'

export const AwardItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AwardImage = styled.img`
  width: 54px;
  height: 54px;
`

export const AwardDesc = styled.p`
  padding-left: 10px;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: ${colors.textSecondary};
`
