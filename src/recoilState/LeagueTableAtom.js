import { SAMPLE_LEAGUE_TABLE } from "./SampleData";
import { atom } from "recoil";

export const leagueTableState = atom({
  key: "LeagueTableState",
  persistence_UNSTABLE: {
    type: "nonNull",
  },
  default: SAMPLE_LEAGUE_TABLE,
});
