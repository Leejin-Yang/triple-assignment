import { IndicatorItem } from './style'

interface Props {
  endPoint: number
  unit: string
  desc: string
}

function Indicator({ endPoint, unit, desc }: Props) {
  return (
    <IndicatorItem>
      <strong>
        {endPoint}
        {unit}
      </strong>
      {desc}
    </IndicatorItem>
  )
}

export default Indicator
