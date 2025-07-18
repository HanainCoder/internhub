import React, { useState } from "react";
import Table from "../components/Table";
import Badge from "../components/Badge";
import Modal from "../components/Modal";
import candidatesData from "../data/candidates";
import { Users, CheckCircle } from "lucide-react";

const Candidates = () => {
  const [search, setSearch] = useState("");
  const [candidates, setCandidates] = useState(candidatesData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    internship: "",
    status: "Pending",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleAddCandidate = (e) => {
    e.preventDefault();
    const errors = {};

    // Validation
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      errors.email = "Enter a valid email address.";
    if (!formData.internship.trim())
      errors.internship = "Please select an internship.";
    if (!formData.status.trim()) errors.status = "Please select a status.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Add new candidate
    const newCandidate = {
      id: Date.now(),
      ...formData,
    };
    setCandidates([newCandidate, ...candidates]);
    setFormData({ name: "", email: "", internship: "", status: "Pending" });
    setFormErrors({});
    setModalOpen(false);
  };

  const filteredCandidates = candidates.filter((c) =>
    `${c.name} ${c.email}`.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Internship", accessor: "internship" },
    {
      header: "Status",
      accessor: "status",
      cell: (row) => <Badge status={row.status} />,
    },
  ];

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 font-['Inter','DM Sans',sans-serif]">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-8 sm:mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-indigo-600">
            Candidates
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:justify-center">
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
            />
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
            >
              Add Candidate
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="w-full min-w-[360px] sm:min-w-full">
            <Table columns={columns} data={filteredCandidates} />
          </div>
        </div>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="Add New Candidate"
        >
          <form onSubmit={handleAddCandidate} className="space-y-4 sm:space-y-5">
            {["name", "email"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 capitalize">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  value={formData[field]}
                  onChange={(e) => {
                    setFormData({ ...formData, [field]: e.target.value });
                    setFormErrors({ ...formErrors, [field]: "" });
                  }}
                  placeholder={`Enter ${field}`}
                  className={`w-full px-4 py-2 border ${
                    formErrors[field] ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-indigo-600`}
                />
                {formErrors[field] && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors[field]}
                  </p>
                )}
              </div>
            ))}
            {/* Internship */}
            <div>
              <label className="block text-sm font-medium mb-1">Internship</label>
              <select
                value={formData.internship}
                onChange={(e) => {
                  setFormData({ ...formData, internship: e.target.value });
                  setFormErrors({ ...formErrors, internship: "" });
                }}
                className={`w-full px-4 py-2 border ${
                  formErrors.internship ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-indigo-600`}
              >
                <option value="">Select Internship</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>UI/UX Designer</option>
                <option>Data Analyst</option>
                <option>ML Engineer</option>
              </select>
              {formErrors.internship && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.internship}
                </p>
              )}
            </div>
            {/* Status */}
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => {
                  setFormData({ ...formData, status: e.target.value });
                  setFormErrors({ ...formErrors, status: "" });
                }}
                className={`w-full px-4 py-2 border ${
                  formErrors.status ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-indigo-600`}
              >
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
              {formErrors.status && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.status}
                </p>
              )}
            </div>
            <div className="flex justify-center pt-2 sm:pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                Add Candidate
              </button>
            </div>
          </form>
        </Modal>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10">
          {[
            {
              label: "Total Candidates",
              value: candidates.length,
              icon: <Users className="text-indigo-600" />,
            },
            {
              label: "Approved",
              value: candidates.filter((c) => c.status === "Approved").length,
              icon: <CheckCircle className="text-green-500" />,
            },
            {
              label: "Pending",
              value: candidates.filter((c) => c.status === "Pending").length,
              icon: <CheckCircle className="text-amber-500" />,
            },
            {
              label: "Rejected",
              value: candidates.filter((c) => c.status === "Rejected").length,
              icon: <CheckCircle className="text-red-500" />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md border border-indigo-100 p-4 sm:p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="text-3xl">{stat.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-lg sm:text-xl font-bold text-indigo-600">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candidates;