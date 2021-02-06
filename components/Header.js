import React from 'react'
import { COLORS } from '../lib/constants'
import Logo from './svg/Logo'

const Header = ({ enableHeroText }) => (
  <header role="banner" className="mb4">
    <div className="header-content">
      <a id="link-home" href="/" aria-label="Home">
        {/* <Logo /> */}
        <div className="my-title">SHOW YOUR CODES</div>
      </a>
      {enableHeroText ? (
        <h2 className="mt3">
          分享奇妙代码，将从这里启程～
          <br />
        </h2>
      ) : null}
    </div>
    <style jsx>
      {`
        .header-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-content a {
          height: 40px;
          max-width: 96vw;
        }
        .my-title {
          color:purple;
          font-size:36px;
        }
        h2 {
          text-align: center;
        }

        @media (max-width: 768px) {
          header {
            margin-bottom: var(--x3);
          }
          h2 {
            font-size: 13px;
          }
        }
      `}
    </style>
  </header>
)

export default Header
