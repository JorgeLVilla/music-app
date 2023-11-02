//Function so that user can create goals with set times and dates. Help the user reach goals and keep track of them.

class Goals {
  constructor(id, bodyText, done, completeDate) {
    this._id = id;
    this._bodyText = bodyText;
    this._done = done;
    this._completeDate = completeDate;
  }
}

const goals = [];

function addGoal() {
  const newGoal = new Goal(goals.length + 1, bodyText, false, completeDate);
  goals.push(newGoal);
}
function deleteGoal() {
  const deleteGoal = new Goal(goals.length + 1, bodyText, false, completeDate);
  goals.push(deleteGoal);
}
