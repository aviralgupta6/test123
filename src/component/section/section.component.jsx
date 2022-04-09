import "./section.styles.css";
import { useSearchParams } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import QR, { Bar } from "../QR/qr.component";
import moment from "moment";
import { permanentImage } from "../../assets/permanentImg";
import { sectionHeaderConstants } from "../../assets/constants/sectionHeadersConstants";
import {
  // collection,
  // getDocs,
  // addDoc,
  // updateDoc,
  // deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useState } from "react";
import { useEffect } from "react";
import stateImage from "../../assets/stateImage";
import { signature } from "../../assets/signature";

const Section = () => {
  const [state, setState] = useState({});
  let [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const readFromDatabase = async () => {
    const docRef = doc(db, "data", query);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userProfRef = docSnap.data();
      setState(userProfRef);
    } else {
      console.log("No such document!");
    }
  };
  useEffect(() => readFromDatabase(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div>
        <div style={{ border: "1px solid black", padding: "2px" }}>
          <div style={{ border: "2px solid black" }}>
            <center>
              {" "}
              <img src={logo} width="80px;" style={{ paddingTop: "5px" }} />
            </center>
            <div className="wrapper">
              <section className="content">
                <div className="columns">
                  <main className="main">
                    <b
                      style={{
                        color: "#0d0d57",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <p>
                        <b>
                          {`${"मध्य प्रदेश"}${
                            sectionHeaderConstants.GOVERMENT_NAME_LOCAL_POSTFIX
                          }`}
                        </b>
                        <br />
                        {`${sectionHeaderConstants.GOVERMENT_NAME_EN_PREFIX}
                          ${"MADHYA PRADESH"}`}
                      </p>
                      <p style={{ marginTop: "-10px" }}>
                        योजना, अर्थशास्त्र और सांख्यिकी विभाग <br />
                        DEPARTMENT OF PLANNING, ECONOMICS &amp; STATISTICS{" "}
                      </p>
                      <p style={{ marginTop: "-5px" }}>
                        जिला अस्पताल शिवपुरी <br />
                        DISTRICT HOSPITAL SHIVPURI
                        <br />
                      </p>
                      <p>
                        {" "}
                        <b
                          style={{
                            color: "#076a07",
                            fontSize: "13px",
                            marginTop: "3px",
                          }}
                        >
                          {sectionHeaderConstants.BIRTH_CERTIFICATE_LOCAL}
                          <br />
                          {sectionHeaderConstants.BIRTH_CERTIFICATE_EN}
                          <br />
                          <br />
                        </b>
                      </p>
                    </b>
                  </main>
                  <aside className="sidebar-first">
                    <b
                      style={{
                        fontSize: "12px",
                        padding: "47px",
                        fontWeight: "lighter",
                      }}
                    >
                      {sectionHeaderConstants.STATE_NO_ONE_LOCAL}
                    </b>
                    <br />
                    <b
                      style={{
                        fontSize: "12px",
                        padding: "46px",
                        fontWeight: "lighter",
                      }}
                    >
                      {sectionHeaderConstants.STATE_NO_ONE_EN}
                    </b>
                    <br />
                    <img
                      src={stateImage("MP")}
                      style={{
                        float: "left",
                        padding: "20px",
                        marginTop: "-15px",
                      }}
                      height="70px"
                      width="70px;"
                    />
                  </aside>
                  <aside
                    className="sidebar-second"
                    style={{ padding: "20px", paddingRight: "80px" }}
                  >
                    <b
                      style={{
                        fontSize: "12px",
                        padding: "-10px",
                        fontWeight: "lighter",
                        textAlign: "right",
                      }}
                    >
                      {sectionHeaderConstants.FORM_FIVE_LOCAL}{" "}
                    </b>
                    <br />
                    <b
                      style={{
                        fontSize: "12px",
                        padding: "-10px",
                        fontWeight: "lighter",
                      }}
                    >
                      {sectionHeaderConstants.FORM_FIVE_EN}
                    </b>
                    <br />
                    <img
                      src={permanentImage}
                      style={{ float: "right" }}
                      height="70px"
                      width="70px;"
                    />
                  </aside>
                </div>
              </section>
            </div>
            <div style={{ fontSize: "11px", marginLeft: "10px" }}>
              <p>
                (जन्म और मृत्यु पंजीकरण अधिनियम, 1969 की धारा 12/17 और मध्य
                प्रदेश के नियम 8/13 के तहत जारी) जन्म और मृत्यु पंजीकरण नियम
                1999)
                <br />
                (ISSUED UNDER SECTION 12/17 OF THE REGISTRATION OF BIRTHS DEATHS
                ACT, 1969 AND RULE 8/13 OF THE MADHYA PRADESH REGISTRATION OF
                BIRTHS &amp; DEATHS RULES 1999)
              </p>
              <p>
                {" "}
                यह प्रमाणित करने के लिए है कि निम्नलिखित जानकारी जन्म के मूल
                रिकॉर्ड से ली गई है जो कि राज्य संघ राज्य क्षेत्र के जिला
                शिवपुरी के तहसील/ब्लॉक शिवपुरी के जिला अस्पताल शिवपुरी के लिए
                पंजीकरण प्रदेश, भारतके रजिस्टर में उल्लेखित हे! <br /> THIS IS
                TO CERTIFY THAT THE FOLLOWING INFORMATION HAS BEEN TAKEN FROM
                THE ORIGINAL RECORD OF BIRTH WHICH IS THE REGISTER FOR DISTRICT
                HOSPITAL SHIVPURI OF TAHSIL BLOCK SHIVPURI OF DISTRICT SHIVPURI
                OF STATE/UNION TERRITORY MADHYA PRADESH, INDIA
              </p>
            </div>
            <table
              style={{ paddingTop: "1px", width: "95%", marginLeft: "10px" }}
            >
              <tbody>
                <tr>
                  <td style={{ width: "55%", paddingTop: "20px" }}>
                    <p>
                      {" "}
                      {`${sectionHeaderConstants.NAME}
                      ${state?.name?.toUpperCase()}`}
                    </p>
                    <p>
                      {" "}
                      {sectionHeaderConstants.DATE_OF_BIRTH}
                      <br />
                      {moment(state?.dob).format("DD-MM-YYYY")}
                      <br />
                      THIRTEE - AUGUST-TWO THOSUEND
                    </p>
                    <p>
                      {" "}
                      {sectionHeaderConstants.MOTHER_NAME}
                      <br /> {state?.motherName?.toUpperCase()}
                    </p>
                    <p>
                      {sectionHeaderConstants.AADHAR_NUMBER}
                      <br />
                      {`XXXXXXXX${state?.motherAadhar?.slice(-4)}`}
                    </p>
                    <p style={{ height: "57px" }}>
                      {" "}
                      {sectionHeaderConstants.ADDRESS_OF_PARENT}
                      <br /> {state?.permanentAddress?.toUpperCase()}{" "}
                    </p>
                    <p>
                      {" "}
                      {sectionHeaderConstants.REGISTRATION_NUMBER}
                      <br /> {state?.registrationNumber}
                    </p>
                    <p>
                      {" "}
                      {sectionHeaderConstants.REMARKS}
                      <br />
                      ----
                    </p>
                    <p style={{ marginTop: "40px" }}>
                      {" "}
                      {sectionHeaderConstants.DATE_OF_ISSUE}
                      <br />
                      {moment(state?.dateOfIssue).format("DD-MM-YYYY hh:mm:ss")}
                    </p>
                    <br />
                    <p>
                      {sectionHeaderConstants.UPDATED}
                      <br />{" "}
                      {moment(state?.dateOfIssue).format(
                        "DD-MM-YYYY hh:mm:ss"
                      )}{" "}
                    </p>
                    <QR />
                  </td>
                  <td>
                    <div style={{ marginTop: "-60px" }} width="140%">
                      <p>
                        {sectionHeaderConstants.GENDER}
                        {state?.gender?.toUpperCase()}
                      </p>
                      <p />
                      <p style={{ height: "40px" }}>
                        {sectionHeaderConstants.PLACE_OF_BIRTH}
                        <br />
                        {state?.placeOfBirth?.toUpperCase()}{" "}
                      </p>
                      <p>
                        {sectionHeaderConstants.FATHER_NAME}
                        <br /> {state?.fatherName?.toUpperCase()}
                      </p>
                      <p>
                        {sectionHeaderConstants.FATHER_AADHAR}
                        <br />
                        {`XXXXXXXX${state?.fatherAadhar?.slice(-4)}`}
                      </p>
                      <p />
                      <p style={{ height: "57px" }}>
                        {sectionHeaderConstants.PARENT_PERMANENT_ADDRESS} <br />{" "}
                        {state?.placeOfBirth?.toUpperCase()}
                      </p>
                      <p>
                        {sectionHeaderConstants.DATE_OF_REGISTRATION}
                        <br />{" "}
                        {moment(state?.dateOfRegistration).format(
                          "DD-MM-YYYY"
                        )}{" "}
                      </p>
                      <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <img src={signature} width="60px; height:50px" />
                        <br />
                        <p style={{ fontSize: "11px" }}>
                          {sectionHeaderConstants.ISSUING_AUTHORITY}
                        </p>
                        <div style={{ float: "center" }}>
                          <div
                            style={{
                              color: "#60F",
                              fontWeight: "bold",
                              textAlign: "center",
                              fontSize: "12px",
                            }}
                          >
                            <span lang="hi">
                              {" "}
                              उप-रजिस्ट्रार (जन्म एवं मृत्यु)
                              <br />
                            </span>{" "}
                            SUB-REGISTRAR (BIRTH &amp; DEATH) <br />
                            जिला अस्पताल कासगंज <br />
                            DISTRICT HOSPITAL KASGANJ
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <p
              style={{ margin: "20px", color: "#0d0d57", textAlign: "center" }}
            >
              {sectionHeaderConstants.COMPUTER_GENEREATED_STATEMENT}
              <br />
              {sectionHeaderConstants.CIRCULAR_STATEMENT}
              <br />
              {sectionHeaderConstants.VALID_LEGAL_DOCUMENT_STATEMENT}
            </p>
            <b>
              <p style={{ color: "darkgreen", marginLeft: "100px" }}>
                {sectionHeaderConstants.ENSURE_REGISTRATION_STATEMENT}
              </p>
            </b>
            <center>
              <Bar />
            </center>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
