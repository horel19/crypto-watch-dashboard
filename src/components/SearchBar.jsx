import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ setSearch }) {
    return (
    <div className='relative mb-6 max-w-md'>
        <Search className='absolute left-3 top-3 text-gray-400' size={18} />
        <input
            type='text'
            placeholder='Search crypto...'
            className='w-full pl-10 pr-4 py-2 rounded-lg border bg-transparent border-gray-700 focus:outline-none focus:border-green-500'
            onChange={e => setSearch(e.target.value)}
        />
    </div>
    )
}