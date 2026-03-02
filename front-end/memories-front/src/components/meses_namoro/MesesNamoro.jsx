import { useMemo } from "react"
import "./MesesNamoro.css"

const MesesNamoro = () => {

  const dataInicio = new Date(2026, 0, 1)

  const { meses, dias, totalDias } = useMemo(() => {
    const hoje = new Date()

    const diffTime = hoje - dataInicio
    const totalDias = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    let meses =
      (hoje.getFullYear() - dataInicio.getFullYear()) * 12 +
      (hoje.getMonth() - dataInicio.getMonth())

    let dataBase = new Date(dataInicio)
    dataBase.setMonth(dataBase.getMonth() + meses)

    if (hoje < dataBase) {
      meses--
      dataBase.setMonth(dataBase.getMonth() - 1)
    }

    const dias = Math.floor(
      (hoje - dataBase) / (1000 * 60 * 60 * 24)
    )

    return {
      meses,
      dias,
      totalDias
    }
  }, [])

  return (
    <div className="container-namoro">

      <div className="heart">
        <i className="fa-solid fa-heart"></i>
      </div>

      <h2>Para o amor da minha vida!</h2>
      <p className="data">
        <i className="fa-solid fa-calendar-days"></i> 
        {" "}Juntos desde 01 de Janeiro de 2026
      </p>

      <div className="cards">
        <div className="card">
          <h3>{meses}</h3>
          <p>
            <i className="fa-solid fa-clock"></i> Meses
          </p>
        </div>

        <div className="card">
          <h3>{dias}</h3>
          <p>
            <i className="fa-solid fa-hourglass-half"></i> Dias
          </p>
        </div>
      </div>

      <p className="total">
        <i className="fa-solid fa-star"></i>
        {" "}São {totalDias} dias de muita felicidade{" "}
        <i className="fa-solid fa-star"></i>
      </p>

    </div>
  )
}

export default MesesNamoro