export default function ConTaTo() {
    return (
      <div className="flex items-center">
        <div className="m-2 gap-6 p-2 bg-azul-principal rounded-lg lg:m-10 lg:p-6">
          <div className="flex flex-col">
            <h1 className="text-white text-2xl font-bold mb-4 ">Entre em Contato Conosco</h1>
            <p className="text-white mb-4">
              Estamos aqui para ajudar! Se você tiver qualquer dúvida, sugestão ou
              precisar de assistência, não hesite em nos contatar através dos
              seguintes meios:
            </p>
          </div>
  
          <div className="flex flex-col mb-4">
            <h2 className="text-white text-xl font-semibold">Telefone:</h2>
            <p className="text-white">
              +55 (11) 1234-5678<br />
              Atendimento de segunda a sexta-feira, das 9h às 18h.
            </p>
          </div>
  
          <div className="flex flex-col mb-4">
            <h2 className="text-white text-xl font-semibold">E-mail:</h2>
            <p className="text-white">Cod.g@gmail.com.br<br />Respostas geralmente em até 24 horas úteis.</p>
          </div>
  
          <div className="flex flex-col">
            <h2 className="text-white text-xl font-semibold">Redes Sociais:</h2>
            <p className="text-white">
              - Facebook: <a href="/" className="text-blue-400">facebook.com/nomeempresa</a><br />
              - Instagram: <a href="/" className="text-blue-400">instagram.com/nomeempresa</a><br />
              - LinkedIn: <a href="/" className="text-blue-400">linkedin.com/company/nomeempresa</a>
            </p>
          </div>
  
          <p className="text-white mt-4">
            Agradecemos seu contato e faremos o possível para atender sua solicitação com rapidez e eficiência!
          </p>
        </div>
      </div>
    );
  }
  