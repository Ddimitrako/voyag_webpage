import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner1 = (props) => {
  return (
    <>
      <div
        className={`banner1-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="banner1-max-width thq-section-max-width">
          <div className="banner1-container2">
            <h2 className="banner1-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="banner1-text5">
                    Effortless Trip Planning with Voyag
                  </span>
                </Fragment>
              )}
            </h2>
            <h3 className="banner1-text1 thq-heading-3">
              {props.content1 ?? (
                <Fragment>
                  <span className="banner1-text3">
                    Let Voyag take the stress out of planning your next business
                    trip or vacation. Our AI-powered travel planner creates
                    personalized itineraries just for you.
                  </span>
                </Fragment>
              )}
            </h3>
          </div>
          <button type="button" className="thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="banner1-text4">Get Started</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner1-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner1-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-title {
            text-align: center;
          }
          .banner1-text1 {
            text-align: center;
          }
          .banner1-text3 {
            display: inline-block;
          }
          .banner1-text4 {
            display: inline-block;
          }
          .banner1-text5 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Banner1.defaultProps = {
  content1: undefined,
  action1: undefined,
  heading1: undefined,
  rootClassName: '',
}

Banner1.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Banner1
