import React from 'react';

export default function CryptoCard({ coin }) {
    return (
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
    )
}