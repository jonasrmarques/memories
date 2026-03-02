import "./Mensagem.css"

const Mensagem = () => {
  return (
    <div className="mensagem-container">
      <div className="mensagem-card">

        <h2>
            <i className="fa-solid fa-envelope-open-text"></i> Eu lhe dou metade da minha vida e você me dá metade da sua! <i className="fa-solid fa-envelope-open-text"></i>
        </h2>

        <p>
          “Amar-te é como habitar dois universos ao mesmo tempo: o que existe fora de mim, com suas ruas, seus ruídos e suas horas, e o que nasce dentro do meu peito quando penso em ti, onde o tempo desacelera, a lógica se dissolve e tudo passa a fazer sentido apenas porque teu nome ecoa como verdade.”
        </p>
        <p>
            - Fernando Pessoa
        </p>

        

        <p className="assinatura">
            Eu amo amar você{" "}
            <i className="fa-solid fa-heart"></i>
        </p>

      </div>
    </div>
  )
}

export default Mensagem