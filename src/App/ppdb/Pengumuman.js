import React, { Component, useState, useMemo, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Fullscreen from "react-full-screen";
import windowSize from "react-window-size";
import Navigation from "../layout/ScratchLayout/Navigation";
import Aux from "../hoc/_Aux";
import * as actionTypes from "../../store/actions/adminLayoutActions";
import "../layout/ScratchLayout/app.scss";
// import BlueCard from "../../App/components/BlueCard";

// import Moment from "react-moment";
import styled from "styled-components";
import MLoader from "../layout/Loader/Spinner";
import firebase from "../../services/firebase";
import TableNews from "../ppdb/Component/TableNews";
import "./Protected/Panitia/Progress/Table.css";
// import Agenda from "../layout/ScratchLayout/Agenda";
import Alur from "../layout/ScratchLayout/Alur";

const Styles = styled.div`
  .pagination {
    padding: 0.5rem;
    display: inherit;
  }
`;

function TableNewsHeader() {
  const [data, setData] = useState([]);
  // const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  // const [showModal, setShowModal] = useState(false);
  // const [currentData, setCurrentData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "ranking",
        Cell: (row) => {
          return <div>{row.index}</div>;
        },
      },
      {
        Header: "NISN",
        accessor: "nisn",
      },
      {
        Header: "NAMA",
        accessor: "namasiswa",
      },
      {
        Header: "ASAL SEKOLAH",
        accessor: "asalsekolah",
      },
      {
        Header: "PILIHAN JURUSAN",
        accessor: "jurusan",
      },
      {
        Header: "JALUR",
        accessor: "jalurpendaftaran",
      },
      {
        Header: "KETERANGAN",
        Cell: "LULUS",
      },
    ],
    []
  );

  // const handleButtonClick = (e, row) => {
  // //   setShowModal(true);
  //   setCurrentData(row.original);
  // };

  useEffect(() => {
    (async () => {
      // try {
      //   firebase
      //   .database()
      //   .ref( 'ppdb2020/calonsiswa' )
      //   .on('value', snapshot => {
      //     setData(Object.values(snapshot.val()));
      //     setError(null);
      //     setLoading(false);
      //   });
      // } catch (error) {
      //   setError('Progress Informasi Fetch failed');
      //   setLoading(false);
      // }
      firebase
        .database()
        .ref("ppdb2021/gelombang1")
        .on("value", (snapshot) => {
          setData(Object.values(snapshot.val()));
          setLoading(false);
        });
    })();
  }, []);

  return (
    <Aux>
      <Row>
        <Col>
          <Card id="lihat">
            <Card.Header as="h5">Hasil Penerimaan</Card.Header>
            <Card.Body>
              <Card.Subtitle as="p">
                Berikut ini tabel data penerimaan peserta didik baru
              </Card.Subtitle>
              {loading ? (
                <Col>
                  <MLoader />
                </Col>
              ) : (
                <Styles>
                  <TableNews columns={columns} data={data} />
                </Styles>
              )}

              {/* { showModal && 
                  <DetilModal 
                    data = {currentData}
                    show={showModal}
                    onHide={() => setShowModal(false)}
                  /> } */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
}

class Pengumuman extends Component {
  state = {
    showHide: false,
  };

  fullScreenExitHandler = () => {
    if (
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      this.props.onFullScreenExit();
    }
  };

  componentWillMount() {
    if (
      this.props.adminReducer.windowWidth > 992 &&
      this.props.adminReducer.windowWidth <= 1024 &&
      this.props.adminReducer.layout !== "horizontal"
    ) {
      this.props.onComponentWillMount();
    }
  }

  mobileOutClickHandler() {
    if (
      this.props.adminReducer.windowWidth < 992 &&
      this.props.adminReducer.collapseMenu
    ) {
      this.props.onComponentWillMount();
    }
  }

  handleModal() {
    this.setState({ showHide: !this.state.showHide });
  }
  render() {
    document.addEventListener("fullscreenchange", this.fullScreenExitHandler);
    document.addEventListener(
      "webkitfullscreenchange",
      this.fullScreenExitHandler
    );
    document.addEventListener(
      "mozfullscreenchange",
      this.fullScreenExitHandler
    );
    document.addEventListener("MSFullscreenChange", this.fullScreenExitHandler);

    return (
      //Page Content
      <Aux>
        <Fullscreen enabled={this.props.adminReducer.isFullScreen}>
          <Navigation SubMode={true} />
          <div style={{ paddingTop: "90px" }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col py-3">
                  <TableNewsHeader />
                </div>
                <div className="col-md-4">
                  <Alur />
                  {/* <Agenda /> */}
                </div>
              </div>
            </div>
          </div>
        </Fullscreen>
      </Aux>
    );
  }
}

// export default Pengumuman;
const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFullScreenExit: () => dispatch({ type: actionTypes.FULL_SCREEN_EXIT }),
    onComponentWillMount: () => dispatch({ type: actionTypes.COLLAPSE_MENU }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(Pengumuman));
