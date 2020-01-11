import styled from 'styled-components'

export const HomeWrapper = styled.div``

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

export const ArticleList = styled.div``
