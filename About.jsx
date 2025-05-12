import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

import sample1 from '../assets/sample1.jpg';
import sample2 from '../assets/sample2.jpg';
import sample3 from '../assets/sample3.jpg';
import drSummary from '../assets/dr-summary.pdf';
import Header from '../components/Header';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
Modal.setAppElement('#root'); // Required for accessibility

const chartData = {
  labels: ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative'],
  datasets: [
    {
      label: 'Patients Diagnosed (%)',
      data: [40, 20, 15, 10, 15],
      backgroundColor: ['#60a5fa', '#fbbf24', '#f97316', '#ef4444', '#7c3aed'],
      borderRadius: 6,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { labels: { color: '#000' } },
  },
  scales: {
    y: { ticks: { color: '#4b5563' } },
    x: { ticks: { color: '#4b5563' } },
  },
};

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
   <>
   <Header/>
   <div className="max-w-6xl mx-auto px-6 py-16 animate-fade-in text-gray-900 dark:text-gray-100">
  
  <h2 className="text-4xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-10 animate-bounce-in">
    🧬 About DR Detector
  </h2>

  {/* Overview */}
  <section className="mb-10">
    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-2">👁️ What is Diabetic Retinopathy?</h3>
    <p>
      Diabetic Retinopathy (DR) is a complication of diabetes that causes damage to the blood vessels in the retina.
      This app uses AI to help classify and predict DR stages for early diagnosis and care.
    </p>
  </section>

  {/* Symptoms */}
  <section className="mb-10">
    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-2">⚠️ Symptoms</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Blurry or distorted vision</li>
      <li>Floaters and dark areas</li>
      <li>Difficulty seeing colors</li>
      <li>Partial or total vision loss</li>
    </ul>
  </section>

  {/* Prevention */}
  <section className="mb-10">
    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-2">🛡️ Prevention</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Maintain blood sugar levels</li>
      <li>Eat a healthy diet & exercise</li>
      <li>Get regular eye checkups</li>
    </ul>
  </section>

  {/* Chart */}
  <section className="mb-10">
    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4">📊 DR Stage Statistics</h3>
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
      <Bar data={chartData} options={chartOptions} />
    </div>
  </section>

  {/* Retina Carousel */}
  <section className="mb-10">
    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4">🖼 Sample Retina Scans</h3>
    <Swiper
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500 }}
      modules={[Pagination, Autoplay]}
      className="w-full sm:w-2/3 md:w-1/2 rounded-xl shadow-xl"
    >
      {[sample1, sample2, sample3].map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} alt={`Sample ${i + 1}`} className="rounded-xl" />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>

  {/* Project Timeline */}
  <section className="mb-12">
    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4">⏳ Project Timeline</h3>
    <div className="border-l-4 border-blue-500 pl-4 space-y-4">
      <div className="relative">
        <span className="absolute left-[-9px] top-1 w-4 h-4 bg-blue-600 rounded-full animate-ping" />
        <p><strong>Jan 2025:</strong> Project idea and dataset collection</p>
      </div>
      <div className="relative">
        <span className="absolute left-[-9px] top-1 w-4 h-4 bg-yellow-500 rounded-full animate-pulse" />
        <p><strong>Feb 2025:</strong> Model training and validation</p>
      </div>
      <div className="relative">
        <span className="absolute left-[-9px] top-1 w-4 h-4 bg-green-500 rounded-full animate-ping" />
        <p><strong>Mar 2025:</strong> Frontend, integration & deployment</p>
      </div>
    </div>
  </section>

  {/* PDF Modal Preview */}
  <section className="mb-10">
    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4">📄 Project Summary</h3>
    <button
      onClick={() => setIsModalOpen(true)}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
    >
      Preview Summary
    </button>
    <a
      href={drSummary}
      download
      className="ml-4 inline-block text-blue-600 hover:underline"
    >
      or Download PDF
    </a>

    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="PDF Preview"
      className="bg-white dark:bg-gray-900 max-w-4xl mx-auto mt-20 p-6 rounded-xl shadow-xl overflow-y-auto h-[80vh]"
    >
      <h2 className="text-xl font-bold mb-4 text-center">📄 PDF Summary Preview</h2>
      <iframe
        src={drSummary}
        title="PDF Summary"
        className="w-full h-[60vh] border rounded-lg"
      ></iframe>
      <div className="text-center mt-4">
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all"
        >
          Close
        </button>
      </div>
    </Modal>
  </section>

  {/* References */}
  <section>
    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-2">📚 References</h3>
    <ul className="list-disc pl-6 space-y-2 text-blue-500 dark:text-blue-300 text-sm">
      <li><a href="https://www.aao.org/eye-health/diseases/what-is-diabetic-retinopathy" target="_blank">American Academy of Ophthalmology</a></li>
      <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5089893/" target="_blank">NCBI Research on DR Detection</a></li>
      <li><a href="https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment" target="_blank">WHO – Vision Impairment Stats</a></li>
    </ul>
  </section>
</div>
   </>
  );
};

export default About;
