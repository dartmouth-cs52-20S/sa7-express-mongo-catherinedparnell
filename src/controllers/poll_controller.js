import Poll from '../models/poll';

// should return a promise that returns a list of polls
export const getPolls = () => {
  return Poll.find({});
};


// takes in an object with the fields that poll should shave
// and saves them to the database
// returns a promise
export const createPoll = (poll) => {
  const p = new Poll();
  p.text = poll.text;
  p.imageURL = poll.imageURL;
  return p.save();
};

// takes in the poll id to update and a boolean of whether
// to update or not.
// returns a promise
export const vote = (pollID, upvote) => {
  return Poll.findOne({ _id: pollID }).then((poll) => {
    console.log(`updating vote: ${poll} ${upvote}`);
    if (upvote) {
      poll.upvotes += 1;
    } else {
      poll.downvotes += 1;
    }
    return poll.save();
  });
};
