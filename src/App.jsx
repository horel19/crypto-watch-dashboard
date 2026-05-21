import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, Sun, Moon } from 'lucide-react';
import CryptoCard from './components/CryptoCard';
import SearchBar from './components/SearchBar';

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
      <SearchBar setSearch={setSearch} />

      {/* Grid Display */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredCoins.map(coin => (
          <CryptoCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
}