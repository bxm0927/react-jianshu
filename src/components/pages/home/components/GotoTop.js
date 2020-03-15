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

  // FIXME Warning: Can't perform a React state update on an unmounted component.
  // This is a no-op, but it indicates a memory leak in your application.
  // To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
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
