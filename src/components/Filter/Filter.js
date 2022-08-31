import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];
const style = {
  control: (base) => ({
    ...base,
    outline: 0,
    border: "1px solid #3b82f6",
    "&:hover": {
      borderColor: "#1e3a8a",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#3b82f6",
  }),
};

const Filter = ({ filter, selectHandler }) => {
  return (
    <div className="flex justify-end py-0 px-[10%] mb-[10vh]">
      <Select
        defaultValue={filter}
        value={filter}
        onChange={selectHandler}
        options={options}
        className={`sm:w-[50%] md:w-[26%] w-[62%] outline-0`}
        styles={style}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#93c5fd",
            primary: "#1d4ed8",
          },
        })}
      />
    </div>
  );
};

export default Filter;
