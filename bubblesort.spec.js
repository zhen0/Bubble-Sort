beforeAll(function() {
  spyOn(bubble, "swap").and.callThrough(); // replace existing `tootsiepop['lick']` method
});
it("getting to the center of tootsiepop involves exactly three licks", function() {
  bubble.bubbleSort([]);
  expect(bubble.swap.calls.count()).toEqual(0);
});

describe("Bubble Sort", function() {
  it("handles an empty array", function() {
    expect(bubble.bubbleSort([])).toEqual([]);
  });

  it("handles a single", function() {
    expect(bubble.bubbleSort([1])).toEqual([1]);
    // expect(swap.calls.count()).toEqual(0);
  });

  it("handles two elements", function() {
    expect(bubble.bubbleSort([4, 2])).toEqual([2, 4]);
    // expect(swap.calls.count()).toEqual(1);
  });

  it("handles many elements", function() {
    expect(bubble.bubbleSort([8, 5, 9, 10, 3, 2, 1, 6, 18])).toEqual([
      1,
      2,
      3,
      5,
      6,
      8,
      9,
      10,
      18
    ]);
    // expect(swap.calls.count()).toBeGreaterThan(4);
    // expect(swap.calls.count()).toBeLessThan(10);
  });
});
