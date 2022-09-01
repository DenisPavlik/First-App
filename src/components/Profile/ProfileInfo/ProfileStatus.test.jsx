import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-kamasutra.com")
  });

  // test("after creation <span> should be displayed", async () => {
  //   const component = create(<ProfileStatus status="it-kamasutra.com" />);
  //   const root = component.root;
  //   let span = await root.findByType("span");
  //   expect(span).toBeNull()
  // });

  // test("after creation <span> should contains correct status", async () => {
  //   const component = create(<ProfileStatus status="it-kamasutra.com" />);
  //   const root = component.root;
  //   let span = await root.findByType("span");
  //   expect(span.innerText).toBe("it-kamasutra.com");
  // });
})