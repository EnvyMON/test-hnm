import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({item}) => {

	const navigate = useNavigate();

	const goToDetail = (id) => {
		navigate(`/product/${id}`)
	}

	return (
		<div 
			className='products-area' 
			onClick={()=>{
				goToDetail(item.id)
			}}
		>
			<img src={item.img} style={{maxWidth: "100%"}}/>
			<div style={{fontSize: "15px"}}>{item.choice ? "Concious choice" : null}</div>
			<div>{item.title}</div>
			<div style={{fontSize: "15px", fontWeight: "bold"}}>₩ {item.price.toLocaleString('ko-KR')} 원</div>
			<div style={{fontSize: "15px"}}>{item.new ? "신제품" : null}</div>
		</div>
	)
}

export default ProductCard