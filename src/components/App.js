import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Row, Container } from "react-bootstrap";
import LeagueTable from "./LeagueTable/LeagueTable";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <div className="index">
      <Container>
        <Row>
          <RecoilRoot>
            <LeagueTable />
          </RecoilRoot>
        </Row>
      </Container>
    </div>
  );
};

export default App;
