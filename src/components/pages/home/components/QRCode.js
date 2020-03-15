import React from 'react'
import { Link } from 'react-router-dom'
import { QRCodeWrapper } from '../style'
import qrcode from '../../../../assets/images/home/download-qrcode.png'

export default function QRCode() {
  return (
    <QRCodeWrapper>
      <Link to="/" className="qrcode-content">
        <img src={qrcode} alt="下载简书手机App" className="download-qrcode" />
        <div className="info">
          <div className="title">
            下载简书手机App <i className="iconfont icon-more" />
          </div>
          <div className="description">随时随地发现和创作内容</div>
        </div>
      </Link>

      <div className="qrcode-zoom">
        <img src={qrcode} alt="下载简书手机App" className="download-qrcode" />
        <span className="triangle" />
      </div>
    </QRCodeWrapper>
  )
}
