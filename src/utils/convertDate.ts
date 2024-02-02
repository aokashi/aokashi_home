/**
 * 日付を YYYY年MM月DD日 の形式に変更します。
 * @param date YYYY-MM-DD の形式になっている文字列
 * @return
 */
export default function convertDate(date: string): string {
  const matches = date.match(/([0-9]{4})-([0-9]{2})-([0-9]{2})/);
  if (!Array.isArray(matches)) {
    return "";
  }

  const [, year, month, day] = matches;
  return `${year}年${month}月${day}日`;
}
