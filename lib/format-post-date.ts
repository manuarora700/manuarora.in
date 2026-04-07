/** DD-MM-YYYY, matches home {@link BlogList} date style. */
export function formatPostDate(publishedAt: string) {
  const date = new Date(publishedAt);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
