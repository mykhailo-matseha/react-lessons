export function selectOptionsMap(data) {
  return data.map((el) => (
    <option key={el.id} value={el.id}>
      {el.name}
    </option>
  ));
}
