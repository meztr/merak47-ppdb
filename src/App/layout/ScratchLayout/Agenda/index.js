import React, { Component } from "react";

class RightBar extends Component {
  render() {
    return (
      //Page Content
      <div class="container mt-3 mb-3">
        <h4>Agenda PPDB</h4>
        {/* agenda 1 */}
        <div class="row row-striped">
          <div class="col-2 text-right">
            <h2 class="display-5">
              <span class="badge badge-info">01</span>
            </h2>
            <h5>Maret</h5>
          </div>
          <div class="col-10">
            <h5 class="text-capitalize">
              <strong>Pembukaan PPDB Offline</strong>
            </h5>
            <ul class="list-inline">
              <small>
                <li class="list-inline-item">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i> Senin
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-clock-o" aria-hidden="true"></i> 07:30 - 14:00
                  WIB
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-location-arrow" aria-hidden="true"></i> SMKM
                  Sampit
                </li>
              </small>
            </ul>
            <p>
              PPDB Offline dilaksanakan menggunakan protokol kesehatan 5M. Calon
              Peserta Didik dapat mengambil Formulir PPDB Offline di SMK
              Muhammadiyah Sampit
            </p>
          </div>
        </div>
        {/* agenda 2 */}
        <div class="row row-striped">
          <div class="col-2 text-right">
            <h2 class="display-5">
              <span class="badge badge-info">12</span>
            </h2>
            <h5>April</h5>
          </div>
          <div class="col-10">
            <h5 class="text-capitalize">
              <strong>Pembukaan PPDB Online</strong>
            </h5>
            <ul class="list-inline">
              <small>
                <li class="list-inline-item">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i> Senin
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-clock-o" aria-hidden="true"></i> 24 Jam
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-location-arrow" aria-hidden="true"></i>{" "}
                  ppdb.smkmsampit.id
                </li>
              </small>
            </ul>
            <p>
              Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="row row-striped">
          <div class="col-2 text-right">
            <h2 class="display-5">
              <span class="badge badge-info">12</span>
            </h2>
            <h5>April</h5>
          </div>
          <div class="col-10">
            <h5 class="text-capitalize">
              <strong>Pembukaan PPDB Online</strong>
            </h5>
            <ul class="list-inline">
              <small>
                <li class="list-inline-item">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i> Senin
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-clock-o" aria-hidden="true"></i> 24 Jam
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-location-arrow" aria-hidden="true"></i>{" "}
                  ppdb.smkmsampit.id
                </li>
              </small>
            </ul>
            <p>
              Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        {/* <div
              className="col-md-4 overflow-auto"
              style={{ paddingTop: "100px" }}
            >
              <div className="col">
                <h4>Berita PPDB</h4>
                <ul
                  className="timeline overflow-auto bg-light text-dark"
                  style={{ height: "500px" }}
                >
                  <li>
                    <a target="_blank" href="https://www.totoprayogo.com/#">
                      Pembukaan PPDB SMKM Sampit 2021
                    </a>
                    <a href="#" className="float-right">
                      01 April 2021
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque scelerisque diam non nisi semper, et elementum
                      lorem ornare...
                    </p>
                  </li>
                  <li>
                    <a href="#">21 000 Job Seekers</a>
                    <a href="#" className="float-right">
                      4 March, 2014
                    </a>
                    <p>
                      Curabitur purus sem, malesuada eu luctus eget, suscipit
                      sed turpis. Nam pellentesque felis vitae justo accumsan,
                      sed semper nisi sollicitudin...
                    </p>
                  </li>
                  <li>
                    <a href="#">Awesome Employers</a>
                    <a href="#" className="float-right">
                      1 April, 2014
                    </a>
                    <p>
                      Fusce ullamcorper ligula sit amet quam accumsan aliquet.
                      Sed nulla odio, tincidunt vitae nunc vitae, mollis
                      pharetra velit. Sed nec tempor nibh...
                    </p>
                  </li>
                </ul>
              </div>
            </div> */}
      </div>
    );
  }
}

export default RightBar;
