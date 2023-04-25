import HeaderNavigator from './HeaderNavigator'

class PremoveNavigator implements HeaderNavigator {
  render() {
    return (
      <>
        <button>예약 내역</button>
        <button>마이페이지</button>
        <button>로그아웃</button>
      </>
    )
  }
}

export default PremoveNavigator
