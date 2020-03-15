import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: 100%;
  min-height: 700px;
  font-size: 14px;
  .login-content {
    width: 400px;
    margin: 100px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }
  input {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0, 0%, 71%, 0.1);
    vertical-align: middle;
  }
  .username {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }
  .login-btn {
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
    background: #3194d0;
  }
`
