import './index.css'

function ApresentationContainer({className=''}){
    return(
        <div className={`apresentation-container ${className}`}>
            <h1 className="title-about-us">Sobre Nós</h1>
            <p className="text-about-us">
                Desde 1987, a nossa paixão é adoçar momentos especiais. Fundada com muito amor e receitas de família, a nossa loja de bolos nasceu com o propósito de oferecer sabores que despertam memórias e criam novas histórias.

                Ao longo das décadas, mantivemos o compromisso com a qualidade, o carinho em cada preparo e o sabor inconfundível que atravessa gerações. Cada bolo é feito artesanalmente, com ingredientes selecionados, respeito às tradições e um toque especial que só o tempo ensina.

                Somos mais do que uma confeitaria — somos parte das comemorações, dos abraços, das conquistas e dos reencontros. A cada fatia, entregamos um pedaço da nossa história.

                Seja bem-vindo à nossa casa. Aqui, tradição e sabor caminham juntos desde 1987.

            </p>
        </div>
    )
}

export default ApresentationContainer