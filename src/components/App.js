import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Row, Container } from "react-bootstrap";
import LeagueTable from "./LeagueTable/LeagueTable";
import { RecoilRoot, getAtomWithKey } from "recoil";

const initializeState = ({ set }) => {
  for (const [key, value] of Object.entries(window.localStorage)) {
    set(getAtomWithKey(key), JSON.parse(value));
  }
};

const App = () => {
  return (
    <div className="index">
      <Container>
        <Row>
          <RecoilRoot initializeState={initializeState}>
            <LeagueTable />
          </RecoilRoot>
        </Row>
      </Container>
    </div>
  );
};

export default App;
