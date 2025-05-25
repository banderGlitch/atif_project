"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "../static/images/icons/heroicons/HeroImg_1.png";
import PlayIcon from "../static/images/svg/PlayIcon";
import SocialBar from "./SocialBar";
import "../static/styles/ComponentCss/HeroStyle.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="page-sections">
        <div className="section-1">
          <div className="wrap-page hero__container">
            {/* Social Bar - visible only on desktop */}
            <div className="social-bar d-none d-lg-block">
              <SocialBar />
            </div>

            {/* Main Hero Content */}
            <div className="content">
              <div className="left">
                <p className="sub-heading">Accurate Business Valuation Services</p>

                <h1 className="main-heading-blue">
                  Unlock Your <br /> True Company Value
                </h1>

                <p className="main-para">
                  At Clybourne, we simplify business valuation—delivering <br />
                  fast, affordable, and accurate company valuations to <br />
                  empower growth with clarity.
                </p>

                <div className="buttons">
                  <button className="cta-button cta-talk">Let’s Talk!</button>
                  <button className="cta-button cta-buy">Buy Now</button>
                </div>

                <div className="video-demo">
                  <div className="play-icon-wrapper">
                    <PlayIcon />
                  </div>
                  <p className="align-center main-para">Watch Demo</p>
                </div>
              </div>

              <div className="right">
                <Image src={HeroImage} alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
