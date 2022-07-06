import useCounter from '../../hooks/useCounter'

interface Props {
  endPoint: number
}

function Count({ endPoint }: Props) {
  const count = useCounter(endPoint, 2000, 100)

  return <span>{count}</span>
}

export default Count
