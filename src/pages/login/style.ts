
type ReactStyle = {
  [key: string]: React.CSSProperties
}

const style: ReactStyle = {
  loginWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  leftWrapper: {
    flex: 3
  },
  rightWrapper: {
    flex: 2
  }
}

export default style