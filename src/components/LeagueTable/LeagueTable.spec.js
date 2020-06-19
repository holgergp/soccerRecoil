import React from "react";
import { mount } from "enzyme";
import "../setupEnzymeTests";
import LeagueTable from "./LeagueTable";
import Team from "../Team/Team";
import "../localstorageMock";
import { RecoilRoot } from "recoil";

describe("League Table should", () => {
  it("render 18 clubs", () => {
    const wrapper = mount(
      <RecoilRoot>
        <LeagueTable />
      </RecoilRoot>
    );
    expect(wrapper.find(Team)).toHaveLength(18);
  });
});
