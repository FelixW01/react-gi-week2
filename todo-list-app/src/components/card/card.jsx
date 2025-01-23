import './Card.css'
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

function Card({ tasks, deleteTask }) {
  const navigate = useNavigate();

  // The delete button was having event bubbling issues making it deleting every single card instead of the one specified with the index
  // This function acts as a middleware that triggers e.stopPropagation to stop bubbling then run deleteTask
  const handleDelete = (e, index) => {
    e.stopPropagation();
    deleteTask(index);
  };

  return (
    <>
      {tasks && tasks.length > 0 ? (
        <div className="card-container">
          {tasks.map((task, index) => {
            return (
              <div className="card" onClick={() => navigate('/taskdetail', {state: {task}})} key={index}>
                <div className="card-body">
                  <p className="card-title">{task.title}</p>
                  <p className="card-text">{task.description}</p>
                  <button onClick={(e) => handleDelete(e, index)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}

// The application still works without this, but strictmode wants you to declare the propTypes
// This reminds me of TypeScript
Card.propTypes = {
  tasks: PropTypes.array.isRequired, 
  deleteTask: PropTypes.func.isRequired,
};

export default Card
