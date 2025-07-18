// /components/Badge.jsx
import React from 'react';
import clsx from 'clsx';

const Badge = ({ status }) => {
  const base = "text-xs font-semibold px-3 py-1 rounded-full capitalize";
  const styles = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return <span className={clsx(base, styles[status] || "bg-gray-100 text-gray-700")}>{status}</span>;
};

export default Badge;
