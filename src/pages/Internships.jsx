import React, { useState } from "react";
import InternshipCard from "../components/InternshipCard";
import InternshipModal from "../components/InternshipModal";
import internshipsData from '../data/internships';

const Internships = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [internships, setInternships] = useState(internshipsData);

  const filtered = internships.filter((intern) =>
    intern.title.toLowerCase().includes(search.toLowerCase()) ||
    intern.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6 font-[Inter]">
      {/* search*/}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search by title or status"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <button
          onClick={() => setModalOpen(true)}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-700 transition-transform duration-300 hover:scale-105"
        >
          + Post New Internship
        </button>
      </div>

      {/* Internship Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((intern) => (
          <InternshipCard key={intern.id} data={intern} />
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <InternshipModal
          close={() => setModalOpen(false)}
          addInternship={(newIntern) => {
            setInternships([...internships, newIntern]);
            setModalOpen(false);
          }}
        />
      )}



      {/* Stats Section */}
      <div className="mt-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8 shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Why InternHub?</h2>
     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div>
      <p className="text-4xl font-extrabold text-indigo-600">120+</p>
      <p className="text-gray-700">Active Internships</p>
     </div>
      <div>
      <p className="text-4xl font-extrabold text-indigo-600">300+</p>
      <p className="text-gray-700">Hired Interns</p>
      </div>
      <div>
      <p className="text-4xl font-extrabold text-indigo-600">50+</p>
      <p className="text-gray-700">Partner Companies</p>
    </div>
  </div>
</div>
    </div>
    
       
    
 );
};

export default Internships;
