/**
 * ファイルのパスからファイル名を取得します。
 *     download 属性の作成に便利です。
 * @param {string} filepath
 */
export default function getFileName(filepath) {
  const pathItems = filepath.split("/")
  return pathItems[pathItems.length - 1]
}
