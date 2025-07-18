import React from 'react';
import {Menu} from 'lucide-react';

const Header = ({toggleSidebar}) =>{
    return(
        <div className='md:hidden bg-white shadow p-4 flex items-center justify-between'>
            <button onClick={toggleSidebar}>
                <Menu className="h-6 w-6 text-gray-800" />
            </button>
            <h1 className="text-lg font-semibold">Internship Dashboard</h1>
        </div>
    )
}
export default Header;