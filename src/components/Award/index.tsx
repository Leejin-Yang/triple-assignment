import { AwardDesc, AwardImage, AwardItem } from './style'

interface Props {
  imgSrc: string
  imgAlt: string
  year: string
  institution: string
  award: string
}

function Award({ imgSrc, imgAlt, year, institution, award }: Props) {
  return (
    <AwardItem>
      <AwardImage src={imgSrc} alt={imgAlt} />
      <AwardDesc>
        {year} {institution}
        <br />
        {award}
      </AwardDesc>
    </AwardItem>
  )
}

export default Award
