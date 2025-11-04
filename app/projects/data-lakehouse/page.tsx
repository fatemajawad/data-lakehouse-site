"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Legend,
} from "recharts";

// Toggle this to true if you want to use local images in Next.js at /public/images
// For preview here we use remote placeholders so you can see images immediately
const USE_LOCAL_IMAGES = false as const;
const img = (p: string, fallback: string) =>
  USE_LOCAL_IMAGES ? `/images/${p}` : fallback;

export default function CloudDataLakehouseProject() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Hero Section */}
      <header className="relative max-w-6xl mx-auto px-6 pt-10 pb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 overflow-hidden rounded-3xl opacity-30"
        >
          <img
            src={img(
              "server.jpg",
              "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop"
            )}
            alt="Data servers"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-4xl font-bold tracking-tight"
        >
          Cloud Native Data Lakehouse for Enterprise Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative mt-3 text-neutral-300 max-w-3xl"
        >
          Unified enterprise data from sales, marketing, and supply chain into a single Lakehouse built with AWS, Databricks, and dbt. Powers real time insights and predictive analytics.
        </motion.p>
      </header>

      {/* Banner */}
      <section className="max-w-6xl mx-auto px-6 mt-6">
        <div className="rounded-3xl overflow-hidden border border-neutral-800 shadow-xl">
          <img
            src={img(
              "analytics.jpg",
              "https://images.unsplash.com/photo-1551281044-8af0d9d66036?q=80&w=1600&auto=format&fit=crop"
            )}
            alt="Enterprise analytics dashboard"
            className="w-full h-80 object-cover"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-4 mt-8">
        {[
          { k: "200M+", v: "Records Unified" },
          { k: "70%", v: "Latency Reduction" },
          { k: "92%", v: "Forecast Accuracy" },
          { k: "6 to 1", v: "Silos Consolidated" },
        ].map(({ k, v }) => (
          <div
            key={v}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5"
          >
            <div className="text-3xl font-semibold">{k}</div>
            <div className="mt-1 text-sm text-neutral-400">{v}</div>
          </div>
        ))}
      </section>

      {/* Overview + Tech Stack */}
      <section className="max-w-6xl mx-auto px-6 mt-10 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <img
            src={img(
              "bigdata.jpg",
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
            )}
            alt="Big data visualization"
            className="mt-3 rounded-xl border border-neutral-800"
          />
          <p className="mt-4 text-neutral-300">
            Multi zone Lakehouse with S3 Bronze for raw, Databricks Spark Silver for cleansed, and Redshift Gold modeled with dbt. Airflow and Terraform automate orchestration and infra. Power BI and QuickSight deliver self service analytics.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <img
            src={img(
              "cloud.jpg",
              "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop"
            )}
            alt="Cloud technology"
            className="mt-3 rounded-xl border border-neutral-800"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "AWS S3",
              "AWS Glue",
              "AWS Kinesis",
              "AWS Lambda",
              "Redshift",
              "Databricks",
              "Apache Spark",
              "dbt",
              "Airflow",
              "Terraform",
              "GitHub Actions",
              "Power BI",
              "QuickSight",
              "Python",
              "SQL",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full border border-neutral-700 text-sm text-neutral-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Image */}
      <section className="max-w-6xl mx-auto px-6 mt-10">
        <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
        <div className="rounded-3xl overflow-hidden border border-neutral-800 shadow-xl">
          <img
            src={img(
              "architecture.jpg",
              "https://images.unsplash.com/photo-1627308595187-94328b0a67a3?q=80&w=1600&auto=format&fit=crop"
            )}
            alt="Architecture diagram"
            className="w-full h-96 object-cover"
          />
        </div>
      </section>

      {/* Live Demo Dashboard - 3 visualizations */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Interactive Dashboard</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4">
            <h3 className="font-semibold mb-2">Revenue Trend</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { w: "W1", rev: 120 },
                    { w: "W2", rev: 160 },
                    { w: "W3", rev: 150 },
                    { w: "W4", rev: 210 },
                    { w: "W5", rev: 240 },
                    { w: "W6", rev: 260 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d" />
                  <XAxis dataKey="w" stroke="#a3a3a3" />
                  <YAxis stroke="#a3a3a3" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="rev"
                    stroke="#60a5fa"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4">
            <h3 className="font-semibold mb-2">Top Categories - Revenue</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { cat: "Home", rev: 420 },
                    { cat: "Electronics", rev: 380 },
                    { cat: "Kitchen", rev: 300 },
                    { cat: "Sports", rev: 210 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d" />
                  <XAxis dataKey="cat" stroke="#a3a3a3" />
                  <YAxis stroke="#a3a3a3" />
                  <Tooltip />
                  <Bar dataKey="rev" fill="#34d399" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 mt-6">
          <h3 className="font-semibold mb-2">Region Mix (Pie)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: "NA", value: 46 },
                    { name: "EU", value: 28 },
                    { name: "APAC", value: 18 },
                    { name: "LATAM", value: 8 },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                />
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Enterprise Analytics Dashboard - 4th visualization set */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Enterprise Analytics Dashboard</h2>
        {/* KPI tiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Revenue (MTD)", val: "$2.6M", delta: "+12% vs last month" },
            { label: "Conversion", val: "3.8%", delta: "+0.4 pp" },
            { label: "Avg Delivery Time", val: "2.3 days", delta: "-18%" },
            { label: "Stock outs", val: "1.2%", delta: "-0.6 pp" },
          ].map((k) => (
            <div key={k.label} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="text-neutral-400 text-sm">{k.label}</div>
              <div className="text-3xl font-semibold mt-1">{k.val}</div>
              <div className="text-xs text-neutral-400 mt-1">{k.delta}</div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4">
            <h3 className="font-semibold mb-2">Daily Orders</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { d: "1", o: 320 },
                    { d: "2", o: 360 },
                    { d: "3", o: 340 },
                    { d: "4", o: 410 },
                    { d: "5", o: 390 },
                    { d: "6", o: 450 },
                    { d: "7", o: 470 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d" />
                  <XAxis dataKey="d" stroke="#a3a3a3" />
                  <YAxis stroke="#a3a3a3" />
                  <Tooltip />
                  <Line type="monotone" dataKey="o" stroke="#22c55e" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4">
            <h3 className="font-semibold mb-2">Returns by Category</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { cat: "Home", r: 2.1 },
                    { cat: "Electronics", r: 3.8 },
                    { cat: "Kitchen", r: 1.7 },
                    { cat: "Sports", r: 2.9 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d" />
                  <XAxis dataKey="cat" stroke="#a3a3a3" />
                  <YAxis unit="%" stroke="#a3a3a3" />
                  <Tooltip />
                  <Bar dataKey="r" fill="#60a5fa" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Simple data table */}
        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 overflow-hidden">
          <div className="px-4 py-3 border-b border-neutral-800 font-semibold">Top Products - Performance</div>
          <div className="overflow-auto">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900/60">
                <tr className="text-left">
                  <th className="px-4 py-2">SKU</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Revenue</th>
                  <th className="px-4 py-2">Conv%</th>
                  <th className="px-4 py-2">Returns%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { sku: "HX-200", cat: "Electronics", rev: "$420k", c: 4.6, r: 2.1 },
                  { sku: "KT-014", cat: "Kitchen", rev: "$330k", c: 3.9, r: 1.5 },
                  { sku: "HM-882", cat: "Home", rev: "$305k", c: 3.5, r: 2.3 },
                  { sku: "SP-120", cat: "Sports", rev: "$280k", c: 3.2, r: 1.9 },
                ].map((row) => (
                  <tr key={row.sku} className="border-t border-neutral-800">
                    <td className="px-4 py-2">{row.sku}</td>
                    <td className="px-4 py-2">{row.cat}</td>
                    <td className="px-4 py-2">{row.rev}</td>
                    <td className="px-4 py-2">{row.c}%</td>
                    <td className="px-4 py-2">{row.r}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Architecture Diagram - Conceptual (inline SVG) */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Architecture Diagram - Concept</h2>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 overflow-auto">
          <svg viewBox="0 0 1200 520" className="w-full h-auto">
            <text x="20" y="30" className="fill-neutral-400 text-sm">Sources</text>
            <text x="320" y="30" className="fill-neutral-400 text-sm">Ingestion</text>
            <text x="620" y="30" className="fill-neutral-400 text-sm">Lakehouse</text>
            <text x="920" y="30" className="fill-neutral-400 text-sm">Consumption</text>

            {[
              { x: 20,  y: 60,  w: 260, h: 90, title: "ERP + Web + IoT", body: "Transactions, clickstream, sensors" },
              { x: 320, y: 60,  w: 260, h: 90, title: "Kafka / Kinesis / Glue", body: "Batch and streaming ingest" },
              { x: 620, y: 60,  w: 260, h: 90, title: "S3 - Bronze", body: "Raw zone Parquet" },
              { x: 620, y: 180, w: 260, h: 90, title: "Databricks + Spark - Silver", body: "Clean and conform" },
              { x: 620, y: 300, w: 260, h: 90, title: "Redshift + dbt - Gold", body: "Star schemas and marts" },
              { x: 920, y: 60,  w: 260, h: 90, title: "Power BI / QuickSight", body: "Dashboards and KPIs" },
              { x: 920, y: 180, w: 260, h: 90, title: "APIs via Lambda", body: "Model or feature serving" },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="16" ry="16" className="fill-transparent stroke-neutral-600" />
                <text x={b.x + 16} y={b.y + 28} className="fill-neutral-100 text-sm font-semibold">{b.title}</text>
                <text x={b.x + 16} y={b.y + 52} className="fill-neutral-400 text-xs">{b.body}</text>
              </g>
            ))}

            {[
              [280, 105, 320, 105],
              [580, 105, 620, 105],
              [750, 150, 750, 180],
              [750, 270, 750, 300],
              [880, 105, 920, 105],
              [880, 330, 920, 210],
            ].map((p, i) => (
              <g key={i}>
                <defs>
                  <marker id={`arrow-${i}`} markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L6,3 z" className="fill-neutral-500" />
                  </marker>
                </defs>
                <line x1={p[0]} y1={p[1]} x2={p[2]} y2={p[3]} className="stroke-neutral-500" strokeWidth="2" markerEnd={`url(#arrow-${i})`} />
              </g>
            ))}
          </svg>
        </div>
        <p className="mt-3 text-sm text-neutral-400">
          Bronze to Silver to Gold layered architecture with event and batch ingestion, governed access, and multiple consumption modes.
        </p>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 text-neutral-400 text-sm">
        Want the full project walkthrough? <a className="underline" href="#">Request access</a> · <a className="underline" href="#">Download case study PDF</a>
      </footer>
    </div>
  );
}


