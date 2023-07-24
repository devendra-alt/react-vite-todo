const InputTodo = () => {
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <form>
      <input type="text" name="" id="" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default InputTodo;
