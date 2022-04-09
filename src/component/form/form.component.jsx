import { Form, Button } from "react-bootstrap";
import "./form.styles.css";
import formConstants from "./form.constant";
import { Fragment } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import generateRandomNumber from "../../assets/util";
// import { set, ref, onValue, remove, update } from "firebase/database";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import moment from "moment";
import axios from "axios";
import { stateList } from "./stateList";
import { useEffect } from "react";
import OptionComponent from "../optionComponent/option.component";

const Forms = () => {
  const [hostpitalList, setHospitalList] = useState([]);
  const [optionHospitalList, setOptionHospitalList] = useState([]);
  const [hospitalListLoading, setHospitalListLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    aadharNumber: "",
    gender: "",
    dob: "",
    dobInWords: "",
    placeOfBirth: "",
    fatherName: "",
    fatherAadhar: "",
    motherName: "",
    motherAadhar: "",
    permanentAddress: "",
    birthAddress: "",
    dateOfRegistration: "",
    state: "",
    city: "",
    hospital: "",
    registrationNumber: `B-2022: 10-${generateRandomNumber(
      5
    )}-${generateRandomNumber(6)}`,
    timeStampOfIssue: moment().format(),
    timeStampOfUpdate: moment().format(),
    createdAt: moment().format(),
    updatedAt: moment().format(),
  });

  const usersCollectionRef = collection(db, "data");

  const writeToDatabase = async (data) => {
    const refData = await addDoc(usersCollectionRef, data);
    window.open(
      `http://localhost:3000/section?query=${refData.id}`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  const getApi = () => {
    const url = "https://crsorgi.gov.in/web/index.php/birth/";
    axios
      .post(url + "S=33&d=9", null)
      .then((response) => console.log(response));
    // axios.get("")
  };
  // getApi();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(state);
    writeToDatabase(state);
  };
  const getAllHospital = (stateName) => {
    setHospitalListLoading(true);
    axios
      .get(
        `https://crsorgigovi.online/web/index.php/auth/dashboard/dt/statehos.php?sname=${stateName}`
      )
      .then((response) => {
        setHospitalList(response.data);
        setHospitalListLoading(false);
      });
  };
  useEffect(
    () => setOptionHospitalList(Object.entries(hostpitalList)),
    [hostpitalList]
  );
  const handleChange = (e) => {
    if (e.target.title === "state") {
      getAllHospital(e.target.value);
    }
    setState({ ...state, [e.target.title]: e.target.value });
  };

  return (
    <>
      <div style={{ padding: "5px 10%" }}>
        <Form className="form-container" noValidate>
          {formConstants.map(
            ({ title, titleValue, description, type, options }) => {
              return (
                <Fragment key={title}>
                  <Form.Group className="mb-3">
                    <Form.Label className="form-label">{title}</Form.Label>
                    {hospitalListLoading && title === "Select Hospital" ? (
                      <span>
                        <br></br>Loading...
                      </span>
                    ) : (
                      ""
                    )}
                    {type !== "select" ? (
                      <Form.Control
                        type={type}
                        title={titleValue}
                        value={state.titleValue}
                        placeholder={description}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    ) : (
                      // <Form.Select
                      //   aria-label="Default select example"
                      //   onChange={handleChange}
                      //   title={titleValue}
                      //   value={state.titleValue}
                      //   className="form-control"
                      // >
                      //   <option>{`Select ${title}`}</option>
                      //   {
                      //     title !== "Select Hospital"
                      //       ? options.map((option) => (
                      //           <option key={option} title={title}>
                      //             {option}
                      //           </option>
                      //         ))
                      //       : optionHospitalList.length > 0 &&
                      //         optionHospitalList.map((data) => (
                      //           <option key={data[0]}>{data[1]}</option>
                      //         ))
                      //     // <option>s</option>
                      //   }
                      // </Form.Select>
                      <OptionComponent
                        placeholder={"Select State"}
                        itemList={stateList}
                        // handleChange={handleChange}
                      />
                    )}
                  </Form.Group>
                </Fragment>
              );
            }
          )}
          <Button variant="primary" type="submit" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Forms;
