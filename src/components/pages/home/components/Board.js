import React from 'react'
import { BoardWrapper } from '../style'

export default function Board() {
  return (
    <BoardWrapper>
       <a href="/mobile/club">
        <img
          alt=""
          src={require('../../../../assets/images/home/board-1.png')}
        />
      </a>
      <a target="_blank" href="/mobile/books">
        <img
          alt=""
          src={require('../../../../assets/images/home/board-2.png')}
        />
      </a>
      <a target="_blank" href="/publications">
        <img
          alt=""
          src={require('../../../../assets/images/home/board-3.png')}
        />
      </a>
      <a target="_blank" href="/c/e048f1a72e3d">
        <img
          alt=""
          src={require('../../../../assets/images/home/board-4.png')}
        />
      </a>
    </BoardWrapper>
  )
}
