const workersList = [
  {
    id: "111",
    name: "Іванов",
    salary: 10000,
  },
  {
    id: "222",
    name: "Петров",
    salary: 20000,
  },
  {
    id: "333",
    name: "Сидоров",
    salary: 50000,
  },
];

function SalaryList() {
  return (
    <ul>
      {workersList.map((el) => (
        <li key={el.id}>
          {el.name}: {el.salary} форинту
        </li>
      ))}
    </ul>
  );
}

export default SalaryList;
