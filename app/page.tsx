import type { Metadata } from "next"
import ProposalDocument from "@/components/proposal-document"

export const metadata: Metadata = {
  title: "人材育成強化のための「Schoo for Business」導入提案書",
  description: "航空自衛隊における人材育成強化のための「Schoo for Business」導入提案書",
}

export default function Home() {
  return <ProposalDocument />
}
