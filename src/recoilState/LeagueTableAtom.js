import { SAMPLE_LEAGUE_TABLE } from "./SampleData";
import { atom } from "recoil";

export const leagueTableState = (
  initialValueFromStorage = SAMPLE_LEAGUE_TABLE
) =>
  atom({
    key: "LeagueTableState",
    default: initialValueFromStorage,
  });
