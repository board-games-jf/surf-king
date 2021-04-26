import styled from '@emotion/styled'

const BottomBarItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'space-around',
  alignItems: 'center',
  cursor: 'pointer',

  '&:hover,&:focus': {
    color: '#2F80ED',
  },
})

export { BottomBarItem }
