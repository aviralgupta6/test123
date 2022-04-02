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

const Forms = () => {
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
  // console.log(new Date());
  //   const writeToDatabase = (data) => {
  //     const uuid = uid();
  //     set(ref(db, `/${uuid}`), {
  //       data,
  //       uuid,
  //     });
  //     setState({});
  //   };
  // const generateRandomNumber = (numberOfDigits) => {
  //   let str = "";
  //   for (let i = 0; i < numberOfDigits; i++) {
  //     str += Math.floor(Math.random() * 10).toString();
  //   }
  //   // const ran = Math.floor(Math.random() * 10);
  //   return str;
  // };

  const usersCollectionRef = collection(db, "data");

  const writeToDatabase = async (data) => {
    const refData = await addDoc(usersCollectionRef, data);
    window.open(
      `http://localhost:3000/section?query=${refData.id}`,
      "_blank",
      "noopener,noreferrer"
    );
    // console.log(refData.id);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    writeToDatabase(state);

    // console.log(state);
  };

  const handleChange = (e) => {
    // console.log(e.target.title, e.target.value);
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
                      <Form.Select
                        aria-label="Default select example"
                        onChange={handleChange}
                        title={titleValue}
                        value={state.titleValue}
                        className="form-control"
                      >
                        <option>{`Select ${title}`}</option>
                        {options.map((option) => (
                          <option key={option} title={title}>
                            {option}
                          </option>
                        ))}
                      </Form.Select>
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
