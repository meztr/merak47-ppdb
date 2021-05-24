import React, { Component } from "react";
import { Row, Col, Button, Card, Collapse } from "react-bootstrap";

import Aux from "../../../hoc/_Aux";
import DEMO from "../../../../store/constant";

class CollapseItem extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isBasic: false,
    isMultiTarget: [],
    accordionKey: 1,
  };

  targetHandler = (target) => {
    if (this.state.isMultiTarget.some((item) => item === target)) {
      this.setState((prevState) => {
        return {
          isMultiTarget: prevState.isMultiTarget.filter(
            (item) => item !== target
          ),
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          isMultiTarget: [...prevState.isMultiTarget, target],
        };
      });
    }
  };

  multiTargetHandler = () => {
    const allTarget = ["target1", "target2"];
    allTarget.map((target) => {
      this.targetHandler(target);
      return false;
    });
  };

  render() {
    const { isBasic, isMultiTarget, accordionKey } = this.state;
    return (
      <Aux>
        <Row>
          <Col sm={12} className="accordion">
            <Card>
              <Card.Header>
                <Row>
                  <div className="col">
                    <Card.Title as="h5">
                      <a
                        href={DEMO.BLANK_LINK}
                        onClick={() =>
                          this.setState({
                            accordionKey: accordionKey !== 1 ? 1 : 0,
                          })
                        }
                        aria-controls="accordion1"
                        aria-expanded={accordionKey === 1}
                      >
                        {this.props.title}
                      </a>
                    </Card.Title>
                  </div>
                  <div className="col-auto">
                    {this.props.icon}
                  </div>
                </Row>
              </Card.Header>
              <Collapse in={this.state.accordionKey === 1}>
                <div id="accordion1">
                  <Card.Body>{this.props.children}</Card.Body>
                </div>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default CollapseItem;
