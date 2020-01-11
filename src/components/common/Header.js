import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { shuffle } from 'lodash'
import styles from './Header.module.scss'
import logo from '../../assets/images/common/logo.png'
import { fetchHotList, fetchHotListSuccess } from '../../store/actionCreators'

const Header = ({ hotList, fetchHotList, fetchHotListSuccess }) => {
  const [focus, setFocus] = useState(false)
  const [mouseEnter, setMouseEnter] = useState(false)
  const changeIcon = useRef(null)

  function fetchHistoryList() {
    // localStorage
    console.log('fetchHistoryList')
  }
  function handelSearchInputFocus() {
    // 如果有数据，就不请求，避免多次请求无意义的重复数据
    if (!hotList || !hotList.length) {
      fetchHotList()
    }
    fetchHistoryList()
    setFocus(true)
  }
  function handelSearchInputBlur() {
    // 延时是为了避免某些点击因元素消失而失效
    setTimeout(() => {
      setFocus(false)
    }, 200)
  }
  function handelHotSearchMouseEnter() {
    setMouseEnter(true)
  }
  function handelHotSearchMouseLeave() {
    setMouseEnter(false)
  }
  function handelHotSearchChange() {
    const newHotList = shuffle(hotList)
    fetchHotListSuccess(newHotList)

    // FIXME 只执行了一次，transform 没有改变
    const originRotate = changeIcon.current.style.transform
    changeIcon.current.style.transform = `rotate(${originRotate + 360}deg)`
  }
  function renderSeaechResult() {
    return (
      <div
        className={styles.searchResult}
        onMouseEnter={handelHotSearchMouseEnter}
        onMouseLeave={handelHotSearchMouseLeave}
      >
        <div className={styles.hotSearch}>
          <p className={styles.title}>
            热门搜索
            <span className={styles.change} onClick={handelHotSearchChange}>
              <i ref={changeIcon} className="iconfont icon-huanyihuan1" /> 换一换
            </span>
          </p>

          <ul className={styles.hotList}>
            {hotList.map((item, index) => (
              <li key={index} className={styles.hotItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.historySearch}>
          <p className={styles.title}>历史记录</p>
          <ul className={styles.historyList}>
            <li className={styles.historyItem}>historyList</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <header className={`flexbox-center ${styles.header}`}>
      <div className={styles.logoWrapper}>
        <a href="/">
          <img className={styles.logo} src={logo} alt="简书 jianshu.com" />
        </a>
      </div>

      <div className={`container ${styles.navWrapper}`}>
        <nav className={styles.leftNav}>
          <a className={`${styles.navItem} ${styles.active}`} href="/">
            <i className="iconfont icon-shouye-" />
            首页
          </a>
          <a className={styles.navItem} href="/">
            <i className="iconfont icon-shoujixiazai" />
            下载App
          </a>
        </nav>

        <div className={styles.searchWrapper}>
          <input
            onFocus={handelSearchInputFocus}
            onBlur={handelSearchInputBlur}
            className={styles.searchInput}
            type="search"
            placeholder="搜索"
          />
          <i className={`iconfont icon-sousuo1 ${styles.searchIcon}`} />

          {(focus || mouseEnter) && renderSeaechResult()}
        </div>

        <div className={styles.rightNav}>
          <a className={`fr ${styles.login}`} href="/">
            登录
          </a>
          <a className={`fr ${styles.font}`} href="/">
            <i className="iconfont icon-Aa" />
          </a>
        </div>
      </div>

      <div className={`flexbox-center ${styles.operateWrapper}`}>
        <button className={`btn ${styles.register}`}>注册</button>
        <button className={`btn ${styles.writing}`}>
          <i className="iconfont icon-xiezi" /> 写文章
        </button>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  hotList: state.hotList,
})

const mapDispatchToProps = {
  fetchHotList,
  fetchHotListSuccess,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
