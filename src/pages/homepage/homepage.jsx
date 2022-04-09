import tophd from "../../assets/images/homepage/tophd.png";
import registar from "../../assets/images/homepage/registar.png";
import logbg from "../../assets/images/homepage/log-bg.png";
import instition2 from "../../assets/images/homepage/instition2.png";
import public2 from "../../assets/images/homepage/public2.png";
import slide1 from "../../assets/images/homepage/slide1.jpg";
import slide2 from "../../assets/images/homepage/slide2.jpg";
import slide3 from "../../assets/images/homepage/slide3.jpg";
import arrowdown from "../../assets/images/homepage/arrow-down.svg";
import centfoo2 from "../../assets/images/homepage/centfoo2.png";
import "./homepage.styles.css";

const Homepage = () => {
  return (
    <>
      <div>
        <div>
          <title>Civil Registration Systems</title>
          <link
            href="../../../web/content/styles.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../../../web/content/stylemain.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="../../../web/content/style.css"
            type="text/css"
            media="screen"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="../../../web/content/anylinkmenu.css"
          />
          <div></div>
          <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
            {/* start to window load pop up javascript */}
            {/*


*/}
            {/* end  to window load pop up javascript */}
            {/* start to window load pop up css */}
            {/* <link href="../../../web/css/popup_light_box.css" rel="stylesheet" type="text/css" /> */}
            {/* start to window load pop up css */}
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n\n.nav ul{\nlist-style:none;\nmargin:0px;\npadding:0px;\n}\n.nav li{\nmargin:1px;\nfloat:left;\n}\n.nav li a{\n\n\n\nfont-family: arial;\n /* font-style: normal;*/\n  font-weight: bold;\n  font-size:13px;\n/*color:#345797;*/\n/*border-right:1px solid #CCC;*/\ncolor:#ffffff;\ntext-align:center;\ntext-decoration:none;\npadding-left:15px; padding-right:15px;\n\n\nborder-right:1px solid #E2E2E2;\n}\n.nav li a:hover{\n\n\ncolor:white;\n}\n\n\n.captcha{width:100px;\nheight:23px;\n}\n.srchreg{\nfont-family:Arial, Helvetica, sans-serif;\nfont-size:16px;\ncolor:white;\ntext-align:center;\nfont-weight:bold;\n}\n.login_watag{\ncolor:white;\n}\n.sign a{\ncolor:white;\nfont-size:12px;\nfont-family:Arial, Helvetica, sans-serif;\nfont-weight:normal;\n}\n\n.blink_text { \n\n        -webkit-animation-name: blinker;\n -webkit-animation-duration: 1s;\n -webkit-animation-timing-function: linear;\n -webkit-animation-iteration-count: infinite;\n\n -moz-animation-name: blinker;\n -moz-animation-duration: 1s;\n -moz-animation-timing-function: linear;\n -moz-animation-iteration-count: infinite;\n animation-name: blinker;\n animation-duration: 1s;\n animation-timing-function: linear; \n    animation-iteration-count: infinite; color: blue; \n}\n\n@-moz-keyframes blinker {\n    0% { opacity: 1.0; }\n    50% { opacity: 0.0; }\n    100% { opacity: 1.0; } \n}\n\n@-webkit-keyframes blinker {  \n    0% { opacity: 1.0; }\n    50% { opacity: 0.0; }\n    100% { opacity: 1.0; } \n} \n\n@keyframes blinker {  \n    0% { opacity: 1.0; } \n    50% { opacity: 0.0; }      \n    100% { opacity: 1.0; } \n} \n\n.loader {\n  border: 0px solid #ffffff;\n  border-radius: 50%;\n  border-top: 5px solid #00afa1;\n  width: 30px;\n  height: 30px;\n  -webkit-animation: spin 0.8s linear infinite; /* Safari */\n  animation: spin 0.8s linear infinite;\n  display:none;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n",
              }}
            />
            {/**/}
            {/* */}
            {/*onload="noBack();" onpageshow="if (event.persisted) noBack();" onunload="" onselectstart="return false" oncontextmenu="return false;">*/}
          </table>
          <table
            width="100%"
            border={0}
            cellPadding={0}
            cellSpacing={0}
            align="center"
          >
            <tbody>
              <tr>
                <td valign="top">
                  <table
                    border={0}
                    align="center"
                    cellPadding={0}
                    cellSpacing={0}
                    className="whitebg"
                    style={{ backgroundColor: "white" }}
                  >
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={tophd}
                            width={1010}
                            height={115}
                            border={0}
                            useMap="#Map"
                            alt=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          bgcolor="#292C3B"
                          height={30}
                          style={{
                            lineHeight: "30px",
                            backgroundImage:
                              "url(../../../web/images-other/topnav.png)",
                          }}
                        >
                          <table
                            width={980}
                            border={0}
                            cellSpacing={0}
                            cellPadding={0}
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div className="nav">
                                    <ul>
                                      <li>
                                        <a
                                          href="#"
                                          className="menuanchorclass"
                                          rel="anylinkmenu4"
                                        >
                                          RBD Act &amp; Rules&nbsp;
                                          <img
                                            src={arrowdown}
                                            style={{ marginTop: "14px" }}
                                            width={16}
                                            height={16}
                                          />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="../../../../circulars.html">
                                          Circulars
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="menuanchorclass"
                                          rel="anylinkmenu1"
                                        >
                                          Annual Reports&nbsp;
                                          <img
                                            src={arrowdown}
                                            style={{ marginTop: "14px" }}
                                            width={16}
                                            height={16}
                                          />
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="menuanchorclass"
                                          rel="anylinkmenu3"
                                        >
                                          Forms&nbsp;
                                          <img
                                            src={arrowdown}
                                            style={{ marginTop: "14px" }}
                                            width={16}
                                            height={16}
                                          />
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="menuanchorclass"
                                          rel="anylinkmenu2"
                                        >
                                          Manuals&nbsp;
                                          <img
                                            src={arrowdown}
                                            style={{ marginTop: "14px" }}
                                            width={16}
                                            height={16}
                                          />
                                        </a>
                                      </li>
                                      <li style={{ borderRight: "block" }}>
                                        <a
                                          href="#"
                                          className="menuanchorclass"
                                          rel="anylinkmenu5"
                                          style={{ borderRight: "block" }}
                                        >
                                          FAQs&nbsp;
                                          <img
                                            src={arrowdown}
                                            style={{ marginTop: "14px" }}
                                            width={16}
                                            height={16}
                                          />
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="../../../../../web/uploads/download/Procedure_for_B_&_D_Registration.pdf"
                                          target="_blank"
                                          style={{ borderRight: "none" }}
                                        >
                                          How To Apply
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                                {/*<td ><a href="http://helpdesk.logicsoft.online/Apply/NewIssue.aspx?ProjectID=CRS&HELPDESK=General" target="_blank" ><font color="white"><strong>Tech Support Help Desk &nbsp; </font></a></td>
                                 */}
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top">
                          <table
                            width={980}
                            border={0}
                            align="center"
                            cellPadding={0}
                            cellSpacing={0}
                          >
                            <tbody>
                              <tr>
                                <td valign="top">
                                  <table
                                    width={725}
                                    border={0}
                                    cellSpacing={0}
                                    cellPadding={0}
                                  >
                                    <tbody>
                                      <tr>
                                        <td>
                                          <table
                                            width={729}
                                            border={0}
                                            cellSpacing={0}
                                            cellPadding={0}
                                            bgcolor="#ffffff"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style={{
                                                    height: "291px",
                                                    verticalAlign: "top",
                                                  }}
                                                >
                                                  {/*<div id="msg"> <font size=4 color=#ff0000>If users are unable to login, Please use forget password option to reset password. !</font></div>*/}
                                                  {/*<div id="msg"> <font size=4 color=#ff0000>Due to Data Center maintenance activity, the website will not be available from 11-Sept-2021 12:01 AM to 13-Sept-2021 6:00 AM. Inconvenience caused is regretted !</font></div>*/}
                                                  <div id="header">
                                                    <div className="wrap">
                                                      <div
                                                        id="slide-holder"
                                                        style={{
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        <div
                                                          id="slide-runner"
                                                          style={{
                                                            verticalAlign:
                                                              "top",
                                                          }}
                                                        >
                                                          {" "}
                                                          <a href="#">
                                                            <img
                                                              id="slide-img-1"
                                                              src={slide1}
                                                              className="slide"
                                                              alt=""
                                                              style={{
                                                                border: "0px",
                                                                cursor:
                                                                  "default",
                                                                left: "-2000px",
                                                                display:
                                                                  "inline",
                                                              }}
                                                              height="284px"
                                                            />
                                                          </a>{" "}
                                                          <a href="#">
                                                            <img
                                                              id="slide-img-2"
                                                              src={slide2}
                                                              className="slide"
                                                              alt=""
                                                              style={{
                                                                border: "0px",
                                                                cursor:
                                                                  "default",
                                                                left: "-1000px",
                                                                display:
                                                                  "inline",
                                                              }}
                                                              height="284px"
                                                            />
                                                          </a>{" "}
                                                          <a href="#">
                                                            <img
                                                              id="slide-img-3"
                                                              src={slide3}
                                                              className="slide"
                                                              alt=""
                                                              style={{
                                                                border: "0px",
                                                                cursor:
                                                                  "default",
                                                                left: "0px",
                                                                display:
                                                                  "inline",
                                                              }}
                                                              height="284px"
                                                            />
                                                          </a>
                                                          <div
                                                            id="slide-controls"
                                                            style={{
                                                              display: "block",
                                                            }}
                                                          >
                                                            <p id="slide-nav">
                                                              <a
                                                                id="slide-link-0"
                                                                href="#"
                                                                onclick="slider.slide(0);return false;"
                                                                onfocus="this.blur();"
                                                                className
                                                              >
                                                                1
                                                              </a>
                                                              <a
                                                                id="slide-link-1"
                                                                href="#"
                                                                onclick="slider.slide(1);return false;"
                                                                onfocus="this.blur();"
                                                                className
                                                              >
                                                                2
                                                              </a>
                                                              <a
                                                                id="slide-link-2"
                                                                href="#"
                                                                onclick="slider.slide(2);return false;"
                                                                onfocus="this.blur();"
                                                                className="on"
                                                              >
                                                                3
                                                              </a>
                                                            </p>
                                                          </div>
                                                        </div>
                                                        {/*content featured gallery here */}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  style={{ paddingTop: "10px" }}
                                                >
                                                  <table
                                                    width={700}
                                                    border={0}
                                                    cellSpacing={0}
                                                    cellPadding={0}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          bgcolor="#dbdbdb"
                                                          height={7}
                                                        />
                                                      </tr>
                                                      <tr>
                                                        <td>
                                                          <table
                                                            width={720}
                                                            border={0}
                                                            cellSpacing={0}
                                                            cellPadding={0}
                                                          >
                                                            <tbody>
                                                              <tr>
                                                                <td
                                                                  bgcolor="#dbdbdb"
                                                                  valign="top"
                                                                >
                                                                  <table
                                                                    width={230}
                                                                    border={0}
                                                                    align="center"
                                                                    cellPadding={
                                                                      0
                                                                    }
                                                                    cellSpacing={
                                                                      0
                                                                    }
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <td valign="top">
                                                                          <table
                                                                            width={
                                                                              224
                                                                            }
                                                                            border={
                                                                              0
                                                                            }
                                                                            align="center"
                                                                            cellPadding={
                                                                              0
                                                                            }
                                                                            cellSpacing={
                                                                              0
                                                                            }
                                                                          >
                                                                            <tbody>
                                                                              <tr>
                                                                                <td>
                                                                                  <img
                                                                                    src={
                                                                                      registar
                                                                                    }
                                                                                    width={
                                                                                      224
                                                                                    }
                                                                                    height={
                                                                                      150
                                                                                    }
                                                                                    alt=""
                                                                                  />
                                                                                </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  bgcolor="#FFFFFF"
                                                                                  className="regitxt"
                                                                                >
                                                                                  Registrar
                                                                                </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  bgcolor="#FFFFFF"
                                                                                  className="ntxt"
                                                                                  height={
                                                                                    10
                                                                                  }
                                                                                />
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  align="left"
                                                                                  bgcolor="#FFFFFF"
                                                                                  className="ntxt1"
                                                                                  style={{
                                                                                    lineHeight:
                                                                                      "20px",
                                                                                    paddingRight:
                                                                                      "3px",
                                                                                    textAlign:
                                                                                      "",
                                                                                  }}
                                                                                >
                                                                                  <div className="font_size_change_container">
                                                                                    {" "}
                                                                                    Registrars
                                                                                    have
                                                                                    been
                                                                                    appointed
                                                                                    for
                                                                                    each
                                                                                    local
                                                                                    area
                                                                                    under
                                                                                    Section
                                                                                    7
                                                                                    of
                                                                                    the
                                                                                    RBD
                                                                                    Act,
                                                                                    1969
                                                                                    for
                                                                                    registration
                                                                                    of
                                                                                    births
                                                                                    and
                                                                                    deaths
                                                                                    occurred
                                                                                    under
                                                                                    their
                                                                                    jurisdictional
                                                                                    area.
                                                                                    Registrars
                                                                                    may
                                                                                    belong
                                                                                    to
                                                                                    a
                                                                                    municipality,
                                                                                    Panchayat,
                                                                                    Government
                                                                                    health
                                                                                    institution
                                                                                    or
                                                                                    other
                                                                                    local
                                                                                    authority
                                                                                    appointed
                                                                                    by
                                                                                    the
                                                                                    State
                                                                                    Government..{" "}
                                                                                  </div>
                                                                                </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  bgcolor="#FFFFFF"
                                                                                  style={{
                                                                                    height:
                                                                                      "10px",
                                                                                  }}
                                                                                />
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  align="right"
                                                                                  bgcolor="#FFFFFF"
                                                                                  className="ntxt"
                                                                                  style={{
                                                                                    paddingRight:
                                                                                      "5px",
                                                                                    fontSize:
                                                                                      "11px",
                                                                                  }}
                                                                                >
                                                                                  &nbsp;
                                                                                  {/*<a href="#">Read More</a>*/}
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td align="center">
                                                                          <img
                                                                            src={
                                                                              centfoo2
                                                                            }
                                                                            width={
                                                                              224
                                                                            }
                                                                            height={
                                                                              25
                                                                            }
                                                                            alt=""
                                                                          />
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                                <td
                                                                  bgcolor="#dbdbdb"
                                                                  valign="top"
                                                                >
                                                                  <table
                                                                    width={230}
                                                                    border={0}
                                                                    align="center"
                                                                    cellPadding={
                                                                      0
                                                                    }
                                                                    cellSpacing={
                                                                      0
                                                                    }
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <td>
                                                                          <table
                                                                            width={
                                                                              224
                                                                            }
                                                                            border={
                                                                              0
                                                                            }
                                                                            align="center"
                                                                            cellPadding={
                                                                              0
                                                                            }
                                                                            cellSpacing={
                                                                              0
                                                                            }
                                                                          >
                                                                            <tbody>
                                                                              <tr>
                                                                                <td>
                                                                                  <img
                                                                                    src={
                                                                                      instition2
                                                                                    }
                                                                                    width={
                                                                                      224
                                                                                    }
                                                                                    height={
                                                                                      150
                                                                                    }
                                                                                    alt=""
                                                                                  />
                                                                                </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  bgcolor="#FFFFFF"
                                                                                  className="regitxt"
                                                                                >
                                                                                  Institutions
                                                                                </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  bgcolor="#FFFFFF"
                                                                                  className="ntxt"
                                                                                  height={
                                                                                    10
                                                                                  }
                                                                                />
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  align="left"
                                                                                  bgcolor="#FFFFFF"
                                                                                  className="ntxt1"
                                                                                  style={{
                                                                                    lineHeight:
                                                                                      "20px",
                                                                                    paddingRight:
                                                                                      "3px",
                                                                                  }}
                                                                                >
                                                                                  <div className="font_size_change_container">
                                                                                    {" "}
                                                                                    <span>
                                                                                      As
                                                                                      per
                                                                                      the
                                                                                      registration
                                                                                      of
                                                                                      Births
                                                                                      and
                                                                                      Deaths
                                                                                      Act,
                                                                                      1969
                                                                                      in
                                                                                      respect
                                                                                      of
                                                                                      births
                                                                                      and
                                                                                      deaths
                                                                                      in
                                                                                      a
                                                                                      hospital,
                                                                                      health
                                                                                      center,
                                                                                      maternity
                                                                                      or
                                                                                      nursing
                                                                                      home
                                                                                      or
                                                                                      other
                                                                                      like
                                                                                      institutions,
                                                                                      responsibility
                                                                                      of
                                                                                      informing
                                                                                      the
                                                                                      events
                                                                                      to
                                                                                      the
                                                                                      registrar...{" "}
                                                                                    </span>{" "}
                                                                                  </div>
                                                                                </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  bgcolor="#FFFFFF"
                                                                                  style={{
                                                                                    height:
                                                                                      "10px",
                                                                                  }}
                                                                                />
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  align="right"
                                                                                  bgcolor="#FFFFFF"
                                                                                  className="ntxt"
                                                                                  style={{
                                                                                    paddingRight:
                                                                                      "5px",
                                                                                    fontSize:
                                                                                      "11px",
                                                                                  }}
                                                                                >
                                                                                  &nbsp;
                                                                                  {/*<a href="#">Read More</a>*/}
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td align="center">
                                                                          <img
                                                                            src={
                                                                              centfoo2
                                                                            }
                                                                            width={
                                                                              224
                                                                            }
                                                                            height={
                                                                              25
                                                                            }
                                                                            alt=""
                                                                          />
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                                <td
                                                                  valign="top"
                                                                  bgcolor="#dbdbdb"
                                                                >
                                                                  <table
                                                                    width={230}
                                                                    border={0}
                                                                    align="center"
                                                                    cellPadding={
                                                                      0
                                                                    }
                                                                    cellSpacing={
                                                                      0
                                                                    }
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <td>
                                                                          <table
                                                                            width={
                                                                              224
                                                                            }
                                                                            border={
                                                                              0
                                                                            }
                                                                            align="center"
                                                                            cellPadding={
                                                                              0
                                                                            }
                                                                            cellSpacing={
                                                                              0
                                                                            }
                                                                          >
                                                                            <tbody>
                                                                              <tr>
                                                                                <td>
                                                                                  <img
                                                                                    src={
                                                                                      public2
                                                                                    }
                                                                                    width={
                                                                                      224
                                                                                    }
                                                                                    height={
                                                                                      150
                                                                                    }
                                                                                    alt=""
                                                                                  />
                                                                                </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  bgcolor="#FFFFFF"
                                                                                  className="regitxt"
                                                                                >
                                                                                  Public
                                                                                </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  bgcolor="#FFFFFF"
                                                                                  className="ntxt"
                                                                                  height={
                                                                                    10
                                                                                  }
                                                                                />
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  align="left"
                                                                                  bgcolor="#FFFFFF"
                                                                                  className="ntxt1"
                                                                                  style={{
                                                                                    lineHeight:
                                                                                      "20px",
                                                                                    paddingRight:
                                                                                      "3px",
                                                                                  }}
                                                                                >
                                                                                  <div className="font_size_change_container">
                                                                                    {" "}
                                                                                    <span>
                                                                                      In
                                                                                      case
                                                                                      of
                                                                                      Birth
                                                                                      and
                                                                                      Death,
                                                                                      Citizen
                                                                                      should
                                                                                      inform
                                                                                      about
                                                                                      the
                                                                                      event
                                                                                      within
                                                                                      21
                                                                                      days
                                                                                      to
                                                                                      the
                                                                                      registrar
                                                                                      of
                                                                                      their
                                                                                      jurisdiction.
                                                                                      In
                                                                                      case
                                                                                      Death,
                                                                                      citizen
                                                                                      should
                                                                                      place
                                                                                      Doctor’s
                                                                                      certificate
                                                                                      in
                                                                                      original
                                                                                      form
                                                                                      along
                                                                                      with
                                                                                      burial/cremation....
                                                                                    </span>
                                                                                  </div>
                                                                                </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  align="right"
                                                                                  bgcolor="#FFFFFF"
                                                                                  className="ntxt"
                                                                                  style={{
                                                                                    paddingRight:
                                                                                      "5px",
                                                                                    height:
                                                                                      "10px",
                                                                                  }}
                                                                                />
                                                                              </tr>
                                                                              <tr>
                                                                                <td
                                                                                  align="right"
                                                                                  bgcolor="#FFFFFF"
                                                                                  className="ntxt"
                                                                                  style={{
                                                                                    paddingRight:
                                                                                      "5px",
                                                                                    fontSize:
                                                                                      "11px",
                                                                                  }}
                                                                                >
                                                                                  &nbsp;
                                                                                  {/*<a href="#">Read More</a>*/}
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td align="center">
                                                                          <img
                                                                            src={
                                                                              centfoo2
                                                                            }
                                                                            width={
                                                                              224
                                                                            }
                                                                            height={
                                                                              25
                                                                            }
                                                                            alt=""
                                                                          />
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td />
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td />
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td
                                  valign="top"
                                  style={{
                                    verticalAlign: "top",
                                    paddingTop: "5px",
                                  }}
                                  className="style5"
                                >
                                  <table
                                    width={250}
                                    border={0}
                                    align="right"
                                    cellPadding={0}
                                    cellSpacing={0}
                                  >
                                    {/*<tr>
<td align="center" valign="top"><a href="#"> <img src="../../../web/images-other/check1.png" width="275" height="50" alt="how to apply" border="0" /> </a> </td>
</tr>*/}
                                    <tbody>
                                      <tr>
                                        <td style={{ height: "6px" }} />
                                      </tr>
                                      {/* Login screen start*/}
                                      <tr valign="top">
                                        <td>
                                          <table
                                            width={275}
                                            border={0}
                                            cellPadding={0}
                                            cellSpacing={0}
                                            style={{
                                              backgroundImage: `url(${logbg})`,
                                              backgroundRepeat: "no-repeat",
                                              height: "340px",
                                            }}
                                          >
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <form
                                                    action
                                                    method="post"
                                                    autoComplete="off"
                                                    name="frmLogin"
                                                    id="frmLogin"
                                                  >
                                                    <input
                                                      type="hidden"
                                                      name="Login[_csrf_token]"
                                                      defaultValue="1f589f4c370bc43229778bcef5337cbe"
                                                      id="Login__csrf_token"
                                                    />
                                                    <table
                                                      width={245}
                                                      border={0}
                                                      cellSpacing={0}
                                                      cellPadding={0}
                                                      align="center"
                                                      style={{
                                                        marginTop: "55px",
                                                      }}
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            colSpan={2}
                                                            height={15}
                                                          />
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            colSpan={2}
                                                            align="center"
                                                            style={{
                                                              color: "#CB2D2E",
                                                              fontSize: "12px",
                                                            }}
                                                          >
                                                            &nbsp;Please Login.
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            width={73}
                                                            style={{
                                                              paddingLeft:
                                                                "20px",
                                                              color: "#ffffff",
                                                              fontSize: "11px",
                                                            }}
                                                          >
                                                            <label
                                                              className="required"
                                                              htmlFor="Login_user_name"
                                                            >
                                                              USER ID
                                                            </label>
                                                          </td>
                                                          <td width={147}>
                                                            <input
                                                              className="srchbox"
                                                              tabIndex={1}
                                                              type="text"
                                                              name="Login[user_name]"
                                                              id="Login_user_name"
                                                            />
                                                            <input
                                                              type="hidden"
                                                              name="tkn"
                                                              id="tkn"
                                                              defaultValue="5753dasd@434959k012012 210210afsdfdfdfs@$5ffd@f@44066115"
                                                            />
                                                            {/*<input type="hidden" name="ipn" id="ipn" value =""/></td>*/}
                                                            <input
                                                              type="hidden"
                                                              name="user_n"
                                                              id="user_n"
                                                              defaultValue
                                                            />
                                                            <input
                                                              type="hidden"
                                                              name="user_p"
                                                              id="user_p"
                                                              defaultValue
                                                            />
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            colSpan={2}
                                                            height={4}
                                                          />
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            className="style3"
                                                            style={{
                                                              color: "#ffffff",
                                                              paddingLeft:
                                                                "20px",
                                                              fontSize: "11px",
                                                            }}
                                                          >
                                                            <label
                                                              className="required"
                                                              htmlFor="Login_user_password"
                                                            >
                                                              PASSWORD
                                                            </label>
                                                          </td>
                                                          <td>
                                                            <input
                                                              className="srchbox"
                                                              tabIndex={2}
                                                              type="password"
                                                              name="Login[user_password]"
                                                              id="Login_user_password"
                                                            />
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            height={4}
                                                            colSpan={2}
                                                          />
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            colSpan={2}
                                                            align="center"
                                                            style={{
                                                              fontSize: "12px",
                                                              color: "white",
                                                              paddingLeft:
                                                                "25px",
                                                              paddingRight:
                                                                "25px",
                                                            }}
                                                          >
                                                            {" "}
                                                            Please enter the
                                                            text from the image
                                                            below:The letters
                                                            are case-sensitive.
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            colSpan={2}
                                                            align="center"
                                                          >
                                                            <table
                                                              width={150}
                                                              border={0}
                                                              align="right"
                                                              cellPadding={0}
                                                              cellSpacing={0}
                                                              style={{
                                                                marginRight:
                                                                  "25px",
                                                              }}
                                                            >
                                                              <tbody>
                                                                <tr>
                                                                  <td
                                                                    width={136}
                                                                  />
                                                                  <td
                                                                    width={64}
                                                                  />
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            colSpan={2}
                                                            align="center"
                                                            height={7}
                                                            style={{
                                                              width: "90px",
                                                              color: "#FAEE05",
                                                              fontSize: "12px",
                                                            }}
                                                          >
                                                            &nbsp;
                                                          </td>
                                                        </tr>
                                                        {/* <tr>
                                                          <td
                                                            colSpan={2}
                                                            align="center"
                                                          >
                                                            <img
                                                              src="/web/index.php/captcha?reload=1&1649510204"
                                                              border={0}
                                                              className="captcha"
                                                              id="img_captcha"
                                                              alt="captcha"
                                                            />
                                                            &nbsp;&nbsp;
                                                            <a
                                                              className="GNI"
                                                              href="javascript:void(0);"
                                                              onclick='document.getElementById("img_captcha").src="/web/index.php/captcha?r=" + Math.random() + "&reload=1";return false;'
                                                              title="Get new Image"
                                                            />
                                                            <div className="padTp5 captchaCls">
                                                              <input
                                                                className="captcha"
                                                                tabIndex={3}
                                                                type="text"
                                                                name="Login[captcha]"
                                                                id="Login_captcha"
                                                              />
                                                              <span className="reqRed">
                                                                &nbsp;
                                                              </span>
                                                            </div>{" "}
                                                          </td>
                                                        </tr> */}
                                                        <tr>
                                                          <td
                                                            height={3}
                                                            colSpan={2}
                                                          />
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            colSpan={2}
                                                            align="center"
                                                          >
                                                            <div className="loader" />
                                                            <input
                                                              name="submit"
                                                              type="submit"
                                                              id="submit"
                                                              defaultValue=" "
                                                              className="LoginBtn"
                                                              style={{
                                                                marginTop:
                                                                  "4px",
                                                                outline: "none",
                                                              }}
                                                            />
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            height={4}
                                                            colSpan={2}
                                                          />
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            colSpan={2}
                                                            align="center"
                                                            className="sign"
                                                            style={{
                                                              marginLeft:
                                                                "-7px",
                                                            }}
                                                          >
                                                            {/*<a href="auth/forgotPassword" style="text-decoration: none; color:white;"><span >Forgot Password</span></a>*/}
                                                            <a
                                                              className="login_watag"
                                                              href="/web/index.php/auth/forgotPassword"
                                                            >
                                                              Forgot Password
                                                            </a>
                                                            &nbsp;
                                                            <span
                                                              style={{
                                                                color: "white",
                                                                fontSize:
                                                                  "12px",
                                                              }}
                                                            >
                                                              |
                                                            </span>
                                                            <a
                                                              className="login_watag"
                                                              href="/web/index.php/auth/signUp"
                                                            >
                                                              General Public
                                                              Signup
                                                            </a>
                                                            &nbsp;
                                                            {/*<a href="signup.php" style="text-decoration: none; color:white;"><span >Sign Up</span></a>*/}
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            colSpan={2}
                                                            align="center"
                                                            className="style3"
                                                            height={7}
                                                          />
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            colSpan={2}
                                                            align="center"
                                                            className="style3"
                                                            style={{
                                                              color: "white",
                                                            }}
                                                          >
                                                            &nbsp;
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </form>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      {/* Login screen end*/}
                                      {/* Ashish*/}
                                      <tr>
                                        <td
                                          style={{
                                            padding: "7px",
                                            paddingTop: "15px",
                                            textAlign: "justify",
                                            fontWeight: "bold",
                                            fontSize: "13px",
                                          }}
                                        >
                                          Please visit concern Registrar
                                          (Birth/Death) office for issuing,
                                          printing, verifying or checking the
                                          status of birth/death certificate.
                                        </td>
                                      </tr>
                                      {/*<tr><td style="padding: 7px;padding-top: 20px;text-align: justify;font-weight: bold;font-size: 13px;"><b>Inviting Suggestions/Comments from General Public :</b></td></tr>
<tr>

<td style="padding: 7px;padding-top: 2px;text-align: justify;font-weight: bold;font-size: 13px;" color="blue"><span color="#0000ff">
<a href="https://crsorgi.gov.in/web/uploads/download/Forwarding note ORGI portal.pdf" target="_blank">(a). Proposed Amendments to the Registration of Births and Deaths Act, 1969(last date 02-12-2021)</a><span class="blink_text">&nbsp;&nbsp;&nbsp; New </span><br/><a href="https://crsorgi.gov.in/web/uploads/download/RBD-Comments WebVersion-28-9-21.pdf" target="_blank">(b). Suggestions/Comments format</a><span class="blink_text">&nbsp;&nbsp;&nbsp; New </span></span></td>
</tr>*/}
                                      {/* Ashish */}
                                      <tr>
                                        <td style={{ paddingTop: "9px" }}>
                                          <table
                                            width={248}
                                            style={{
                                              borderLeft: "1px solid white",
                                            }}
                                            align="center"
                                            cellPadding={0}
                                            cellSpacing={0}
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  bgcolor="#FFFFFF"
                                                  className="style4 style3"
                                                  style={{ paddingLeft: "7px" }}
                                                  height={2}
                                                />
                                              </tr>
                                              <tr> </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr valign="top">
                                        <td
                                          style={{
                                            fontFamily: "Arial",
                                            fontSize: "12px",
                                            color: "#363636",
                                          }}
                                        >
                                          <table
                                            width={275}
                                            border={0}
                                            align="center"
                                            cellPadding={0}
                                            cellSpacing={0}
                                          >
                                            <tbody>
                                              <tr>
                                                <td height={5} />
                                              </tr>
                                              <tr>
                                                <td height={5} />
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td />
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/*-Footer*/}
          <table
            width="100%"
            border={0}
            cellSpacing={0}
            cellPadding={0}
            align="center"
          >
            <tbody>
              <tr>
                <td
                  style={{
                    backgroundImage:
                      "url(./../../../web/images-other/footbot.png)",
                    height: "35px",
                  }}
                >
                  <table
                    width={980}
                    border={0}
                    align="center"
                    cellPadding={0}
                    cellSpacing={0}
                  >
                    <tbody>
                      <tr>
                        <td
                          width="400px"
                          style={{ paddingLeft: "7px", color: "white" }}
                          className="for style3"
                        >
                          <strong>
                            {/*Compatible with IE 8 or above with 1024x768 resolution*/}
                            Compatible with updated version of Google Chrome
                            &amp; Mozila Firefox.
                          </strong>{" "}
                        </td>
                        <td>&nbsp;</td>
                        <td align="right">
                          <div
                            className="bmenu"
                            style={{
                              width: "500px",
                              textAlign: "right",
                              marginLeft: "67px",
                              fontSize: "12px",
                              fontWeight: "bold",
                            }}
                          >
                            {" "}
                            <span
                              style={{
                                paddingLeft: "35px",
                                color: "white",
                                lineHeight: "30px",
                              }}
                            >
                              {" "}
                              © 2021 -The Registrar General &amp; Census
                              Commissioner, India
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <map name="Map" id="Map">
            <area
              shape="rect"
              coords="701,76,751,95"
              href="http://www.crsorgi.gov.in"
              style={{ outline: "none" }}
            />
            <area
              shape="rect"
              coords="764,75,847,95"
              href="/about-us.html"
              style={{ outline: "none" }}
            />
            <area
              shape="rect"
              coords="863,74,903,93"
              href="http://censusindia.gov.in/"
              target="_blank"
              style={{ outline: "none" }}
            />
            <area
              shape="rect"
              coords="922,74,1005,93"
              href="/contact.html"
              style={{ outline: "none" }}
            />
          </map>
          {/*- Start to window load pop up javascript */}
          {/*

<div id="boxes" >
  <div style="top: 199.5px; left: 551.5px; display: none;" id="dialog" class="window" >
    <div id="lorem">
	   <img src="/web/images/crgorgi_new_year.jpg" width="400" style="border-radius: 50px;-webkit-border-radius: 50px;-moz-border-radius: 50px; border-radius:50px;" > 
	   <input type="hidden" name="popupDiwali" id="popupDiwali"  value="1" >
    </div>    
  </div>
  <div style="width: 1478px; font-size: 32pt; color:white; height: 602px; display: none; opacity: 0.8;" id="mask"></div>
</div>

*/}
          {/* End to window load pop up */}
          <div
            style={{ display: "none" }}
            id="main-content-site"
            className="site-main-content"
          >
            https://crsorgi.gov.in/
          </div>
          <div
            className="anylinkmenu"
            style={{
              backgroundColor: "rgb(41, 44, 59)",
              color: "rgb(255, 255, 255)",
              opacity: "0.292812",
              left: "0px",
              top: "0px",
              visibility: "hidden",
            }}
          >
            <ul>
              <li>
                <a
                  href="../../../../../web/uploads/download/rbd_act_1969.pdf"
                  target="_blank"
                >
                  RBD Act,1969
                </a>
              </li>
              <li>
                <a
                  href="../../../../../web/uploads/download/Births_and_Deaths_Rules_1999.pdf"
                  target="_blank"
                >
                  RBD Rules
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
