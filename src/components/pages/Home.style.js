import styled from 'styled-components'

export const HomeWrapper = styled.div`
  padding-top: 30px;
`

export const LeftWrapper = styled.div`
  float: left;
  width: 66.667%;
`

export const RighttWrapper = styled.div`
  float: right;
  width: 30%;
  background-color: palevioletred;
`

export const Banner = styled.div`
  img {
    display: block;
    width: 100%;
    border-radius: 6px;
  }
`
export const Topic = styled.div`
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
`

export const ArticleList = styled.ul``

export const ArticleListItem = styled.li`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: 140px;
  border-bottom: 1px solid #f0f0f0;
  &:first-child {
    border-top: 1px solid #f0f0f0;
  }
`

export const LeftInfo = styled.div`
  box-sizing: border-box;
  width: 500px;
  background: red;
`

export const RightPic = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 125px;
  height: 100px;
  background: red;
`
