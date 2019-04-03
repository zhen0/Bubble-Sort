describe("swap", function() {
  beforeAll(function() {
    spyOn(bubble, "swap").and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it("has no swaps on empty array", function() {
    bubble.bubbleSort([]);
    expect(bubble.swap.calls.count()).toEqual(0);
  });
  it("has no swaps on an array of one", function() {
    bubble.bubbleSort([3]);
    expect(bubble.swap.calls.count()).toEqual(0);
  });
  it("has 1 swap on an array of two", function() {
    bubble.bubbleSort([4, 2]);
    expect(bubble.swap.calls.count()).toEqual(1);
  });
  it("has less than 10 swaps on an array of ten", function() {
    bubble.bubbleSort([1, 2, 3, 5, 6, 8, 9, 10, 18]);
    expect(bubble.swap.calls.count()).toBeLessThan(10);
  });
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
