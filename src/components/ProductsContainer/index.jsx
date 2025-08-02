import { useEffect, useState } from 'react'
import './index.css'

function ProductsContainer({className}){
    const [sucessProducts, setSucessProducts] = useState([]);;

    useEffect(() => {
        fetch('http://localhost:3000/sucess-products')
        .then(res => res.json())
        .then(data => {
            setSucessProducts(data);
        })

    })

    return(
        <div className={`container-products ${className}`}>
            <h1 className="title-products">Nossos Produtos de Sucesso</h1>
            <div className='container-sucess-products'>
                {sucessProducts?.map((product, index) => (
                    <span className='container-product' key={index}>
                        <img className='img-product' src={product.url} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>Valor: {product.price}</p>
                        <button className='button-book' type='button'>Encomendar</button>
                    </span>
                ))}
            </div>
            <div className='container-link'>
                <a href='/products' className='link-products'>Veja mais produtos</a>
                <a href='/make-your-cake' className='link-make-your-cake'>Monte seu bolo</a>
            </div>
        </div>
    )
}

export default ProductsContainer