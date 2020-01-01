import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/images/common/logo.png'

const Header = () => {
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
            <i class="iconfont icon-shouye-" />
            首页
          </a>
          <a className={styles.navItem} href="/">
            <i class="iconfont icon-shoujixiazai" />
            下载App
          </a>
        </nav>

        <div className={styles.searchWrapper}>
          <input className={styles.searchInput} type="search" placeholder="搜索" />
          <i className={`iconfont icon-sousuo1 ${styles.searchIcon}`} />
        </div>

        <div className={styles.rightNav}>
          <a className={`fr ${styles.login}`} href="/">
            登录
          </a>
          <a className={`fr ${styles.font}`} href="/">
            <i class="iconfont icon-Aa" />
          </a>
        </div>
      </div>

      <div className={`flexbox-center ${styles.operateWrapper}`}>
        <button className={`btn ${styles.register}`}>注册</button>
        <button className={`btn ${styles.writing}`}>
          <i class="iconfont icon-xiezi" /> 写文章
        </button>
      </div>
    </header>
  )
}

export default Header
