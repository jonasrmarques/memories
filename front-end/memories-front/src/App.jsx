import { useState } from 'react'
import './App.css'
import MesesNamoro from './components/meses_namoro/MesesNamoro'
import ListaMusica from './components/lista_musica/ListaMusica'
import Mensagem from './components/mensagem/Mensagem'
import Carrosel from './components/carousel/Carrossel'

function App() {

  return (
    <>
      <div className="particles">
        {[...Array(40)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
      <MesesNamoro />
      <ListaMusica />
      <Mensagem />
      <Carrosel />
    </>
  )
}

export default App
