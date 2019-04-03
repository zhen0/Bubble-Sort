beforeAll(function() {
  spyOn(swap, 'swapped').and.callThrough(); // replace existing `tootsiepop['lick']` method
});

describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
    expect(swap.swapped.calls.count()).toEqual(0);
  });

  it('handles a single', function() {
    expect(bubbleSort([1])).toEqual([1]);
    expect(swap.swapped.calls.count()).toEqual(0);
  });

  it('handles two elements', function() {
    expect(bubbleSort([4, 2])).toEqual([2, 4]);
    expect(swap.calls.calls.count()).toEqual(1);
  });

  it('handles many elements', function() {
    expect(bubbleSort([8, 5, 9, 10, 3, 2, 1, 6, 18])).toEqual([
      1,
      2,
      3,
      5,
      6,
      8,
      9,
      10,
      18,
    ]);
    expect(swap.calls.calls.count()).toBeGreaterThan(4);
    expect(swap.calls.calls.count()).toBeLessThan(10);
  });
});
