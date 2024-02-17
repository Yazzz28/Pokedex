// Importe React et le composant PokemonCard
import React from 'react';
import PokemonCard from './components/PokemonCard';

// Définit le composant App
function App() {
  return (
    <div className="App">
      {/* Inclut le composant PokemonCard */}
      <PokemonCard />
    </div>
  );
}

// Exporte le composant App
export default App;
