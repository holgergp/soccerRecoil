import React from "react";
import Position from "../Position/Position";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card, Col } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { leagueTableState } from "../../recoilState/LeagueTableAtom";

const LeagueTable = () => {
  /**const [storedState, setStoredState] = useLocalStorage(
    "LEAGUE_TABLE",
    SAMPLE_LEAGUE_TABLE
  );**/

  const positions = useRecoilValue(leagueTableState);

  /**  useEffect(() => {
    setStoredState(positions);
  });**/

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
