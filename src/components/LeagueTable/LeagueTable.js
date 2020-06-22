import React from "react";
import Position from "../Position/Position";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card, Col } from "react-bootstrap";
import { useRecoilValue, useTransactionObservation_UNSTABLE } from "recoil";
import { leagueTableState } from "../../recoilState/LeagueTableAtom";

const LeagueTable = () => {
  useTransactionObservation_UNSTABLE(
    ({ atomValues, atomInfo, modifiedAtoms }) => {
      for (const modifiedAtom of modifiedAtoms) {
        window.localStorage.setItem(
          modifiedAtom,
          JSON.stringify([...atomValues.get(modifiedAtom)])
        );
      }
    }
  );

  const positions = useRecoilValue(leagueTableState);

  const positionNodes = positions.map((team, index) => (
    <Position team={team} rank={index + 1} key={index} />
  ));

  return (
    <DndProvider backend={HTML5Backend}>
      <Col md={6}>
        <Card bg="dark">
          <Card.Header>
            <Card.Title>Ligatabelle zum Selberstecken</Card.Title>
          </Card.Header>
          <Card.Body>{positionNodes}</Card.Body>
        </Card>
      </Col>
    </DndProvider>
  );
};

export default LeagueTable;
