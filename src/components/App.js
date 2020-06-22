import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Row, Container } from "react-bootstrap";
import LeagueTable from "./LeagueTable/LeagueTable";
import { RecoilRoot, getAtomWithKey } from "recoil";
import {
  LEAGUE_TABLE_ATOM_KEY,
  leagueTableState,
} from "../recoilState/LeagueTableAtom";

const initializeState = ({ set }) => {
  const localstorageValue = window.localStorage.getItem(LEAGUE_TABLE_ATOM_KEY);
  if (localstorageValue) {
    set(leagueTableState, JSON.parse(localstorageValue));
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
