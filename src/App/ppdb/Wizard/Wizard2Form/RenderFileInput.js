import React from "react";
// import { Form } from "react-bootstrap";
// import { storage } from "../../../../services/firebase";

// const whiteStyle = {
//   backgroundColor: "white",
// };

class RenderFileInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      input: { onChange },
    } = this.props;
    console.log("RenderFileInput onChange touched");
    onChange(e.target.files[0]);
  }

  render() {
    const {
      input: { value },
    } = this.props;
    const { input, label, type } = this.props; //whatever props you send to the component from redux-form Field
    return (
      <div>
        <label>{label}</label>
        <div>
          <input
            {...input}
            type={type}
            {...value}
            accept=".jpg, .png, .jpeg"
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }

  // function handleChange(e) {
  //   setFile(e.target.files[0]);
  // }

  // function handleUpload(e) {
  //   e.preventDefault();
  //   const uploadTask = storage.ref(`/images/kk/${file.name}`).put(file);
  //   uploadTask.on("state_changed", console.log, console.error, () => {
  //     storage
  //       .ref("images/kk")
  //       .child(file.name)
  //       .getDownloadURL()
  //       .then((url) => {
  //         setFile(null);
  //         setURL(url);
  //       });
  //   });
  // }

  // return (
  //   <div>
  //     <div className="d-flex flex-column">
  //       <label>Upload Scan Kartu Keluarga</label>
  //       <div className="flex-row">
  //         <input type="file" />
  //         <button disabled={!file}>
  //           <i className="fa fa-upload"></i> Upload
  //         </button>
  //       </div>
  //       <small className="form-text text-muted">
  //         *) Wajib format JPG/PNG, Maksimal 2MB
  //       </small>
  //     </div>
  //     {/* </form> */}
  //     <img src={url} alt="" />
  //     <label>url: {url} </label>
  //   </div>
  // );
}
export default RenderFileInput;
