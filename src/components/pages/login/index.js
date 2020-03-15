import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'
import { LoginWrapper } from './style'
import { fetchLogin } from '../../../store/modules/login/actionCreators'

const Login = ({ hasLogin, fetchLogin }) => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  // TODO: 这里应该是用 refer 来进行登陆成功重定向
  // const { search } = useLocation()

  function handelLogin() {
    const username = usernameRef.current.value
    const password = passwordRef.current.value
    fetchLogin(username, password)
  }

  if (hasLogin) {
    return <Redirect to="/" />
  } else {
    return (
      <LoginWrapper>
        <div className="login-content">
          <div className="username-box">
            <input
              ref={usernameRef}
              type="text"
              className="username"
              placeholder="手机号或邮箱"
            />
          </div>
          <div className="password-box">
            <input
              ref={passwordRef}
              type="password"
              className="password"
              placeholder="密码"
            />
          </div>
          <button className="login-btn" onClick={handelLogin}>
            登录
          </button>
        </div>
      </LoginWrapper>
    )
  }
}

const mapStateToProps = state => ({
  hasLogin: state.login.hasLogin,
})

const mapDispatchToProps = {
  fetchLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
