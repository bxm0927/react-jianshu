import React, { useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { DetailWrapper } from './style'
import { fetchDetailContent } from '../../../store/modules/detail/actionCreators'

const Detail = ({ detailContent, fetchDetailContent }) => {
  const { id } = useParams()

  useEffect(() => {
    fetchDetailContent(id)
  })

  function createContent(content) {
    return { __html: content }
  }

  return (
    <Fragment>
      {detailContent && (
        <DetailWrapper className="container">
          <h1 className="title">{detailContent.title}</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={createContent(detailContent.content)}
          ></div>
        </DetailWrapper>
      )}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  detailContent: state.detail.detailContent,
})

const mapDispatchToProps = {
  fetchDetailContent,
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
