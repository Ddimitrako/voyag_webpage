import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Steps1 = (props) => {
  return (
    <>
      <div className="steps1-container1 thq-section-padding">
        <div className="steps1-max-width thq-section-max-width">
          <div className="steps1-container2">
            <div className="steps1-container3 thq-card">
              <img
                alt={props.step1ImageAlt}
                src={props.step1ImageSrc}
                className="steps1-image1 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps1-text27">Sign Up for Voyag</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text11 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps1-text26">
                      Create an account on Voyag to start planning your trips
                      effortlessly.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps1-text12 thq-heading-3">01</label>
            </div>
            <div className="steps1-container4 thq-card">
              <img
                alt={props.step2Alt}
                src={props.step2ImageSrc}
                className="steps1-image2 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps1-text22">
                      Customize Your Travel Preferences
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text14 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps1-text23">
                      Set your travel preferences and requirements to receive
                      personalized itineraries.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps1-text15 thq-heading-3">02</label>
            </div>
          </div>
          <div className="steps1-container5">
            <div className="steps1-container6 thq-card">
              <img
                alt={props.step3ImageAlt}
                src={props.step3ImageSrc}
                className="steps1-image3 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps1-text25">
                      Review and Confirm Itinerary
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text17 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps1-text29">
                      Review the proposed itinerary and make any necessary
                      adjustments before confirming.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps1-text18 thq-heading-3">03</label>
            </div>
            <div className="steps1-container7 thq-card">
              <img
                alt={props.step4ImageAlt}
                src={props.step4ImageSrc}
                className="steps1-image4 thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps1-text24">
                      Book Seamlessly Through Voyag
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps1-text20 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps1-text28">
                      Complete your bookings directly through live supplier APIs
                      for a hassle-free experience.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps1-text21 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps1-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps1-max-width {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container2 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container3 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image1 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps1-text11 {
            text-align: center;
          }
          .steps1-text12 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-container4 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image2 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps1-text14 {
            text-align: center;
          }
          .steps1-text15 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-container5 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container6 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image3 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps1-text17 {
            text-align: center;
          }
          .steps1-text18 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-container7 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .steps1-image4 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
          }
          .steps1-text20 {
            text-align: center;
          }
          .steps1-text21 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps1-text22 {
            display: inline-block;
          }
          .steps1-text23 {
            display: inline-block;
          }
          .steps1-text24 {
            display: inline-block;
          }
          .steps1-text25 {
            display: inline-block;
          }
          .steps1-text26 {
            display: inline-block;
          }
          .steps1-text27 {
            display: inline-block;
          }
          .steps1-text28 {
            display: inline-block;
          }
          .steps1-text29 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .steps1-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps1-container2 {
              flex-direction: column;
            }
            .steps1-container3 {
              width: 100%;
            }
            .steps1-container4 {
              width: 100%;
            }
            .steps1-container5 {
              flex-direction: column;
            }
            .steps1-container6 {
              width: 100%;
            }
            .steps1-container7 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps1.defaultProps = {
  step3ImageAlt: 'Review Itinerary Image',
  step2Title: undefined,
  step1ImageAlt: 'Sign Up Image',
  step2Description: undefined,
  step4Title: undefined,
  step2ImageSrc:
    'https://images.unsplash.com/photo-1512757776214-26d36777b513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDQxNjQ5M3w&ixlib=rb-4.1.0&q=80&w=1080',
  step3Title: undefined,
  step1Description: undefined,
  step4ImageAlt: 'Bookings Image',
  step3ImageSrc:
    'https://images.unsplash.com/photo-1439066290691-510066268af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDQxNjQ5NHw&ixlib=rb-4.1.0&q=80&w=1080',
  step4ImageSrc:
    'https://images.unsplash.com/photo-1602265568624-29e8dc535bd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDQxNjQ5NHw&ixlib=rb-4.1.0&q=80&w=1080',
  step2Alt: 'Customize Travel Preferences Image',
  step1Title: undefined,
  step4Description: undefined,
  step1ImageSrc:
    'https://images.unsplash.com/photo-1747077370431-d0ac9467e92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDQxNjQ5NHw&ixlib=rb-4.1.0&q=80&w=1080',
  step3Description: undefined,
}

Steps1.propTypes = {
  step3ImageAlt: PropTypes.string,
  step2Title: PropTypes.element,
  step1ImageAlt: PropTypes.string,
  step2Description: PropTypes.element,
  step4Title: PropTypes.element,
  step2ImageSrc: PropTypes.string,
  step3Title: PropTypes.element,
  step1Description: PropTypes.element,
  step4ImageAlt: PropTypes.string,
  step3ImageSrc: PropTypes.string,
  step4ImageSrc: PropTypes.string,
  step2Alt: PropTypes.string,
  step1Title: PropTypes.element,
  step4Description: PropTypes.element,
  step1ImageSrc: PropTypes.string,
  step3Description: PropTypes.element,
}

export default Steps1
