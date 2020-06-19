import { useDrag } from "react-dnd";
import React from "react";
import { ItemTypes } from "../../DndItemTypes";
import classNames from "classnames";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";
import {
  recalculatePositionsWithRenamedTeam,
  recalculateSwappedPositions,
} from "../../recoilState/Positions";
import { useRecoilState } from "recoil";
import { leagueTableState } from "../../recoilState/LeagueTableAtom";

const calculatePositionCssClass = (positionNumber) => {
  if (positionNumber === 1) {
    return "tabellenfuehrerClass tabelleClass";
  }
  if (positionNumber <= 3) {
    return "championsLeagueClass tabelleClass";
  }
  if (positionNumber <= 6) {
    return "europaLeagueClass tabelleClass";
  }
  if (positionNumber <= 15) {
    return "mittelfeldClass tabelleClass";
  }
  if (positionNumber === 16) {
    return "relegationClass tabelleClass";
  } else {
    return "abstiegClass tabelleClass";
  }
};

const Team = (props) => {
  const { rank, team } = props;

  const [positions, setPositions] = useRecoilState(leagueTableState());

  const updateTeamname = (t, updatedText) => {
    setPositions(
      recalculatePositionsWithRenamedTeam(t, updatedText, positions)
    );
  };

  const swapPositions = (sourceTeamId, targetTeamId) => {
    setPositions(
      recalculateSwappedPositions(sourceTeamId, targetTeamId, positions)
    );
  };

  const dragReturn = useDrag({
    item: { team, type: ItemTypes.TEAM },
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        return;
      }
      const dragItem = monitor.getItem();
      const dropResult = monitor.getDropResult();
      swapPositions(dragItem.team.id, dropResult.team.id);
    },
  });

  const classes = classNames(
    "col-md-12",
    "btn",
    "text-bold",
    calculatePositionCssClass(rank)
  );

  const onChange = (evt) => {
    updateTeamname(team, evt.target.value);
  };

  return (
    <div className={classes} style={{ cursor: "pointer" }} ref={dragReturn[1]}>
      <ContentEditable
        onChange={onChange}
        className="textPointer"
        html={team.name}
        autoFocus={true}
        maxLength={200}
        disabled={!team.editing}
      />
    </div>
  );
};

Team.propTypes = {
  rank: PropTypes.number.isRequired,
  team: PropTypes.object.isRequired,
};

export default Team;
