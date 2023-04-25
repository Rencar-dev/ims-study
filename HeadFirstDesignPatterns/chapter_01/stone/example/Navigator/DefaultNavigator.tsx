import HeaderNavigator from './HeaderNavigator'

class DefaultNavigator implements HeaderNavigator {
  render() {
    return (
      <>
        <button>예약 내역</button>
        <button>마이페이지</button>
      </>
    )
  }
}

export default DefaultNavigator
