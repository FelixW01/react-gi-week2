import './homepage.css';
import { useState, useEffect } from 'react';
import Card from '../components/card/card'

// Develop a to-do list app with React hooks and React Route
// Implement features like adding, editing, and deleting tasks
// Use React Router to navigate between different pages, such as a task list and a task detail page.

function HomePage() {
  const [tasks, setTasks] = useState([])
  const [userInput, setUserInput] = useState('')
  const [userDescription, setUserDescription] = useState('')

  const handleSubmit = () => {
    if(userInput.trim() !== '') {
      // Tracks tasks into state and also re track localStorage with the newest iteration
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, {title: userInput, description: userDescription}];

        localStorage.setItem('tasks', JSON.stringify(updatedTasks))

        return updatedTasks;
      });
      
      // Resets input state after submission
      setUserInput('')
      setUserDescription('')
    }
 }  

 // Function for deleting task, taking in the index which is the key of the card
 const deleteTask = (index) => {

    setTasks((prevTasks) => {
      // Filter the prevTasks which is tapping into the previous state of the tasks, takes out the task based on the index passed from the card component
      const updatedTasks = prevTasks.filter((task, taskIndex) => taskIndex !== index);

      // Resets the localstorage with the current updated Task
       localStorage.setItem('tasks', JSON.stringify(updatedTasks));

       return updatedTasks;
    });
 };

  // Sets tasks on page mount from localstorage
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  useEffect(() => {
    console.log(tasks, '<<< tasks');
  }, [tasks]);

  // Lets the user press enter instead on top of being able to click the submit button
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
    <h1>Task Manager</h1>
    <div className="inputDiv">
      <input id="searchInput" type="text" placeholder="Start a task!" value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyDown={handleKeyPress} required></input>
      <input id="searchInput" type="text" placeholder="Task description" value={userDescription} onChange={(e) => setUserDescription(e.target.value)} onKeyDown={handleKeyPress} required></input>
      <button id="searchBtn" onClick={handleSubmit}>Start</button>
    </div>
    {/* Send tasks and deleteTask as props */}
    <Card  tasks={tasks} deleteTask={deleteTask} />
    </>
  )
}

export default HomePage
