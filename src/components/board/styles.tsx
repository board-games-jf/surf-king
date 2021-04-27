import styled from '@emotion/styled'

type Props = {
  first?: boolean
  space?: number
}

const HaxagonGridRow = styled.div<Props>((props) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  width: '100%',
  marginTop: props.first || false ? 0 : props.space,
}))

export default HaxagonGridRow
