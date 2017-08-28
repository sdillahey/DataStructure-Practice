describe("The Stack data structure", function() {
  var stack;

  beforeEach(function() {
    stack = new Stack();
  });

  it("should push new values", function() {
    stack.push("abc");
    stack.push(1234);
    expect(stack.storage).toEqual(["abc", 1234]);
  });

  describe("when you call pop,", function() {
    var popped;
    it("should remove the last value", function() {
      popped = stack.pop();
      expect(stack.storage).toEqual(["abc"]);
    });
    it("should return the removed item", function() {
      expect(popped).toEqual(1234);
    });

  })

  it("should tell you the size", function() {
    expect(stack.storage.size).toEqual(1);
  });
});

describe("The Queue data structure", function() {
  var queue;

  beforeEach(function() {
    queue = new Queue;
  });

  it("should enqueue new values", function() {
    queue.enqueue(75);
    queue.enqueue(94);
    queue.enqueue(3);
    expect(queue.storage).toEqual({0: 75, 1: 94, 2: 3})
  });
  it("should dequeue", function() {
    queue.dequeue();
    expect(queue.head).toEqual(94);
  });
  it("should tell you the size", function() {
    expect(queue.size).toEqual(2);
  })
})
