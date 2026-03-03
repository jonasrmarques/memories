import { useEffect, useState } from "react"
import "./ListaMusica.css"

const ListaMusica = () => {
  const [musicas, setMusicas] = useState([])
  const [musicaSelecionada, setMusicaSelecionada] = useState(null)

  useEffect(() => {
    fetch("https://memories-back-neob.onrender.com/api/musicas/")
      .then(res => res.json())
      .then(data => {
        setMusicas(data)
        if (data.length > 0) {
          setMusicaSelecionada(data[0])
        }
      })
      .catch(err => console.error(err))
  }, [])

  const gerarEmbed = (url) => {
    if (!url) return ""
    return url.replace("open.spotify.com/track/", "open.spotify.com/embed/track/")
  }

  return (
    <div className="musica-container">

        <h2>
            <i className="fa-solid fa-music"></i> Me Lembram Você <i className="fa-solid fa-music"></i>
        </h2>

        {musicaSelecionada && (
            <div className="player">
                <iframe
                src={gerarEmbed(musicaSelecionada.spotify)}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                ></iframe>
            </div>
        )}

        <div className="select-wrapper">
            <select
                value={musicaSelecionada?.id || ""}
                onChange={(e) => {
                const musica = musicas.find(m => m.id === Number(e.target.value))
                setMusicaSelecionada(musica)
                }}
            >
                {musicas.map(musica => (
                <option key={musica.id} value={musica.id}>
                    {musica.titulo}
                </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default ListaMusica