import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, Sun, Moon } from 'lucide-react';

export default function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // const mockData = [
    //   { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', current_price: 65000, price_change_24h: 2.5 },
    //   { id: 'ethereum', symbol: 'eth' name: 'Ethereum',, current_price: 3400, price_change_24h: -1.2 },
    // ];
    // setCoins(mockData);
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(res => res.json())
      .then(data => setCoins(data))
  }, []);

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()));

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} p-6`}>
      <header className='flex justify-between items-center mb-8'>
        <h1 className='text-2xl font-bold flex items-center gap-2'>
          <TrendingUp className='text-green-500' /> Crypto Watch
        </h1>
        <button onClick={() => setDarkMode(!darkMode)} className='p-2 rounded-full hover:bg-gray-700'>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Search Bar */}
      <div className='relative mb-6 max-w-md'>
        <Search className='absolute left-3 top-3 text-gray-400' size={18} />
        <input
          type='text'
          placeholder='Search crypto...'
          className='w-full pl-10 pr-4 py-2 rounded-lg border bg-transparent border-gray-700 focus:outline-none focus:border-green-500'
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Grid Display */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredCoins.map(coin => (
          <div key={coin.id} className='p-4 rounded-xl border border-gray-700 bg-gray-500/50 backdrop-blur'>
            <div className='flex justify-between items-center'>
              <div>
                <h2 className='font-semibold'>{coin.name}</h2>
                <span className={`font-bold text-shadow-sm text-shadow-black/30 text-sm ${coin.price_change_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.price_change_24h}%
                </span>
              </div>
              <p className='text-xl font-bold mt-4'>{coin.current_price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}