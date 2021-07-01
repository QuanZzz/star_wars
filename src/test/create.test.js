import { createAction } from "../stores/utils";

describe("test stores utils", () => {
  it("createAction()", () => {
    expect(createAction("type", null)).toEqual({
      type: "type",
      payload: null,
    });
    expect(createAction("type", { data: "data" })).toEqual({
      type: "type",
      payload: {
        data: "data",
      },
    });
  });
});
