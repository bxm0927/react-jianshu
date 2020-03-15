import styled from 'styled-components'

export const HomeWrapper = styled.div`
  padding-top: 30px;
`

export const LeftWrapper = styled.main`
  float: left;
  width: 66.667%;
  .banner img {
    display: block;
    width: 100%;
    border-radius: 6px;
  }
`

export const RighttWrapper = styled.aside`
  float: right;
  width: 30%;
`

export const TopicWrapper = styled.div`
  .topic-list {
    display: flex;
    flex-wrap: wrap;
  }
  .topic-item {
    margin-top: 22px;
    margin-right: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #aaa;
    border-radius: 4px;
    .topic-link {
      display: flex;
      align-items: center;
    }
    .pic {
      width: 30px;
      height: 30px;
    }
    .name {
      padding: 0 10px;
      color: #333;
    }
  }
  .topic-more {
    border: 0;
    .more {
      color: #888;
    }
  }
`

export const ArticleListWrapper = styled.div`
  margin-top: 40px;
  .list-item {
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    min-height: 140px;
    border-bottom: 1px solid #f0f0f0;
    &:first-child {
      border-top: 1px solid #f0f0f0;
    }
  }
  .left-info {
    box-sizing: border-box;
    width: 500px;
    .title {
      display: block;
      font-size: 18px;
      font-weight: bold;
      color: #333;
      &:hover {
        color: #ff4053;
      }
      &:visited {
        color: #969696;
      }
    }
    .summary {
      margin-top: 10px;
      font-size: 14px;
      color: #999;
    }
    .meta {
      margin-top: 10px;
      font-size: 12px;
      color: #b4b4b4;
      .author {
        margin-right: 10px;
      }
    }
  }
  .right-pic {
    position: absolute;
    top: 20px;
    right: 0;
    width: 125px;
    height: 100px;
    .pic {
      width: 100%;
    }
  }
  .load-more {
    .load-more-btn {
      display: block;
      margin: 30px auto 60px;
      padding: 10px 15px;
      width: 100%;
      height: 40px;
      color: #fff;
      background-color: #a5a5a5;
      border-radius: 20px;
      font-size: 16px;
      text-align: center;
      transition: all 0.25s;
      border: none;
      outline: none;
      &:hover {
        background-color: #9b9b9b;
      }
    }
  }
`

export const BoardWrapper = styled.div`
  margin-top: -4px;
  img {
    width: 100%;
  }
`

export const QRCodeWrapper = styled.div`
  position: relative;
  .qrcode-content {
    display: block;
    box-sizing: border-box;
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    &:hover {
      + .qrcode-zoom {
        display: block;
      }
    }
    .download-qrcode {
      width: 60px;
      height: 60px;
      opacity: 0.85;
      vertical-align: middle;
    }
    .info {
      display: inline-block;
      margin-left: 8px;
      vertical-align: middle;
      .title {
        font-size: 14px;
        color: #333;
        i {
          vertical-align: middle;
        }
      }
      .description {
        margin-top: 4px;
        font-size: 12px;
        color: #999;
      }
    }
  }
  .qrcode-zoom {
    display: none;
    position: absolute;
    top: -216px;
    left: 50%;
    margin-left: -100px;
    background-color: #fff;
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    font-size: 0;
    .download-qrcode {
      width: 180px;
      height: 180px;
      vertical-align: middle;
    }
    .triangle {
      position: absolute;
      left: 50%;
      bottom: -10px;
      margin-left: -10px;
      width: 0;
      height: 0;
      vertical-align: middle;
      border-top: 10px solid #fff;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }
  }
`

export const WriterWrapper = styled.div`
  .title {
    font-size: 14px;
    color: #969696;
  }
  .writer-list {
  }
  .list-item {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .avatar {
    flex: 0 0 50px;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
  }
  .info {
    flex: 1;
    margin-left: 10px;
    .meta {
      margin-top: 2px;
      font-size: 12px;
      color: #969696;
    }
  }
  .follow {
    position: absolute;
    right: 0;
    top: 0;
    color: #42c02e;
    cursor: pointer;
    &:hover {
      color: #ff4053;
    }
  }
  .more {
    margin-top: 10px;
    padding: 8px;
    width: 100%;
    font-size: 14px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
  }
`

export const GotoTopWrapper = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  transition: 0.1s ease-in;
  z-index: 10;
  cursor: pointer;
  &:hover {
    background-color: hsla(0, 0%, 71%, 0.1);
    transition: 0.1s ease-in;
  }
  i {
    color: #2f2f2f;
    font-size: 26px;
  }
`
