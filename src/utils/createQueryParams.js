export const createQueryParams = (dateQuery, filterQuery) => {
  const dateQueryParam = dateQuery ? `date=${dateQuery}` : "";
  const filterQueryParam = filterQuery ? `source_id=${filterQuery}` : "";
  const queryParams = [dateQueryParam, filterQueryParam]
    .filter((param) => param)
    .join("&");

  return queryParams;
};
