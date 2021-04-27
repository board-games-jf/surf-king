import styled from '@emotion/styled'

const RepeatedBackground = styled.div({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  zIndex: -1,
  backgroundImage: 'url(/media/board/background.png);',
  backgroundRepeat: 'repeat',
})

export default RepeatedBackground
