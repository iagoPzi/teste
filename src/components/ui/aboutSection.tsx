import Image from "next/image";

export function AboutSection() {
  return (
    <>
      <section className="">
        <div className="mx-auto flex max-w-[1480px] flex-col justify-center lg:flex-row">
          <div className="relative z-10 h-[460px] w-full max-w-[756px] overflow-hidden rounded-tr-[86px] bg-red-400">
            {/* <img
              className="" src="https://www.bdz.imb.br/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F0h9mrknt%2Fproduction%2Facbe9331aa309ea859afa3edcc91e3187a5bae97-2000x1410.jpg&w=1920&q=75"
              alt=""
            /> */}
            {/* <Image
              src={
                "https://www.bdz.imb.br/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F0h9mrknt%2Fproduction%2Facbe9331aa309ea859afa3edcc91e3187a5bae97-2000x1410.jpg&w=1920&q=75"
              }
              alt="hero image"
              fill
            /> */}
          </div>

          <div className="ml-5 pb-2 lg:-ml-5 lg:translate-y-16 lg:self-center">
            <h3 className="translate-y-5 pl-8 text-6xl font-bold lg:translate-y-0">
              Sobre nós
            </h3>
            <div className="bg-yellow-300 p-8">
              <p className="max-w-[600px]">
                A BDZ negócios imobiliários é uma empresa que atua no mercado
                desde 2014, dispondo de profissionais habilitados, que visam
                proporcionar a máxima credibilidade e segurança aos nossos
                clientes. Somos uma empresa familiar que se fortalece a cada
                dia, com um sólido conjunto de ideais. Contamos com vasta
                experiência no desenvolvimento de loteamentos, avaliações, venda
                e administração de imóveis.
                <br />
                <br />
                <b>
                  Estamos aqui para conduzir nossos clientes a realização de
                  seus sonhos!
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
