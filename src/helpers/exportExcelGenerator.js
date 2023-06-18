import { utils, writeFile } from "xlsx";

export function generateExcel(data, fileName) {
  const worksheet = utils.json_to_sheet(data);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Sheet 1");
  writeFile(workbook, fileName);
}
