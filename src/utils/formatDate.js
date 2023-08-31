export const formatDate = (data) => {
  const currentDate = new Date(data);
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  return `${year}-${month}-${day}`;
};
