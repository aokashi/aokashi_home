/**
 * ファイルのパスからファイル名を取得します。
 *     download 属性の作成に便利です。
 * @param filepath
 */
export default function getFileName(filepath: string) {
  const pathItems = filepath.split("/")
  return pathItems[pathItems.length - 1]
}
