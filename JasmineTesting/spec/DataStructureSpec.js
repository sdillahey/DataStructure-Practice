describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});

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
