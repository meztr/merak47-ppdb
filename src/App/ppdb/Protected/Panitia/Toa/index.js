import React from "react";
// import React, { useState } from "react";
// import {Editor, EditorState} from 'draft-js';
import {
  Row,
  Col,
  Card,
  // Form,
  // Button,
  // Image,
  // InputGroup,
  // FormControl,
  // DropdownButton,
  // Dropdown,
  // Container,
} from "react-bootstrap";
import Aux from "../../../../hoc/_Aux";
import RichEditor from "./Rich/Rich";

function Toa() {
  // const [editorState, setEditorState] = React.useState(
  //   EditorState.createEmpty()
  // );

  // const editor = React.useRef(null);

  // function focusEditor() {
  //   editor.current.focus();
  // }

  // React.useEffect(() => {
  //   focusEditor()
  // }, []);

  return (
    <Aux>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Kelola Pengumuman PPDB</Card.Title>
            </Card.Header>
            <Card.Body>
              {/* <div onClick={focusEditor}>
                <Editor
                  ref={editor}
                  editorState={editorState}
                  onChange={editorState => setEditorState(editorState)}
                />
              </div> */}
              <RichEditor />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
}

export default Toa;
