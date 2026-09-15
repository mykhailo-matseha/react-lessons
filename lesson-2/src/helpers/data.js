export function changeEventHelper(data, prop, value) {
  return {
    ...data,
    [prop]: value,
  };
}
