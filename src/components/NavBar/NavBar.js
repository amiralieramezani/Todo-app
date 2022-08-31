const NavBar = (props) => {
  const Massage = () => {
    if (props.quantity === 0) {
      return "Let's set new todo!";
    } else if (props.unCompletedTodos === 0) {
      return "All done!";
    } else {
      return `${props.unCompletedTodos} are not completed!`;
    }
  };
  return (
    <div
      className={`flex flex-row items-center justify-between bg-blue-900 text-blue-100 w-screen mb-[10vh] px-[4%] py-2.5`}
    >
      <p className={`sm:text-3xl text-xl`}>Todo App</p>
      <p className="sm:text-xl text-xs">
        <Massage />
      </p>
    </div>
  );
};

export default NavBar;
