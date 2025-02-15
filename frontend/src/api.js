const API_URL = process.env.REACT_APP_API_URL || "http://localhost:10000";

// Function to fetch all tasks
export const getTasks = async () => {
  try {
    const response = await fetch(`${API_URL}/api/tasks`);
    if (!response.ok) throw new Error("Failed to fetch tasks");
    return await response.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

// Function to add a new task
export const addTask = async (task) => {
  try {
    const response = await fetch(`${API_URL}/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error("Failed to add task");
    return await response.json();
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

// Function to update a task
export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await fetch(`${API_URL}/api/tasks/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    if (!response.ok) throw new Error("Failed to update task");
    return await response.json();
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

// Function to delete a task
export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${API_URL}/api/tasks/${taskId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete task");
    return await response.json();
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
