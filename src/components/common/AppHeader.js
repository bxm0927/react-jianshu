import React from 'react'
import styles from './AppHeader.module.scss'
import logo from '../../assets/images/common/logo.png'

const AppHeader = () => {
  return (
    <header className={`flexbox-center ${styles.appHeader}`}>
      <div className={styles.logoWrapper}>
        <a href="/">
          <img className={styles.logo} src={logo} alt="简书 jianshu.com" />
        </a>
      </div>

      <div className={`container ${styles.navWrapper}`}>
        <nav className={styles.nav}>
          <a className={`${styles.navItem} ${styles.active}`} href="/">
            首页
          </a>
          <a className={styles.navItem} href="/">
            下载App
          </a>
        </nav>
        <div className={styles.searchWrapper}>
          <input className={styles.searchInput} type="search" placeholder="搜索" />
          <i className={`iconfont icon-sousuo1 ${styles.searchIcon}`}></i>
        </div>
      </div>

      <div className={`flexbox-center ${styles.operateWrapper}`}>
        <button className={`btn ${styles.login}`}>登录</button>
        <button className={`btn ${styles.register}`}>注册</button>
        <button className={`btn ${styles.writing}`}>写文章</button>
      </div>
    </header>
  )
}

export default AppHeader
