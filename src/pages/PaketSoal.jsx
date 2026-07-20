// src/pages/PaketSoal.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PaketSoal = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const [soalData, setSoalData] = useState(null); // Tempat simpan data dari API nanti

  useEffect(() => {
    // Nanti di sini kita akan panggil FastAPI:
    // axios.get(`http://localhost:8000/soal/${id}`)
    console.log("Fetching soal untuk paket ID:", id);

    // Simulasi loading data
    setSoalData({ title: "Paket Matematika SD", totalSoal: 20 });
  }, [id]);

  if (!soalData) return <div>Loading soal...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{soalData.title}</h1>
      <p>Sedang mengerjakan paket dengan ID: {id}</p>
      {/* Nanti di sini akan diisi komponen renderSoal */}
    </div>
  );
};

export default PaketSoal;
