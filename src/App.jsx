import React, { useState, useEffect } from 'react';
import CryptoCard from './components/CryptoCard';
import SearchBar from './components/SearchBar';
import HeaderPanel from './components/HeaderPanel';

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
      
      <HeaderPanel darkMode={darkMode} setDarkMode={setDarkMode} />

      <SearchBar setSearch={setSearch} />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredCoins.map(coin => (
          <CryptoCard key={coin.id} coin={coin} />
        ))}
      </div>

    </div>
  );
}