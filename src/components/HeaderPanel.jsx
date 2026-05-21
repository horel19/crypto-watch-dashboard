import React from 'react';
import { TrendingUp, Sun, Moon } from 'lucide-react';

export default function HeaderPanel({ darkMode, setDarkMode }) {
    return (
        <header className='flex justify-between items-center mb-8'>
        <h1 className='text-2xl font-bold flex items-center gap-2'>
          <TrendingUp className='text-green-500' /> Crypto Watch
        </h1>
        <button onClick={() => setDarkMode(!darkMode)} className='p-2 rounded-full hover:bg-gray-700'>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>
    )
}