import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './Header.module.scss'
import logo from '../../assets/images/common/logo.png'
import { fetchHotList } from '../../store/actionCreators'

const Header = ({ hotList, fetchHotList }) => {
  const [showSeaechResult, setShowSeaechResult] = useState(false)

  function handelSearchInputFocus() {
    if (!hotList || !hotList.length) {
      fetchHotList()
    }
    // fetchHistoryList()
    setShowSeaechResult(true)
  }
  function handelSearchInputBlur() {
    setTimeout(() => {
      setShowSeaechResult(false)
    }, 200)
  }
  function renderSeaechResult(isShow) {
    if (!isShow) return
    return (
      <div className={styles.searchResult}>
        <div className={styles.hotSearch}>
          <p className={styles.title}>热门搜索</p>
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

          {renderSeaechResult(showSeaechResult)}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
