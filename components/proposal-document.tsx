"use client"

import { useState } from "react"
import {
  ChevronRight,
  FileText,
  Users,
  BarChart3,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Calendar,
  User,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PersonnelChart, EducatorWorkloadChart, SchooContentsChart, LearningEffectChart } from "@/components/charts"

export default function ProposalDocument() {
  const [activeSection, setActiveSection] = useState("summary")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <Badge className="bg-blue-500/20 text-white hover:bg-blue-500/30 mb-2">提案書</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                人材育成強化のための
                <br />
                「Schoo for Business」導入提案書
              </h1>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-sm md:text-base">
              <div className="flex items-center gap-2 mb-2">
                <User size={16} />
                <p>
                  <strong>提案者:</strong> Maj. KAGE
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <p>
                  <strong>提案日:</strong> 2025年5月23日
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container mx-auto max-w-6xl px-4 py-2 overflow-x-auto">
          <div className="flex space-x-1 md:space-x-4">
            {[
              { id: "summary", label: "概要" },
              { id: "background", label: "背景" },
              { id: "proposal", label: "提案" },
              { id: "strengths", label: "Schooの強み" },
              { id: "effects", label: "期待効果" },
              { id: "nextsteps", label: "今後" },
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="whitespace-nowrap"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
        {/* Executive Summary */}
        <section id="summary" className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              1
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">エグゼクティブ・サマリー</h2>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed">
                  本提案は、航空自衛隊における人的基盤の強化と能力向上、特に昨今の任務環境の変化と人材確保が困難な状況において教育の効率化と質の向上を図らなければならないという喫緊の課題に対し、有効な手段となり得るオンライン学習サービス
                  <strong>「Schoo for Business」</strong>の組織的活用について提案するものです。
                </p>

                <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">個人的な経験</h3>
                    <p>
                      私自身、個人的に「Schoo」の提供するコンテンツ（リーダーシップ論、DX関連スキル等）を試用し、その
                      <strong>質の高さ、洗練されたユーザーインターフェース、そして学習効果を高める多様な機能</strong>
                      に感銘を受けると共に、<strong>時間や場所を選ばない学習の柔軟性</strong>を実感しております。
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">期待される効果</h3>
                    <p>
                      本サービスを組織的に導入することで、<strong>隊員個々の自律的なスキルアップを促進</strong>
                      するとともに、<strong>教育担当者の負担軽減や教育の質の均質化</strong>
                      にも大きく貢献できるのではないかと考えるに至りました。
                    </p>
                  </div>
                </div>

                <p>
                  本提案では、航空自衛隊の厳格な情報管理体制を十分に考慮し、
                  <strong>既存システムへの影響を排した形</strong>
                  で、隊員が個人の端末等から多様な学習コンテンツへアクセスできる環境の構築を目指します。これにより、
                  <strong>多様な勤務形態や環境にある隊員</strong>が、
                  <strong>質の高い自己啓発の機会をより多く得られる</strong>ようになると期待されます。
                </p>

                <p>
                  さらに、隊員が本サービスを体験することで得られる優れたユーザーインターフェースや各種機能に関する知見は、将来的な航空自衛隊独自の学習管理システム（LMS）構築を検討する際の、
                  <strong>具体的な要件定義に大きく資する</strong>ものと考えます。
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                  <p className="font-medium text-amber-800">
                    つきましては、本サービスの組織導入の可能性について、<strong>具体的な検討を開始</strong>
                    させていただきたく、ご意見を賜りたく存じます。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Background */}
        <section id="background" className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              2
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">背景・現状認識</h2>
          </div>

          <div className="space-y-6 print:space-y-8">
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold text-blue-700">航空自衛隊を取り巻く環境と任務の変化</h3>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  我が国を取り巻く安全保障環境は一層厳しさと不確実性を増しており、宇宙・サイバー・電磁波といった新領域における優勢の確保、グレーゾーン事態へのシームレスな対応など、航空自衛隊に求められる役割はますます拡大かつ複雑化しています。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-2">高度な情報分析能力</h4>
                    <p className="text-sm text-slate-600">複雑化する情報環境下での迅速かつ正確な分析力</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-2">迅速な意思決定能力</h4>
                    <p className="text-sm text-slate-600">変化に即応する判断力と決断力の向上</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-2">デジタルリテラシー</h4>
                    <p className="text-sm text-slate-600">複雑化・ネットワーク化する装備システムの効果的運用</p>
                  </div>
                </div>

                <p>
                  <strong>組織全体としてのDX（デジタルトランスフォーメーション）</strong>推進も喫緊の課題です。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold text-blue-700">人材育成における構造的課題</h3>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  少子化の進行や民間企業との人材獲得競争の激化により、優秀な人材の確保は依然として厳しい状況が続いています。令和6年版防衛白書によれば、自衛官の充足率は長年にわたり
                  <strong>定員を約1割（2万人強）下回る状況</strong>
                  が続いており、この恒常的な人員不足は、部隊の練度維持や任務遂行能力に深刻な影響を及ぼしかねない喫緊の課題です。
                </p>

                <div className="my-6 bg-white rounded-lg border shadow-sm p-4">
                  <PersonnelChart />
                  <p className="text-center text-sm text-slate-500 mt-2">
                    図1：自衛官 定員と現員の推移及び充足率（出典：令和6年版 防衛白書 資料67）
                  </p>
                </div>

                <p className="mb-4">
                  具体的には、充足率が約90%であるということは、例えば30名定員の編単隊規模であれば
                  <strong>常に3名程度の人員が不足</strong>
                  している計算となり、その負担は無視できない規模となっています。
                </p>

                <div className="bg-red-50 border-l-4 border-red-300 p-4 my-4">
                  <p className="text-red-800">
                    特に、<strong>高度な専門知識を要する分野</strong>
                    （例：サイバー、宇宙、電磁波など）や、新たな任務領域を担う人材の育成は急務であり、これらの分野における
                    <strong>質・量双方の確保</strong>は、将来の航空自衛隊の能力を左右する重要な要素です。
                  </p>
                </div>

                <p>
                  このような状況下、限られた人的リソースで増大する任務に対応するため、隊員、特に部隊の中核を担う中堅以上の人材は、本来注力すべき高度な専門業務や部隊指揮、後進の育成指導に
                  <strong>十分な時間を割くことが困難</strong>
                  な状況も見受けられます。日常業務に追われ、体系的な教育活動に十分な時間とエネルギーを割けないという声も聞かれ、結果として
                  <strong>教育の質の低下や、中堅幹部の疲弊を招くリスク</strong>も懸念されます。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold text-blue-700">既存教育の限界</h3>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  従来の教育システムは、集合教育を中心とした形式が主流であり、以下のような課題が指摘されています：
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-2">時間的制約</h4>
                    <p className="text-sm text-slate-600">集合教育の実施には、参加者のスケジュール調整や会場確保など、多大な準備時間が必要</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-2">場所の制約</h4>
                    <p className="text-sm text-slate-600">遠隔地の隊員や、勤務時間外の学習機会の確保が困難</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-2">教育リソースの分散</h4>
                    <p className="text-sm text-slate-600">限られた教育担当者の負担が大きく、質の高い教育の提供が困難</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-2">学習進度の個人差</h4>
                    <p className="text-sm text-slate-600">集合教育では、個人の理解度や学習速度に合わせた教育が困難</p>
                  </div>
                </div>

                <p>
                  これらの課題に対応するため、<strong>時間や場所に縛られない柔軟な学習環境</strong>の整備が求められています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proposal */}
        <section id="proposal" className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              3
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">提案内容</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="col-span-1 lg:col-span-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  オンライン学習プラットフォーム「Schoo for Business」の組織的活用
                </h3>

                <p className="mb-4">
                  本提案では、前述の背景・課題を踏まえ、法人向けオンライン学習プラットフォーム「Schoo for
                  Business」を航空自衛隊の教育・人材育成活動に組織的に導入・活用することを提案いたします。
                </p>

                <div className="flex items-center gap-2 my-6">
                  <div className="h-px flex-1 bg-slate-200"></div>
                  <span className="text-slate-500 font-medium">主な目的</span>
                  <div className="h-px flex-1 bg-slate-200"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <p>隊員のコモンスキル向上</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <p>DXリテラシー強化</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <p>自律的な学習文化の醸成</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <p>教育業務の効率化と質の向上</p>
                  </div>
                </div>

                <h4 className="font-semibold text-blue-700 mb-2">「Schoo for Business」のサービス概要</h4>
                <p className="mb-4">
                  株式会社Schooが提供する「Schoo for
                  Business」は、約8,500本を超える多様な分野のオンライン学習動画（ビジネススキル、DX、リーダーシップ、マネジメント、デザイン、プログラミング、教養等）を擁する国内最大級の社会人向け学習プラットフォームです。
                </p>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mb-6">
                  <h4 className="font-semibold text-blue-800 mb-2">航空自衛隊にとっての魅力</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                      <p>
                        <strong>質の高い豊富なコンテンツ:</strong>{" "}
                        第一線で活躍する専門家が講師を務める実践的な内容が多く、特にリーダーシップ論、コミュニケーションスキル、DX関連知識など、多くの隊員にとって有益なコンテンツが充実しています。
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                      <p>
                        <strong>優れた学習の柔軟性:</strong>{" "}
                        PC、スマートフォン、タブレット等、多様なデバイスに対応し、インターネット環境があれば時間や場所を選ばずに学習が可能です。
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                      <p>
                        <strong>直感的で使いやすいユーザーインターフェース:</strong>{" "}
                        洗練されたデザインと直感的な操作性により、ITスキルに自信のない隊員でも容易に利用を開始できます。
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                      <p>
                        <strong>学習管理機能（LMS）:</strong>{" "}
                        組織として隊員の学習状況を把握・管理できるLMS機能が提供されており、これは人材育成計画や効果測定に活用できる可能性があります。
                      </p>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">導入・運用イメージ</h3>

                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 mb-4">
                  <h4 className="font-medium text-slate-800 mb-2">試験導入フェーズ案</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Badge className="mt-1 bg-blue-100 text-blue-800 hover:bg-blue-200">目的</Badge>
                      <p>Schoo for Businessの有用性、隊員の受容性、運用上の課題等を検証</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="mt-1 bg-blue-100 text-blue-800 hover:bg-blue-200">対象者</Badge>
                      <p>教育部隊等、比較的小規模な組織（約30名）の希望者</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="mt-1 bg-blue-100 text-blue-800 hover:bg-blue-200">期間</Badge>
                      <p>
                        <strong>2ヶ月以内</strong>
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="mt-1 bg-blue-100 text-blue-800 hover:bg-blue-200">費用</Badge>
                      <p>1ユーザーあたり月額1,650円（税抜）、100名規模で年間約198万円</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">なぜ「Schoo for Business」か</h4>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-green-600 mt-1 flex-shrink-0" size={14} />
                      <p>
                        <strong>個人的な利用体験に基づく信頼感</strong>
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-green-600 mt-1 flex-shrink-0" size={14} />
                      <p>
                        <strong>官公庁における豊富な導入実績</strong>
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-green-600 mt-1 flex-shrink-0" size={14} />
                      <p>
                        <strong>コンテンツの網羅性と現代性</strong>
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-green-600 mt-1 flex-shrink-0" size={14} />
                      <p>
                        <strong>将来的なLMS構築への参考価値</strong>
                      </p>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Strengths */}
        <section id="strengths" className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              4
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">Schooの強みと官公庁実績</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
            <div className="col-span-1 lg:col-span-3">
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Schoo for Businessの提供価値</h3>

                  <h4 className="font-semibold text-blue-600 mb-2">圧倒的な量と質を兼ね備えた学習コンテンツ</h4>
                  <p className="mb-4">
                    Schooは、<strong>約8,500本を超える</strong>
                    （2024年10月現在、Schoo社公開情報）学習動画を保有しており、その内訳は「ビジネス基礎力」「デジタルリテラシー」「AI時代の人間力」「リベラルアーツ」「デザイン力」の
                    <strong>主要5学習領域</strong>を中心に、<strong>全21カテゴリー</strong>に及びます。
                  </p>

                  <div className="my-6 bg-white rounded-lg border shadow-sm p-4">
                    <SchooContentsChart />
                    <p className="text-center text-sm text-slate-500 mt-2">
                      図3：Schoo主要5学習領域 コンテンツ割合イメージ（総コンテンツ数約8,500本以上）
                    </p>
                  </div>

                  <p className="mb-6">
                    各分野の第一線で活躍する専門家や実務経験豊富な経営者などが講師を務めており、理論に偏らず、実際の業務に活かせる実践的な知見やノウハウを学ぶことができます。
                    <strong>毎月約50本のペースで新しい授業が追加</strong>
                    されており、常に最新のトレンドや情報に基づいた学習が可能です。
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      効果的かつ効率的な学習を実現するプラットフォーム機能
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-blue-700">学習管理システム（LMS）による戦略的人材育成の支援</h5>
                        <p className="text-sm mt-1">
                          「Schoo for
                          Business」には、組織の管理者が隊員の学習状況を詳細に把握・分析できるLMS機能が標準搭載されています。これにより、個々の育成計画の進捗フォローや、組織全体の教育ニーズの把握、研修効果の測定が可能となります。
                        </p>
                      </div>

                      <div>
                        <h5 className="font-medium text-blue-700">多様な学習フォーマットとマルチデバイス対応</h5>
                        <p className="text-sm mt-1">
                          録画授業に加え、リアルタイムで講師や他の受講者と質疑応答ができるライブ授業も提供されており、学習目的に応じた使い分けが可能です。PC、スマートフォン、タブレット端末に対応しているため、隊員は「いつでも、どこでも」学習に取り組むことが可能です。
                        </p>
                      </div>

                      <div>
                        <h5 className="font-medium text-blue-700">直感的で使いやすいユーザーインターフェース</h5>
                        <p className="text-sm mt-1">
                          私自身の利用経験からも、Schooのプラットフォームは非常に直感的で操作しやすく、ITスキルに不安のある隊員でもスムーズに学習を開始できると考えられます。これは学習の継続率を高める上で重要な要素です。
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-1 lg:col-span-2">
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">官公庁・自治体における導入実績</h3>

                  <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <h4 className="font-medium text-slate-800 mb-2">内閣官房内閣人事局</h4>
                      <p className="text-sm text-slate-700">
                        国家公務員のスキルアップ研修に「Schoo」を導入し、<strong>高い利用満足度</strong>
                        と組織内コミュニケーション活性化等の成果を報告（利用満足度98%との報告例あり）
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <h4 className="font-medium text-slate-800 mb-2">全国の地方自治体</h4>
                      <p className="text-sm text-slate-700">
                        全国の多数の地方自治体（例：奈良県庁、鹿児島県日置市等、<strong>約50以上の団体</strong>
                        ）で、職員のDX推進能力向上やリスキリング支援、組織全体の「学び続ける文化」の醸成といった目的でSchooが活用
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <h4 className="font-medium text-slate-800 mb-2">総務省統計局との連携</h4>
                      <p className="text-sm text-slate-700">
                        総務省統計局と連携し、国勢調査に関する統計リテラシー向上のためのオンライン授業を共同で企画・配信した実績あり
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <h4 className="font-medium text-amber-800 mb-2">航空自衛隊への意義</h4>
                    <ul className="space-y-2 text-sm text-amber-800">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="text-amber-600 mt-1 flex-shrink-0" size={14} />
                        <p>
                          <strong>信頼性と安心感</strong>: 多数の公的機関での実績
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="text-amber-600 mt-1 flex-shrink-0" size={14} />
                        <p>
                          <strong>公的機関特有の事情への理解</strong>: 運用ノウハウの蓄積
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="text-amber-600 mt-1 flex-shrink-0" size={14} />
                        <p>
                          <strong>他機関の成功・失敗事例からの学び</strong>: 効果的な導入・運用
                        </p>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">コスト比較事例：飛行教官向けコーチング研修</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 p-2 text-left">比較項目</th>
                      <th className="border border-slate-300 p-2 text-left">従来の集合研修（試算）</th>
                      <th className="border border-slate-300 p-2 text-left">Schoo活用型研修（試算）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 p-2">1回の研修参加可能人数（年間）</td>
                      <td className="border border-slate-300 p-2">4～6名程度（仮定）</td>
                      <td className="border border-slate-300 p-2 font-medium text-blue-700">
                        30名全員が並行して学習可能
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2">外部講師謝金（1回の研修あたり）</td>
                      <td className="border border-slate-300 p-2">約150万円（仮定）</td>
                      <td className="border border-slate-300 p-2">- (Schooコンテンツ利用)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2">Schoo for Business ライセンス費（30名・年間）</td>
                      <td className="border border-slate-300 p-2">-</td>
                      <td className="border border-slate-300 p-2">約59.4万円（1,650円/月×12ヶ月×30名）</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-medium">30名全員が受講完了するまでの推定期間</td>
                      <td className="border border-slate-300 p-2 font-medium">約4～5年</td>
                      <td className="border border-slate-300 p-2 font-medium text-blue-700">
                        1年以内（推奨学習期間による）
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-medium">
                        30名全員が受講完了するまでの推定総コスト
                      </td>
                      <td className="border border-slate-300 p-2 font-medium">
                        約600万円～750万円
                        <div className="text-xs text-slate-500">（150万円×4～5回開催と仮定）</div>
                      </td>
                      <td className="border border-slate-300 p-2 font-medium text-blue-700">
                        約59.4万円
                        <div className="text-xs text-slate-500">（ライセンス費用のみ）</div>
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-slate-300 p-2 font-medium">コスト削減効果（推定）</td>
                      <td className="border border-slate-300 p-2 text-center font-medium text-blue-800" colSpan={2}>
                        Schoo活用により、総コストを約90%以上削減できる可能性
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center text-sm text-slate-500 mt-2">
                表1：飛行教官向けコーチング研修のコスト比較試算（30名対象、Schoo社資料等を参考に試算）
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Expected Effects */}
        <section id="effects" className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              5
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">期待される効果・メリット</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700">隊員個々の能力向上と自己成長の促進</h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                    <p>
                      <strong>多様なスキル習得と専門性の深化:</strong> 幅広い分野の知識・スキルを体系的に習得できます。
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                    <p>
                      <strong>自律的な学習習慣の形成とキャリア自律支援:</strong>{" "}
                      時間や場所を選ばない学習環境が、主体的な学びとキャリア形成意識を育みます。
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                    <p>
                      <strong>学習意欲の向上と達成感の醸成:</strong>{" "}
                      新しい知識・スキルの習得が、モチベーション向上に繋がります。
                    </p>
                  </li>
                </ul>

                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 mt-4">
                  <h4 className="font-medium text-amber-800 mb-2">努力の可視化と公正な評価への接続可能性</h4>
                  <p className="text-sm text-amber-800">
                    Schoo for
                    BusinessのLMS機能を活用することで、隊員の「努力の軌跡」が客観的なデータとして可視化されます。個人の自由時間を自己啓発に投資した事実は評価に値し、この学習データは育成指導や、将来的には人事評価における定性評価を補完する情報として活用できる可能性があります。これにより、
                    <strong>個々の努力がより公正に認識され、報われる組織風土の醸成</strong>に繋がることが期待されます。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <BarChart3 className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-700">組織全体の教育・人材育成の質の向上と効率化</h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <p>
                      <strong>教育機会の均等化:</strong> より多くの隊員に質の高い教育機会を提供します。
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <p>
                      <strong>教育内容の標準化と質の担保:</strong>{" "}
                      実績のある専門家による標準化されたコンテンツを活用できます。
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <p>
                      <strong>教育担当者の負担軽減:</strong>{" "}
                      研修資料作成等の負担を軽減し、戦略的業務に注力可能にします。
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <p>
                      <strong>学習進捗の可視化と効果測定:</strong> LMS活用により、教育効果の測定・改善が可能です。
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <p>
                      <strong>変化への迅速な対応:</strong>{" "}
                      新しい知識やトレンドに対応したコンテンツを迅速に提供できます。
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="col-span-1 lg:col-span-2">
              <CardContent className="p-6">
                <div className="my-6 bg-white rounded-lg border shadow-sm p-4">
                  <LearningEffectChart />
                  <p className="text-center text-sm text-slate-500 mt-2">
                    図4：Schoo導入前後における学習時間と満足度の変化（A社事例、リサーチ結果を反映したモデルデータ）
                  </p>
                </div>

                <p className="mb-4">
                  Schooのようなオンライン学習プラットフォームの導入は、<strong>学習時間の大幅な増加と高い満足度</strong>
                  に繋がることが多くの実例で報告されています。例えば、Schoo導入企業におけるビジネススキル系コンテンツの学習時間は2019年比で
                  <strong>621.4%増加</strong>したとの調査があり、特に管理職層では月間平均学習時間が
                  <strong>12.5時間から28.7時間へと2.3倍に増加</strong>した事例も存在します。
                </p>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-2">高い投資対効果（ROI）</h4>
                  <p className="text-sm">
                    Schoo社の試算によれば、これらの学習効果は行動変容（導入企業の78%が業務改善行動を実施）を通じて
                    <strong>生産性の平均5%向上</strong>に繋がり、これは投資対効果（ROI）で<strong>約10.1倍</strong>
                    に相当するとされています。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Lightbulb className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-700">その他の期待効果</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                    <h4 className="font-medium text-purple-800 mb-1">組織風土の活性化とエンゲージメント向上</h4>
                    <p className="text-sm">
                      「学び合う文化」の醸成と組織知の向上、コミュニケーションの活性化、組織へのエンゲージメント強化が期待できます。
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                    <h4 className="font-medium text-purple-800 mb-1">航空自衛隊の魅力向上と人材確保への貢献</h4>
                    <p className="text-sm">先進的な教育環境のアピール、Schooとの連携による広報効果が期待できます。</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                    <h4 className="font-medium text-purple-800 mb-1">将来的なLMS構築への貢献</h4>
                    <p className="text-sm">
                      Schoo for
                      BusinessのUI/UXや機能、運用ノウハウが、将来の航空自衛隊独自のLMS構築における貴重な参考情報となります。
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                    <h4 className="font-medium text-purple-800 mb-1">Win-Winの関係構築</h4>
                    <p className="text-sm">
                      航空自衛隊と株式会社Schoo双方にとって真に有益な協力関係の構築が期待できます。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Next Steps */}
        <section id="nextsteps" className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              6
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">今後の進め方（提案）</h2>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">試験導入（パイロットプログラム）の提案</h3>

              <p className="mb-4">
                本格導入の是非を慎重に判断するため、まずは限定的な範囲での
                <strong>試験導入（パイロットプログラム）</strong>を実施することを提案いたします。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-medium text-slate-800 mb-2">目的</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-slate-500 mt-1 flex-shrink-0" size={14} />
                      <p>Schoo for Businessの学習効果を定量的に把握し有用性を評価</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-slate-500 mt-1 flex-shrink-0" size={14} />
                      <p>隊員の受容性確認</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-slate-500 mt-1 flex-shrink-0" size={14} />
                      <p>運用課題の洗い出し</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-slate-500 mt-1 flex-shrink-0" size={14} />
                      <p>費用対効果の概算把握</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-medium text-slate-800 mb-2">実施内容</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-slate-500 mt-1 flex-shrink-0" size={14} />
                      <p>
                        「Schoo for Business」ライセンス試験契約（<strong>可能な限り初期費用無料キャンペーン</strong>
                        活用を模索）
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-slate-500 mt-1 flex-shrink-0" size={14} />
                      <p>対象者への説明会、推奨コンテンツ提示</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-slate-500 mt-1 flex-shrink-0" size={14} />
                      <p>特定研修での活用実験（例：コンプライアンス教育の一部で集合研修と比較検証）</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-slate-500 mt-1 flex-shrink-0" size={14} />
                      <p>フィードバック収集、LMSによる学習データ収集・分析</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 p-2 text-left">評価指標 (KPI)</th>
                      <th className="border border-slate-300 p-2 text-left">目標値 (案)</th>
                      <th className="border border-slate-300 p-2 text-left">実績値 (導入後記入)</th>
                      <th className="border border-slate-300 p-2 text-left">備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 p-2">対象者のSchoo利用率</td>
                      <td className="border border-slate-300 p-2 font-medium text-blue-700">80%以上</td>
                      <td className="border border-slate-300 p-2"></td>
                      <td className="border border-slate-300 p-2 text-sm text-slate-600">
                        期間中1回以上ログインした隊員の割合
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2">1人あたり平均月間学習時間</td>
                      <td className="border border-slate-300 p-2 font-medium text-blue-700">5時間以上</td>
                      <td className="border border-slate-300 p-2"></td>
                      <td className="border border-slate-300 p-2 text-sm text-slate-600">LMSデータより算出</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2">推奨コンテンツ平均修了率</td>
                      <td className="border border-slate-300 p-2 font-medium text-blue-700">70%以上</td>
                      <td className="border border-slate-300 p-2"></td>
                      <td className="border border-slate-300 p-2 text-sm text-slate-600">
                        指定した推奨コンテンツの修了割合
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2">Schoo利用満足度 (5段階評価)</td>
                      <td className="border border-slate-300 p-2 font-medium text-blue-700">平均4.0以上</td>
                      <td className="border border-slate-300 p-2"></td>
                      <td className="border border-slate-300 p-2 text-sm text-slate-600">事後アンケートより</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2">業務への活用実感 (5段階評価)</td>
                      <td className="border border-slate-300 p-2 font-medium text-blue-700">平均3.5以上</td>
                      <td className="border border-slate-300 p-2"></td>
                      <td className="border border-slate-300 p-2 text-sm text-slate-600">事後アンケートより</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-center text-sm text-slate-500 mt-2">表2：試験導入におけるKPI目標値（案）</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">中長期的展開イメージ</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Badge className="mt-1 bg-blue-100 text-blue-800 hover:bg-blue-200">初期フェーズ</Badge>
                    <div>
                      <p className="font-medium">対象範囲の拡大（例：部隊単位での展開）</p>
                      <p className="text-slate-700">
                        試験導入結果を分析・改善し、教育部隊や主要司令部等、100名～数百名規模の組織単位での本格導入を目指します。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Badge className="mt-1 bg-blue-100 text-blue-800 hover:bg-blue-200">中期フェーズ</Badge>
                    <div>
                      <p className="font-medium">航空自衛隊全体への展開</p>
                      <p className="text-slate-700">
                        初期フェーズの実績と効果を検証し、全隊員が利用できる環境を目指した段階的な展開を計画します。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Badge className="mt-1 bg-blue-100 text-blue-800 hover:bg-blue-200">長期フェーズ</Badge>
                    <div>
                      <p className="font-medium">防衛省全体への展開可能性の模索と、さらなる連携強化</p>
                      <p className="text-slate-700">
                        航空自衛隊での成功モデルを基に、陸上・海上自衛隊、防衛装備庁など、防衛省全体への展開可能性を模索します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">ご支援のお願い</h3>

              <p className="mb-4">
                本提案の実現、そして将来的な発展に向け、以下の点につきまして、ご理解とご支援を賜りますようお願い申し上げます。
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                  <p>本提案内容（特に試験導入とその後の展開イメージ）に関する前向きなご検討と、建設的なご指導。</p>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                  <p className="font-medium text-blue-700">試験導入（パイロットプログラム）実施のご承認。</p>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                  <p>試験導入に必要な予算措置に関するご検討。</p>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                  <p>試験導入及びその後の展開を円滑に進めるための、関係部署との調整等に関するご協力。</p>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                  <p>株式会社Schooとの協議や情報交換の機会設定に関するお力添え。</p>
                </li>
              </ul>

              <div className="mt-8 text-right">
                <p>以上</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© Flight Academy All rights reserved.</p>
            <div className="flex items-center gap-2">
              <FileText size={16} />
              <span>人材育成強化のための「Schoo for Business」導入提案書</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
