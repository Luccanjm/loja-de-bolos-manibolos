import './index.css'

function Footer({className}){
    return(
        <div className={`${className}`}>
            <p>Desenvolvido por{' '}
                <a className='link-footer' target="_blank" href='https://www.linkedin.com/in/lucca-martinelli-2948151a3/'>
                    Lucca Martinelli
                </a>
            </p>
        </div>
    )
}

export default Footer