import React from "react";
import { storage } from "../../../services/firebase";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      input: { onChange },
    } = this.props;
    console.log("FileInput onChange touched");
    onChange(e.target.files[0]);
  }

  render() {
    const {
      input: { value },
    } = this.props;

    return <input type="file" value={value} onChange={this.onChange} />;
  }
}

export default FileInput;
