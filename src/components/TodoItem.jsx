import PropTypes from 'prop-types';

const TodoItem = ({ todoTask }) => <li>{todoTask.title}</li>;
TodoItem.propTypes = {
  todoTask: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
export default TodoItem;
