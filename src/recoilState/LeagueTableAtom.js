import { SAMPLE_LEAGUE_TABLE } from "./SampleData";
import { atom } from "recoil";

export const LEAGUE_TABLE_ATOM_KEY = "LeagueTableState";
export const leagueTableState = atom({
  key: LEAGUE_TABLE_ATOM_KEY,
  persistence_UNSTABLE: {
    type: "nonNull",
  },
  default: SAMPLE_LEAGUE_TABLE,
});
