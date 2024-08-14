"use client";
import React from "react";
import Script from "next/script";
import Link from "next/link.js";
// import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges || [];

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <div className="about-root">
        <Head>
          <link
            href="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/css/stada-design-agency-template.webflow.9aa283b37.min.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=668bd563537f10fdc41abec9"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
          strategy="beforeInteractive" // 可以使用 `beforeInteractive`, `lazyOnload`, `afterInteractive` 等策略
        />

        <Script
          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/js/webflow.765c1394c.js"
          strategy="afterInteractive"
        />
        <div id="webpage" className="page-wrapper">
          <div className="fullscreen-menu" style={{ display: "none" }}>
            <div className="menu-layout">
              <div className="menu-socials" style={{ opacity: 0 }}>
                <div className="menu-social-wrapper w-dyn-list">
                  <div role="list" className="menu-social-list w-dyn-items">
                    <div
                      role="listitem"
                      className="menu-social-item w-dyn-item"
                    >
                      <a href="#" className="menu-social-link w-inline-block">
                        <img
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c39ba9cdf534275b8533_youtube-logo-black.svg"
                          loading="lazy"
                          alt=""
                          className="icon is-social-menu-icon"
                        />
                      </a>
                    </div>
                    <div
                      role="listitem"
                      className="menu-social-item w-dyn-item"
                    >
                      <a href="#" className="menu-social-link w-inline-block">
                        <img
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c3b3dd27ebf12436fc85_linkedin-logo-black.svg"
                          loading="lazy"
                          alt=""
                          className="icon is-social-menu-icon"
                        />
                      </a>
                    </div>
                    <div
                      role="listitem"
                      className="menu-social-item w-dyn-item"
                    >
                      <a href="#" className="menu-social-link w-inline-block">
                        <img
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abed6/6697c380c49a871545a7ce42_facebook-logo-black.svg"
                          loading="lazy"
                          alt=""
                          className="icon is-social-menu-icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-links-wrapper" style={{ opacity: 0 }}>
                <div
                  className="secondary-links"
                  style={{
                    opacity: 0,
                    transform:
                      "translate3d(0px, 3em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="secondary-links-block">
                    <p className="menu-small-text">General</p>
                    <a href="/store" className="menu-sesondary-link">
                      Store
                    </a>
                    <a href="/contact" className="menu-sesondary-link">
                      Contact
                    </a>
                  </div>
                  <div className="secondary-links-block">
                    <p className="menu-small-text">Get in touch</p>
                    <a href="#" className="menu-sesondary-link">
                      Email
                    </a>
                    <a href="#" className="menu-sesondary-link">
                      Phone
                    </a>
                  </div>
                  <div className="secondary-links-block">
                    <p className="menu-small-text">Template</p>
                    <a
                      href="https://webflow.com/templates/html/stada-agency-website-template"
                      target="_blank"
                      className="menu-sesondary-link"
                    >
                      Buy template
                    </a>
                    <a
                      href="https://www.metrik.studio/webflow-templates"
                      target="_blank"
                      className="menu-sesondary-link"
                    >
                      More templates
                    </a>
                  </div>
                </div>
                <div className="menu-main-links">
                  <a
                    data-w-id="6dce1659-1f78-7d00-7eed-5d600171ac2e"
                    href="/"
                    className="menu-link w-inline-block"
                  >
                    <div
                      className="menu-link-text"
                      style={{
                        transform:
                          "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      Home
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt=""
                      className="icon is-menu-link-icon"
                    />
                  </a>
                  <a
                    data-w-id="9119eb55-b515-23ab-3ca6-d7a893b67ca0"
                    href="/services"
                    className="menu-link w-inline-block"
                  >
                    <div
                      className="menu-link-text"
                      style={{
                        transform:
                          "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      Services
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt=""
                      className="icon is-menu-link-icon"
                    />
                  </a>
                  <a
                    data-w-id="bdd489b8-8031-113b-2ffa-b5e1c5758ce0"
                    href="/features"
                    className="menu-link w-inline-block"
                  >
                    <div
                      className="menu-link-text"
                      style={{
                        transform:
                          "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      Features
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt=""
                      className="icon is-menu-link-icon"
                    />
                  </a>
                  <a
                    data-w-id="03e10da9-d56b-f42b-a87a-0d5fd44d5e75"
                    href="/about"
                    aria-current="page"
                    className="menu-link w-inline-block w--current"
                  >
                    <div
                      className="menu-link-text"
                      style={{
                        transform:
                          "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      About
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt=""
                      className="icon is-menu-link-icon"
                    />
                  </a>
                  <a
                    data-w-id="4f963323-4aa1-e2d1-d1f7-b679d51590a7"
                    href="/journal"
                    className="menu-link w-inline-block"
                  >
                    <div
                      className="menu-link-text"
                      style={{
                        transform:
                          "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      Journal
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt=""
                      className="icon is-menu-link-icon"
                    />
                  </a>
                </div>
              </div>
              <div
                data-w-id="b1ec2d20-05dc-077d-da18-86120beceaae"
                className="close-button"
                style={{ opacity: 0 }}
              >
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6697fb309b7a20920ffdcdb1_close_24dp_181720_FILL0_wght500_GRAD0_opsz24.svg"
                  loading="lazy"
                  alt=""
                  className="close-button-icon"
                  style={{}}
                />
                <div className="menu-close-text">Close</div>
              </div>
              <div
                className="menu-background-color"
                style={{
                  transform:
                    "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              />
              <div className="menu-delay-for-animations" />
            </div>
          </div>

          <main className="main">
            <div className="about-hero">
              <div className="container">
                <div className="about-hero-content">
                  <div className="about-hero-title-block">
                    <h1
                      data-w-id="8b401037-45f7-eb88-2888-8b081e39589e"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      className="heading is-about-hero-title"
                    >
                      About
                    </h1>
                    <a
                      data-w-id="70be419f-58bd-64a7-48cc-18d3ea7f1d52"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      href="#explore"
                      className="simple-link is-explore"
                    >
                      Get to know us
                    </a>
                  </div>
                  <div className="about-hero-line" />
                  <div className="about-hero-content-grid">
                    <div
                      id="w-node-_8b401037-45f7-eb88-2888-8b081e3958a6-c41abf73"
                      className="about-hero-content-grid-image"
                    >
                      <div className="reveal-image-trigger">
                        <img
                          loading="lazy"
                          alt="Office desk"
                          src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8beb73afc08f5ca4ddb2_stada-potrait-img-5.webp"
                          sizes="(max-width: 479px) 84vw, (max-width: 767px) 90vw, (max-width: 991px) 180px, (max-width: 1439px) 12vw, (max-width: 1919px) 180px, 192px"
                          srcSet="
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8beb73afc08f5ca4ddb2_stada-potrait-img-5-p-500.webp   500w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8beb73afc08f5ca4ddb2_stada-potrait-img-5-p-800.webp   800w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8beb73afc08f5ca4ddb2_stada-potrait-img-5-p-1080.webp 1080w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8beb73afc08f5ca4ddb2_stada-potrait-img-5-p-1600.webp 1600w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8beb73afc08f5ca4ddb2_stada-potrait-img-5-p-2000.webp 2000w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8beb73afc08f5ca4ddb2_stada-potrait-img-5-p-2600.webp 2600w,
                                          https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8beb73afc08f5ca4ddb2_stada-potrait-img-5.webp        2912w
                                      "
                          className="cover-image"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                        <div
                          className="bg-for-animation"
                          style={{ display: "block" }}
                        />
                      </div>
                    </div>
                    <div
                      data-w-id="8b401037-45f7-eb88-2888-8b081e3958a9"
                      style={{
                        transform:
                          "translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 0,
                      }}
                      className="about-hero-content-text"
                    >
                      <p className="paragraph">
                        From innovative headphones to sleek smart rings and
                        other tech gadgets, we are committed to delivering
                        exceptional products that embody both functionality and
                        style.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section id="explore" className="section with-borders">
              <section className="section is-3d-content-section">
                <div className="container">
                  <div className="_3d-content-padding">
                    <div className="_3d-block" style={{}}>
                      <div className="_3d-content-image" style={{}}>
                        <div className="reveal-image-trigger">
                          <img
                            loading="lazy"
                            alt="Portrait of the team"
                            src="https://www.nikoand.jp/wp-content/uploads/2024/07/ws1.jpg"
                            className="cover-image"
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          />
                          <div
                            className="bg-for-animation"
                            style={{ display: "block" }}
                          />
                        </div>
                      </div>
                      <h2 className="heading is-3d-content-title" style={{}}>
                        "設計您的數位未來，我們讓創意發光。"
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="_3d-section-overlay" />
                <div className="parallax-trigger">
                  <div
                    className="parallax-layout"
                    style={{
                      willChange: "transform",
                      transform:
                        "translate3d(0px, 4.9984%, 0px) scale3d(1.00001, 1.00001, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669a9a0aae2915df8b36db88_stada-img-office-2.webp"
                      loading="lazy"
                      alt="Office spaces"
                      className="cover-image"
                    />
                    <div className="bg-for-animation" />
                  </div>
                </div>
              </section>
            </section>
            <section id="logos" className="section with-borders">
              <div className="padding small-paddings">
                <div
                  data-w-id="e8ad4759-879f-965a-e711-3a6051ba16a9"
                  className="logo-carousel"
                >
                  <div className="logo-carousel-block" style={{}}>
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf0f_logoipsum-256%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abefd_logoipsum-286%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf08_logoipsum-239%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf06_logoipsum-297%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf01_logoipsum-317%20(1).svg"
                      className="logo-carousel-image"
                    />
                  </div>
                  <div className="logo-carousel-block" style={{}}>
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf0f_logoipsum-256%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abefd_logoipsum-286%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf08_logoipsum-239%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf06_logoipsum-297%20(1).svg"
                      className="logo-carousel-image"
                    />
                    <img
                      width={600}
                      height={400}
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41abf01_logoipsum-317%20(1).svg"
                      className="logo-carousel-image"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <div className="padding">
                  <div className="w-layout-grid about-content">
                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad959-c41abf73"
                      className="about-grid-content"
                    >
                      <div className="text-dot-block">
                        <div className="dot" />
                        <p className="paragraph">Our journey</p>
                      </div>
                      <h2 className="heading is-medium-title">
                        "讓您的網站成為品牌的最佳代言人。"
                      </h2>
                      <p className="paragraph">
                        這些slogan強調了設計的創新性、專業性以及對客戶品牌的提升效果，應該能夠很好地傳達你的品牌價值。
                      </p>
                    </div>
                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad962-c41abf73"
                      className="about-grid-image"
                    >
                      <div className="reveal-image-trigger">
                        <img
                          loading="lazy"
                          alt="Portrait of the team"
                          src="https://www.nikoand.jp/wp-content/uploads/2024/07/KV-22-1024x1024.jpg"
                          sizes="(max-width: 479px) 84vw, (max-width: 1919px) 90vw, 1440px"
                          className="cover-image"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                        <div
                          className="bg-for-animation"
                          style={{ display: "block" }}
                        />
                      </div>
                    </div>
                    <div className="about-grid-image">
                      <div className="reveal-image-trigger">
                        <img
                          loading="lazy"
                          alt="Portrait of the team"
                          src="https://www.nikoand.jp/wp-content/uploads/2024/08/W_bnr_1080_2.jpg"
                          sizes="(max-width: 479px) 84vw, (max-width: 1919px) 90vw, 1440px"
                          srcSet="
                                        
                                      "
                          className="cover-image"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1.3, 1.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                        <div
                          className="bg-for-animation"
                          style={{ display: "block" }}
                        />
                      </div>
                    </div>
                    <div
                      id="w-node-cfc4cd49-5733-23b2-3f75-0d0eec1ad968-c41abf73"
                      className="about-grid-content"
                    >
                      <div className="text-dot-block">
                        <div className="dot" />
                        <p className="paragraph">網頁設計</p>
                      </div>
                      <h2 className="heading is-medium-title">
                        "您的網站，我們的專業。聯手創造驚豔體驗。"
                      </h2>
                      <Link
                        href="/"
                        data-w-id="effe7372-cb77-165a-ca8a-daed52fe2ee6"
                        className="button-wrapper w-inline-block"
                      >
                        <div className="button-layout">
                          <p href="/about" className="button-text" style={{}}>
                            了解更多
                          </p>
                          <div className="button-bg" style={{}} />
                        </div>
                        <div className="button-icon-block">
                          <img
                            src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668d5cc317612b6e859a4807_arrow_forward_24dp_17161F_FILL0_wght500_GRAD0_opsz24.svg"
                            loading="lazy"
                            alt=""
                            className="button-icon"
                            style={{}}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <section class="section with-flex">
    <div class="container">
      <div class="padding">
        <div class="spectacular-images">
          <div
            data-w-id="3ed0f563-c951-0c1a-bb4b-0e2d9352990f"
            class="spectacular-image-large"
            style="will-change: transform; transform: translate3d(0px, -1.9996rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <div class="parallax-trigger">
              <div
                class="parallax-layout"
                style="will-change: transform; transform: translate3d(0px, 4.9984%, 0px) scale3d(1.00001, 1.00001, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669b8e4485f1cc5406b2cbec_stada-potrait-img-8.webp"
                  loading="lazy" alt="Portrait of the team"
                  class="cover-image" />
                <div class="bg-for-animation"></div>
              </div>
            </div>
          </div>
          <div
            data-w-id="21f8228d-903f-f406-0ef6-35dca888068a"
            class="spectacular-image-medium"
            style="will-change: transform; transform: translate3d(0px, -2.9994rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <div class="parallax-trigger">
              <div
                class="parallax-layout"
                style="will-change: transform; transform: translate3d(0px, 4.9984%, 0px) scale3d(1.00001, 1.00001, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d60214feb41cb313bb_stada-img-new-2.webp"
                  loading="lazy" alt class="cover-image" />
                <div class="bg-for-animation"></div>
              </div>
            </div>
          </div>
          <div
            data-w-id="2dc9d7e7-658f-2f6d-9837-108851dbe9fd"
            class="spectacular-image-small"
            style="will-change: transform; transform: translate3d(0px, -3.9992rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            <div class="parallax-trigger">
              <div
                class="parallax-layout"
                style="will-change: transform; transform: translate3d(0px, 4.9984%, 0px) scale3d(1.00001, 1.00001, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6696a2d6c9f3c1e5f2dcd7aa_stada-img-new-1.webp"
                  loading="lazy" alt class="cover-image" />
                <div class="bg-for-animation"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-w-id="8b6021f9-e74a-17c5-611d-dff67e2d94ce"
      class="layout-for-large-paragraphs" style>
      <div class="large-bg-paragraphs">
        <p
          data-w-id="8ccb961c-6524-79d6-7485-b2eb0779e880"
          class="large-bg-paragraph is-2nd"
          style="transform: translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;">
          Company
        </p>
        <p
          data-w-id="8ccb961c-6524-79d6-7485-b2eb0779e882"
          class="large-bg-paragraph"
          style="transform: translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;">
          Company
        </p>
        <p
          data-w-id="8ccb961c-6524-79d6-7485-b2eb0779e884"
          class="large-bg-paragraph is-2nd"
          style="transform: translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;">
          Company
        </p>
      </div>
    </div>
  </section> */}
            {/* <section class="section">
    <div class="container">
      <div class="padding">
        <div class="vertical-flex with-gap">
          <div
            data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765ae"
            style="transform: translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
            class="about-grid">
            <a data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765af"
              href="/journal" class="about-grid-block w-inline-block">
              <div class="about-title-block">
                <h3 class="heading is-large-cta-title">Journal</h3>
                <div data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765b3"
                  class="about-grid-title-line" style></div>
              </div>
              <div class="about-grid-description">
                <div class="max-width-25" style><p
                    class="paragraph">Follow our journal for expert
                    articles and tips to keep you ahead of the
                    curve.</p></div>
                <p data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765b8"
                  class="simple-link" style>Read the Journal</p>
              </div>
              <div data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765ba"
                class="about-grid-bg" style></div>
            </a>
            <a data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765bb"
              href="/store"
              class="about-grid-block is-2nd w-inline-block">
              <div class="about-title-block">
                <h3 class="heading is-large-cta-title">Store</h3>
                <div data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765bf"
                  class="about-grid-title-line" style></div>
              </div>
              <div class="about-grid-description">
                <div class="max-width-25" style><p class="paragraph">Find
                    the perfect smart devices to enhance your everyday
                    life.</p></div>
                <p data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765c4"
                  class="simple-link" style>Show now</p>
              </div>
              <div data-w-id="82a778c7-2af0-72ec-3fc8-7b421f1765c6"
                class="about-grid-bg" style></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section> */}
            <section className="section with-borders">
              <div className="container">
                <div className="padding small-paddings">
                  <div className=" ">
                    <div
                      className="vertical-flex with-small-gap plans-wrap "
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <h3
                        className="heading is-regular"
                        style={{
                          marginBottom: 30,
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        Shape the future of tech with us
                      </h3>
                    </div>
                    <div
                      className="jobs"
                      style={{ display: "flex", padding: 0 }}
                    >
                      <div
                        id="w-node-_9d02a341-146a-d088-349b-f68535a2ecdc-35a2ecda"
                        className="job-card"
                        srtyle="width:400px; display:flex; flex-direction:column"
                      >
                        <p className="job-card-role">套版網站(NT.40000)</p>
                        <span>
                          <div style={{ margin: 0, padding: 0 }}>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                            <p className="plan-item">套版網站</p>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                          </div>
                        </span>
                        {/* <div class="job-card-categories">
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f61d3e81308165ce58_responsive_layout_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">方案一</p>
                </div>
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6844afe9fcdf5a1af_thumb_up_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">$200,000 per year</p>
                </div>
              </div> */}
                        <div
                          className="job-card-link-flex"
                          style={{
                            background: "rgb(115, 208, 102)",
                            color: "white",
                          }}
                        >
                          <a href="/contact" className="simple-link">
                            Contact us
                          </a>
                        </div>
                        {/* <div style="height: 400px;">
                Title
              </div> */}
                      </div>
                      <div
                        id="w-node-_90fc4fc9-5875-a940-a16d-30733a08bafa-35a2ecda"
                        className="job-card"
                      >
                        <p className="job-card-role">購物網站(NT.60000)</p>
                        <span>
                          <div style={{ margin: 0, padding: 0 }}>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                            <p className="plan-item">套版網站</p>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                          </div>
                        </span>
                        {/* <div class="job-card-categories">
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f61d3e81308165ce58_responsive_layout_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">Remote or office</p>
                </div>
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6844afe9fcdf5a1af_thumb_up_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">$180,000 per year</p>
                </div>
              </div> */}
                        <div className="job-card-link-flex">
                          <a href="/contact" className="simple-link">
                            Contact us
                          </a>
                        </div>
                      </div>
                      <div
                        id="w-node-_01078e3d-0c2e-e80d-0be2-5a38ca83ccf4-35a2ecda"
                        className="job-card bg-green-500"
                      >
                        <p className="job-card-role">客製化網站(NT.80000)</p>
                        <span>
                          <div style={{ margin: 0, padding: 0 }}>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                            <p className="plan-item">套版網站</p>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                            <p className="plan-item">形象網站 ＋ ＳＥＯ 優化</p>
                          </div>
                        </span>
                        {/* <div class="job-card-categories">
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f61d3e81308165ce58_responsive_layout_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">Remote or office</p>
                </div>
                <div class="job-card-category">
                  <div class="job-card-icon">
                    <img
                      src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/669692f6844afe9fcdf5a1af_thumb_up_24dp_FFFFFF_FILL0_wght500_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt
                      class="icon is-job-icon" />
                  </div>
                  <p class="job-card-text-small">$120,000 per year</p>
                </div>
              </div> */}
                        <div className="job-card-link-flex">
                          <a href="/contact" className="simple-link">
                            Contact us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post.title} | Next.js Blog Example with ${CMS_NAME}`}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
}
