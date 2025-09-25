import React from "react"
import { chakra } from "@chakra-ui/react"
import Link from "../Link"

/**
 * Box 内でリンクの出力が必要な際に利用するコンポーネントです。
 * @param {Object} props href: リンク先, onClick: クリックイベント
 */
export const BoxLink = ({ href, onClick, children }: { href?: string, onClick?: VoidFunction, children: React.ReactNode }) => {
  if (href) {
    return <Link href={href}>{children}</Link>
  }
  if (onClick) {
    return <chakra.div role="button" onClick={onClick} onKeyDown={onClick}>{children}</chakra.div>
  }
  return <>{children}</>
}
