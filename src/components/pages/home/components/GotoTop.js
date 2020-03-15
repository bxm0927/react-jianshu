import React, { Fragment, useState, useEffect } from 'react'
import { GotoTopWrapper } from '../style'
import {
  getViewportSize,
  getScrollDistance,
  scrollToTop,
} from '../../../../assets/javascripts/utils'

export default function GotoTop() {
  const [showWrapper, setShowWrapper] = useState(false)

  function gotoTop() {
    scrollToTop()
  }

  function switchWrapper() {
    const { clientHeight } = getViewportSize()
    const { scrollTop } = getScrollDistance()

    if (scrollTop >= clientHeight) {
      setShowWrapper(true)
    } else {
      setShowWrapper(false)
    }
  }

  useEffect(() => {
    switchWrapper()
    document.addEventListener('scroll', () => switchWrapper())
  })

  return (
    <Fragment>
      {showWrapper && (
        <GotoTopWrapper onClick={gotoTop}>
          <i className="iconfont icon-less" />
        </GotoTopWrapper>
      )}
    </Fragment>
  )
}
