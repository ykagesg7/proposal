"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function PersonnelChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        const labels = [
          "2014年度",
          "2015年度",
          "2016年度",
          "2017年度",
          "2018年度",
          "2019年度",
          "2020年度",
          "2021年度",
          "2022年度",
          "2023年度",
        ]
        const actualPersonnelData = [226742, 227339, 224422, 226789, 226547, 227442, 232509, 230754, 227843, 223511]
        const capacityPersonnelData = [247160, 247154, 247154, 247154, 247154, 247154, 247154, 247154, 247154, 247154]
        const sufficiencyRateData = actualPersonnelData.map((actual, index) => {
          if (capacityPersonnelData[index] > 0) {
            return Number.parseFloat(((actual / capacityPersonnelData[index]) * 100).toFixed(1))
          }
          return 0
        })

        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "現員 (人)",
                data: actualPersonnelData,
                type: "bar",
                backgroundColor: "rgba(59, 130, 246, 0.7)",
                yAxisID: "y-axis-personnel",
                order: 2,
              },
              {
                label: "定員 (人)",
                data: capacityPersonnelData,
                type: "line",
                borderColor: "rgb(169, 169, 169)",
                borderWidth: 2,
                fill: false,
                yAxisID: "y-axis-personnel",
                pointRadius: 3,
                pointBackgroundColor: "rgb(169, 169, 169)",
                order: 3,
              },
              {
                label: "充足率 (%)",
                data: sufficiencyRateData,
                type: "line",
                borderColor: "rgb(220, 38, 38)",
                backgroundColor: "rgba(220, 38, 38, 0.1)",
                borderWidth: 2,
                tension: 0.1,
                fill: false,
                yAxisID: "y-axis-sufficiency",
                pointRadius: 3,
                pointBackgroundColor: "rgb(220, 38, 38)",
                order: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            interaction: {
              mode: "index",
              intersect: false,
            },
            scales: {
              "y-axis-personnel": {
                type: "linear",
                position: "left",
                beginAtZero: false,
                min: 210000,
                max: 255000,
                title: {
                  display: true,
                  text: "人員数 (人)",
                  font: { weight: "bold" },
                },
                ticks: {
                  callback: (value) => value.toLocaleString(),
                },
              },
              "y-axis-sufficiency": {
                type: "linear",
                position: "right",
                min: 88,
                max: 96,
                title: {
                  display: true,
                  text: "充足率 (%)",
                  font: { weight: "bold" },
                },
                ticks: {
                  callback: (value) => value.toFixed(1) + "%",
                },
                grid: {
                  drawOnChartArea: false,
                },
              },
              x: {
                title: {
                  display: true,
                  text: "年度",
                  font: { weight: "bold" },
                },
              },
            },
            plugins: {
              legend: {
                position: "bottom",
              },
              title: {
                display: true,
                text: "自衛官 定員と現員の推移及び充足率",
                font: { size: 16, weight: "bold" },
                padding: { top: 10, bottom: 20 },
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    let label = context.dataset.label || ""
                    if (label) {
                      label += ": "
                    }
                    if (context.parsed.y !== null) {
                      if (context.dataset.yAxisID === "y-axis-sufficiency") {
                        label += context.parsed.y.toFixed(1) + " %"
                      } else {
                        label += context.parsed.y.toLocaleString() + " 人"
                      }
                    }
                    return label
                  },
                },
              },
            },
          },
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}

export function EducatorWorkloadChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["1回の教育モデル"],
            datasets: [
              { label: "教育実施（半日＝4時間）", data: [4], backgroundColor: "rgba(234, 179, 8, 0.7)" },
              { label: "資料作成・準備", data: [3], backgroundColor: "rgba(239, 68, 68, 0.7)" },
              { label: "場所手配・日程調整等", data: [2], backgroundColor: "rgba(249, 115, 22, 0.7)" },
              { label: "効果測定・フィードバック・改善", data: [0.5], backgroundColor: "rgba(20, 184, 166, 0.7)" },
            ],
          },
          options: {
            indexAxis: "y",
            responsive: true,
            scales: {
              x: {
                stacked: true,
                title: {
                  display: true,
                  text: "推定所要時間 (時間)",
                  font: { weight: "bold" },
                },
              },
              y: {
                stacked: true,
              },
            },
            plugins: {
              legend: { position: "top" },
              title: {
                display: true,
                text: "教育担当者の業務時間内訳（モデルケース、推定値）",
                font: { size: 16, weight: "bold" },
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    let label = context.dataset.label || ""
                    if (label) {
                      label += ": "
                    }
                    if (context.parsed.x !== null) {
                      label += context.parsed.x + " 時間"
                    }
                    return label
                  },
                },
              },
            },
          },
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}

export function SchooContentsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: [
              "ビジネス基礎力",
              "デジタルリテラシー",
              "AI時代の人間力",
              "リベラルアーツ",
              "デザイン力",
              "その他専門スキル等",
            ],
            datasets: [
              {
                label: "コンテンツ割合",
                data: [30, 25, 15, 10, 10, 10],
                backgroundColor: [
                  "rgba(59, 130, 246, 0.7)",
                  "rgba(249, 115, 22, 0.7)",
                  "rgba(20, 184, 166, 0.7)",
                  "rgba(139, 92, 246, 0.7)",
                  "rgba(244, 63, 94, 0.7)",
                  "rgba(156, 163, 175, 0.7)",
                ],
                borderColor: [
                  "rgba(59, 130, 246, 1)",
                  "rgba(249, 115, 22, 1)",
                  "rgba(20, 184, 166, 1)",
                  "rgba(139, 92, 246, 1)",
                  "rgba(244, 63, 94, 1)",
                  "rgba(156, 163, 175, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: { position: "right" },
              title: {
                display: true,
                text: "Schoo主要学習領域 コンテンツ割合イメージ（総コンテンツ数約8,500本以上、仮データ）",
                font: { size: 16, weight: "bold" },
              },
              tooltip: {
                callbacks: {
                  label: (context) =>
                    `${context.label}: ${context.parsed}% (出典: Schoo社公開情報に基づく分類、割合は推定)`,
                },
              },
            },
          },
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}

export function LearningEffectChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Schoo導入前", "Schoo導入3ヶ月後", "Schoo導入6ヶ月後"],
            datasets: [
              {
                label: "月間平均自己啓発時間 (時間)",
                data: [12.5, 20.0, 28.7],
                backgroundColor: "rgba(59, 130, 246, 0.7)",
                yAxisID: "y-axis-time",
                order: 2,
              },
              {
                label: "学習満足度 (5段階評価)",
                data: [2.5, 3.8, 4.5],
                type: "line",
                borderColor: "rgba(244, 63, 94, 1)",
                backgroundColor: "rgba(244, 63, 94, 0.2)",
                yAxisID: "y-axis-satisfaction",
                tension: 0.1,
                fill: true,
                order: 1,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              "y-axis-time": {
                type: "linear",
                position: "left",
                beginAtZero: true,
                max: 35,
                title: {
                  display: true,
                  text: "月間平均自己啓発時間 (時間)",
                  font: { weight: "bold" },
                },
              },
              "y-axis-satisfaction": {
                type: "linear",
                position: "right",
                min: 1,
                max: 5,
                title: {
                  display: true,
                  text: "学習満足度 (5段階評価)",
                  font: { weight: "bold" },
                },
                grid: {
                  drawOnChartArea: false,
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Schoo導入状況",
                  font: { weight: "bold" },
                },
              },
            },
            plugins: {
              legend: { position: "top" },
              title: {
                display: true,
                text: "Schoo導入前後における学習時間と満足度の変化（A社事例、リサーチ結果を反映したモデルデータ）",
                font: { size: 16, weight: "bold" },
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    let label = context.dataset.label || ""
                    if (label) {
                      label += ": "
                    }
                    if (context.parsed.y !== null) {
                      if (context.dataset.yAxisID === "y-axis-satisfaction") {
                        label += context.parsed.y.toFixed(1) + " (5段階評価)"
                      } else {
                        label += context.parsed.y + " 時間"
                      }
                    }
                    return label
                  },
                },
              },
            },
          },
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}
