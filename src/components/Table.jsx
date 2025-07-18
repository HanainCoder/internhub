import React,{ useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Table=({columns, data})=>{

    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const sortedData= React.useMemo(()=>{
         if (!sortConfig.key) return data;
        
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key].toString().toLowerCase();
      const bValue = b[sortConfig.key].toString().toLowerCase();

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

    return (
        <div className="w-full overflow-x-auto rounded-lg border shadow-sm">
            <table className="min-w-[600px] sm:min-w-full table-auto border-collapse text-xs sm:text-sm"> 
                <thead className='bg-indigo-100 text-gray-700'>
                    <tr>
                        {columns.map((col)=>(
                            <th 
                            key={col.accessor}  
                            className="text-left px-2 py-2 sm:px-4 sm:py-3 font-semibold border-b border-gray-300 cursor-pointer select-none whitespace-nowrap"
                            onClick={() => handleSort(col.accessor)}
                            >
                                 <div className="flex items-center gap-1">
                                   {col.header}
                                   {sortConfig.key === col.accessor && (
                                   sortConfig.direction === 'asc' ? (
                                   <ChevronUp size={14} />
                                   ) : (
                                  <ChevronDown size={14} />
                                        )
                                   )}
                                  </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    {sortedData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                    {columns.map((col) => (
                   <td key={col.accessor} className="px-2 py-2 sm:px-4 sm:py-3 whitespace-nowrap text-gray-700">
                    {typeof col.cell === 'function' ? col.cell(row) : row[col.accessor]}
                  </td>
              ))}
            </tr>
          ))}
           </tbody>
            </table>
        </div>
    )
}
export default Table;