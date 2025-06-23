import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Well Off Arctic Goldfinch</title>
          <meta property="og:title" content="Well Off Arctic Goldfinch" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text100">#home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text101">#features</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text102">#how-it-works</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text103">#contact-us</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text104">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text105">Features</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text106">How It Works</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text107">Contact Us</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text108">#signup</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text109">Travel Plan Designer</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="home-text110">Learn more about Voyag</span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text111">
                Discover the capabilities of Voyag
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text112">
                Understand the process of using Voyag
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text113">
                Get in touch with the Voyag team
              </span>
            </Fragment>
          }
          logoSrc="/voyag%20ai%20whitebackground_smmall-1500h.png"
          rootClassName="navbar8root-class-name"
        ></Navbar8>
        <Hero17
          content1={
            <Fragment>
              <span className="home-text114">
                Effortless travel planning for businesses and travelers. Let
                Voyag take the stress out of organizing your next adventure.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text115">
                Welcome to Voyag - Your AI-Powered Travel Planner
              </span>
            </Fragment>
          }
          image2Src="https://images.unsplash.com/photo-1555993539-1732b0258235?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxncmVlY2V8ZW58MHx8fHwxNzUwNDExNjU4fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          image4Src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGl0YWx5fGVufDB8fHx8MTc1MDQxMTg0N3ww&amp;ixlib=rb-4.1.0&amp;w=1500"
          image7Src="https://images.unsplash.com/photo-1601202278710-3bf072d6c950?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGNyZXRlfGVufDB8fHx8MTc1MDQxMTczN3ww&amp;ixlib=rb-4.1.0&amp;w=1500"
          image8Src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxncmVlY2V8ZW58MHx8fHwxNzUwNDExNjU4fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          image10Src="https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxpdGFseXxlbnwwfHx8fDE3NTA0MTE4NDd8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
          image11Src="https://images.unsplash.com/photo-1618002691475-c0367d58c4ac?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxiZWF1dGlmdWwlMjBkZXN0aW5hdGlvbnN8ZW58MHx8fHwxNzUwNDEyMzc1fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        ></Hero17>
        <Features24
          feature1Title={
            <Fragment>
              <span className="home-text116">Innovative AI Technology</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text117">White-label Solution</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text118">Seamless Booking</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text119">
                Plan trips effortlessly with advanced AI that understands your
                needs and helps you discover the best travel options.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text120">
                Integrate seamlessly—Voyag’s platform can be fully branded for
                your business, making it easy to offer cutting-edge travel
                planning to your customers.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text121">
                Book everything in one place—flights, hotels, activities, and
                more—using live supplier APIs for instant confirmation and
                hassle-free management.
              </span>
            </Fragment>
          }
          feature1ImgSrc="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGJ1c2luZXNzfGVufDB8fHx8MTc1MDQxMTk2NHww&amp;ixlib=rb-4.1.0&amp;w=1500"
        ></Features24>
        <CTA26
          action1={
            <Fragment>
              <span className="home-text122">Get Started</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text123">
                Experience the future of travel planning with Voyag. Harness AI
                to create and manage personalized travel itineraries—faster,
                easier, and smarter than ever.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text124">
                Ready to revolutionize your travel planning?
              </span>
            </Fragment>
          }
        ></CTA26>
        <Features25
          feature1Title={
            <Fragment>
              <span className="home-text125">Interactive Map Journey</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text126">Real-Time Deal Engine</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text127">Get Useful Insights</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text128">
                Voyag creates customized travel plans based on user preferences
                and interests.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text129">
                Voyag pulls prices and availability straight from flight, ferry,
                hotel and activity APIs, putting the very latest deals in one
                clean view—no tab-hopping required.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text130">
                <span className="home-text131">
                  Voyag  Agents search the web for local tips, advices, useful
                  insights and data like weather conditions and time of the
                  year, in order to design the perfect trip for each
                  destination, traveler and trip purpos
                </span>
                <span>e</span>
              </span>
            </Fragment>
          }
          feature1ImgSrc="https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxib29raW5nfGVufDB8fHx8MTc1MDQxMjAwMnww&amp;ixlib=rb-4.1.0&amp;w=1500"
        ></Features25>
        <hr className="home-separator1"></hr>
        <h1 className="home-text133">Watch a demo from the UI </h1>
        <span className="home-text134">
          Check how fast you Can design you Ideal travel plan !!
        </span>
        <video
          src
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          muted="true"
          className="home-video"
        ></video>
        <hr className="home-separator2"></hr>
        <Pricing14
          plan1={
            <Fragment>
              <span className="home-text135">Basic Plan</span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text136">Premium plan</span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text137">Enterprise plan</span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="home-text138">Basic plan</span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="home-text139">Business plan</span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="home-text140">Enterprise plan</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text141">
                Get started with our Basic Plan for essential travel planning
                features.
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text142">
                SaaS Subscription Plans
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text143">
                Choose the plan that suits your needs
              </span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text144">
                <span>€ 9.99</span>
                <span className="home-text146">/mont</span>
                <span>h</span>
              </span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text148">€ 19.9/month</span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text149">Get started</span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text150">$29/month</span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="home-text151"> € 99/year</span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text152">Get started</span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text153">$199/year</span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="home-text154">or € 199 yearly</span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text155">Get started</span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text156">$499/yr</span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="home-text157">Sign Up Now</span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text158">$290/year</span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="home-text159">Get started</span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text160">or $29 monthly</span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="home-text161">Get started</span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text162">or $49 monthly</span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text163">Customizable Itineraries</span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text164">Booking Management</span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text165">24/7 Customer Support</span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text166">Customizable Itineraries</span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text167">Booking Management</span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="home-text168">24/7 Customer Support</span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="home-text169">
                Personalized AI assistance trained on Business content
              </span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text170">Custom AI features</span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text171">
                White label travel plan desinger
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="home-text172">
                AI Agent for 1st level of support 
              </span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="home-text173">24/7 Customer Support</span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="home-text174">Customizable Itineraries</span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="home-text175">Booking Management</span>
            </Fragment>
          }
          plan1Feature31={
            <Fragment>
              <span className="home-text176">24/7 Customer Support</span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="home-text177">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature21={
            <Fragment>
              <span className="home-text178">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="home-text179">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature41={
            <Fragment>
              <span className="home-text180">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="home-text181">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="home-text182">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature31={
            <Fragment>
              <span className="home-text183">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature41={
            <Fragment>
              <span className="home-text184">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature51={
            <Fragment>
              <span className="home-text185">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature32={
            <Fragment>
              <span className="home-text186">Access to all core features</span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="home-text187">€ Custom</span>
            </Fragment>
          }
          plan2Feature32={
            <Fragment>
              <span className="home-text188">RAG funtionalities</span>
            </Fragment>
          }
          plan3Feature52={
            <Fragment>
              <span className="home-text189">
                Integration with modern applications
              </span>
            </Fragment>
          }
        ></Pricing14>
        <Steps2
          step1Title={
            <Fragment>
              <span className="home-text190">Share Your Preferences</span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text191">
                Receive a Tailored Travel Plan
              </span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text192">Book with Ease</span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text193">Enjoy Your Trip</span>
            </Fragment>
          }
          step1Description={
            <Fragment>
              <span className="home-text194">
                Tell the Voyag AI Agent your travel dates, destination, budget,
                and any specific preferences you have for your trip.
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text195">
                Voyag&apos;s AI algorithms will generate personalized travel
                itineraries based on your preferences and requirements,
                including your accommodation, transportation means, activities
                and many useful insights for each location of your trip.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text196">
                Once you&apos;ve selected your preferred travel options, Voyag
                will handle all the bookings using live supplier APIs for
                flights, hotels, activities, and more.
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text197">
                Sit back, relax, and get ready to embark on a seamless and
                unforgettable travel experience curated by Voyag.
              </span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text198">
                Voyag has revolutionized the way we plan trips for our clients.
                It&apos;s efficient, user-friendly, and has significantly
                increased our productivity.
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text199">
                As a hotel partner, working with Voyag has been a game-changer.
                The platform seamlessly integrates bookings and provides a
                personalized experience for travelers.
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text200">
                I love using Voyag to plan my trips. The AI suggestions are spot
                on, and the booking process is smooth and hassle-free.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text201">
                Voyag has simplified my travel planning process. I can now focus
                more on creating content and exploring new destinations rather
                than worrying about logistics.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text202">
                See what our clients have to say about their experience with
                Voyag.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text203">Testimonials</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text204">John Doe</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text205">Jane Smith</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text206">David Johnson</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text207">Sarah Lee</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text208">CEO, Travel Agency X</span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text209">Marketing Manager, Hotel Y</span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text210">Adventurer &amp; Voyag User</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text211">Travel Blogger</span>
            </Fragment>
          }
        ></Testimonial17>
        <Contact10
          content1={
            <Fragment>
              <span className="home-text212">
                Have a question or want to learn more about our products and
                services? Feel free to reach out to us!
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text213">Contact Us</span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="home-text214">
                Solomou 27, Chalandri, Attica, 15233
              </span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="home-text215">contact@voyag.gr</span>
            </Fragment>
          }
          location1Description={
            <Fragment>
              <span className="home-text216">
                Visit us at our main office location.
              </span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="home-text217">
                Send us an email for inquiries and support.
              </span>
            </Fragment>
          }
          location1ImageSrc="https://images.unsplash.com/photo-1627481734140-162cca2f2434?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxidXNpbmVzcyUyMGFyZWF8ZW58MHx8fHwxNzUwNDEyODg1fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          location2ImageSrc="https://images.unsplash.com/photo-1631248055158-edec7a3c072b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGJ1c2luZXNzJTIwYXJlYXxlbnwwfHx8fDE3NTA0MTI4ODV8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
        ></Contact10>
        <Footer4
          link1={
            <Fragment>
              <span className="home-text218">About Us</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text219">Contact Us</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text220">FAQ</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text221">Terms of Service</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text222">Privacy Policy</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text223">Terms of Service</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text224">Cookies Policy</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text225">Privacy Policy</span>
            </Fragment>
          }
          logoSrc="/voyag%20ai%20whitebackground_smmall-1500h.png"
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            gap: 10;
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
          .home-text105 {
            display: inline-block;
          }
          .home-text106 {
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
          }
          .home-text117 {
            display: inline-block;
          }
          .home-text118 {
            display: inline-block;
          }
          .home-text119 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text121 {
            display: inline-block;
          }
          .home-text122 {
            display: inline-block;
          }
          .home-text123 {
            display: inline-block;
          }
          .home-text124 {
            display: inline-block;
          }
          .home-text125 {
            display: inline-block;
          }
          .home-text126 {
            display: inline-block;
          }
          .home-text127 {
            display: inline-block;
          }
          .home-text128 {
            display: inline-block;
            font-weight: 700;
          }
          .home-text129 {
            display: inline-block;
            font-weight: 700;
          }
          .home-text130 {
            display: inline-block;
          }
          .home-text131 {
            font-weight: 700;
          }
          .home-separator1 {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .home-text133 {
            line-height: 2;
          }
          .home-text134 {
            line-height: 2;
            text-transform: capitalize;
          }
          .home-video {
            width: 1314px;
            height: 466px;
          }
          .home-separator2 {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .home-text135 {
            display: inline-block;
          }
          .home-text136 {
            display: inline-block;
          }
          .home-text137 {
            display: inline-block;
          }
          .home-text138 {
            display: inline-block;
          }
          .home-text139 {
            display: inline-block;
          }
          .home-text140 {
            display: inline-block;
          }
          .home-text141 {
            display: inline-block;
          }
          .home-text142 {
            display: inline-block;
          }
          .home-text143 {
            display: inline-block;
          }
          .home-text144 {
            display: inline-block;
          }
          .home-text146 {
            color: var(--dl-color-theme-neutral-dark);
          }
          .home-text148 {
            display: inline-block;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-text154 {
            display: inline-block;
          }
          .home-text155 {
            display: inline-block;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-text158 {
            display: inline-block;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-text161 {
            display: inline-block;
          }
          .home-text162 {
            display: inline-block;
          }
          .home-text163 {
            display: inline-block;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
          }
          .home-text167 {
            display: inline-block;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-text169 {
            display: inline-block;
          }
          .home-text170 {
            display: inline-block;
          }
          .home-text171 {
            display: inline-block;
          }
          .home-text172 {
            display: inline-block;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-text176 {
            display: inline-block;
          }
          .home-text177 {
            display: inline-block;
          }
          .home-text178 {
            display: inline-block;
          }
          .home-text179 {
            display: inline-block;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text182 {
            display: inline-block;
          }
          .home-text183 {
            display: inline-block;
          }
          .home-text184 {
            display: inline-block;
          }
          .home-text185 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text190 {
            display: inline-block;
          }
          .home-text191 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
          }
          .home-text193 {
            display: inline-block;
          }
          .home-text194 {
            display: inline-block;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text210 {
            display: inline-block;
          }
          .home-text211 {
            display: inline-block;
          }
          .home-text212 {
            display: inline-block;
          }
          .home-text213 {
            display: inline-block;
          }
          .home-text214 {
            display: inline-block;
          }
          .home-text215 {
            display: inline-block;
          }
          .home-text216 {
            display: inline-block;
          }
          .home-text217 {
            display: inline-block;
          }
          .home-text218 {
            display: inline-block;
          }
          .home-text219 {
            display: inline-block;
          }
          .home-text220 {
            display: inline-block;
          }
          .home-text221 {
            display: inline-block;
          }
          .home-text222 {
            display: inline-block;
          }
          .home-text223 {
            display: inline-block;
          }
          .home-text224 {
            display: inline-block;
          }
          .home-text225 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
