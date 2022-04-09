import { Form, Button } from "react-bootstrap";

const OptionComponent = ({ placeholder, itemList = [] }) => {
  console.log(itemList);
  const handleChange = (e) => {
    console.log(e.target.value, e.target.options[e.target.selectedIndex].text);
    // if (e.target.title === "state") {
    //   getAllHospital(e.target.value);
    // }.
    // setState({ ...state, [e.target.title]: e.target.value });
  };
  return (
    <>
      <Form.Select
        aria-label="Default select example"
        onChange={handleChange}
        title={placeholder}
        value={placeholder}
        className="form-control"
      >
        {itemList.map((item) => item)}
        {/* <option>{`Select ${title}`}</option> */}
        {
          //   title !== "Select Hospital"
          //     ? options.map((option) => (
          //         <option key={option} title={title}>
          //           {option}
          //         </option>
          //       ))
          //     : optionHospitalList.length > 0 &&
          //       optionHospitalList.map((data) => (
          //         <option key={data[0]}>{data[1]}</option>
          //       ))
        }
      </Form.Select>
    </>
  );
};
export default OptionComponent;
