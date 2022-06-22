import useCounter from '../../hooks/useCounter'

import { IndicatorItem } from './style'

interface Props {
  endPoint: number
  unit: string
  desc: string
}

function Indicator({ endPoint, unit, desc }: Props) {
  const count = useCounter(endPoint, 2000, 150)

  return (
    <IndicatorItem>
      <strong>
        {count}
        {unit}
      </strong>
      {desc}
    </IndicatorItem>
  )
}

export default Indicator
