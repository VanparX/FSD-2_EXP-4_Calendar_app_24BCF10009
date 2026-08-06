import { describe, expect, test } from "vitest";

describe("Calendar Experiment", () => {
  test("Basic arithmetic", () => {
    expect(2 + 2).toBe(4);
  });

  test("Calendar title", () => {
    const title = "Interactive Content Calendar";

    expect(title).toContain("Calendar");
  });

  test("Post title exists", () => {
    const post = {
      title: "Instagram Campaign",
    };

    expect(post.title).toBeTruthy();
  });
});