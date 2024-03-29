import styled from '@emotion/styled'

const HeaderContent = styled.div({
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  background: 'white',
})

const LoginArea = styled.div({
  display: 'flex',
  height: 100,
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
})

const LogoArea = styled.div({
  display: 'flex',
  height: 100,
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
})

const EllipseBackground = styled.div({
  position: 'fixed',
  zIndex: 1,
  width: '150%',
  height: 200,
  top: '-70px',
  left: '-25%',
  paddingTop: 60,
  borderRadius: '50%',
  background: 'white',
  boxShadow: '0px 0px 8px rgba(0, 0, 0, 25)',

  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
})

export { EllipseBackground, HeaderContent, LoginArea, LogoArea }
