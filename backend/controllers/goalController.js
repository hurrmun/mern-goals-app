// Get goals
// route GET /api/goals
// access Private
const getGoals = async (req, res) => {
  res.status(200).json({ message: "get goals" });
};

// Set goal
// route POST /api/goals
// access Private
const setGoal = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "set goal" });
};

// Update goal
// route PUT /api/goals/:id
// access Private
const updateGoal = async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
};

// Delete goal
// route DELETE /api/goals/:id
// access Private
const deleteGoal = async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
