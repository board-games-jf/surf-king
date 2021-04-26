import styled from '@emotion/styled'

type Props = {
  value: number
}

const Space = styled.div<Props>((props) => ({
  marginRight: props.value || 8,
}))

export default Space
