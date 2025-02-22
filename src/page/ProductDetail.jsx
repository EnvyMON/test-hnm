import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const ProductDetail = () => {

	const {id} = useParams();
	const [itemData, setItemData] = useState(null);
	const [sizeItem, setSizeItem] = useState(null);

	const getProductData = async(id) => {
		let url = `http://localhost:3000/products/${id}`;
		let res = await fetch(url);
		let data = await res.json();
		setItemData(data);
	}

	const handleSizeChange = (e) => {
		setSizeItem(e.target.value);
		console.log(e.target.value);
	};

	useEffect(()=>{
		getProductData(id);
	}, [])

	return (
		<div>
			<Container>
				<Row>
					<Col lg={6} className="text-end">
						<img src={itemData?.img} style={{maxWidth: "100%"}}/>
					</Col>
 
					<Col lg={6} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
						<div style={{fontSize: "15px", fontWeight: "bold", color: "red"}}>{itemData?.new ? "신상품" : null}</div>
						<div>{itemData?.title}</div>
						<div style={{fontSize: "15px", fontWeight: "bold"}}>₩ {itemData?.price.toLocaleString('ko-KR')} 원</div>
						<div style={{fontSize: "15px"}}>{itemData?.choice ? "Concious choice" : null}</div>
						
						{
							itemData?.size && (
								<div style={{maxWidth: "50%", marginTop: "20px"}}>
									<Form.Select onChange={handleSizeChange} size='sm'>
										<option>사이즈 선택</option>
										{itemData?.size.map((size, index) => (
											<option key={index} value={size}>
												{size}
											</option>
										))}
									</Form.Select>
								</div>
							)
						}

						<Button variant="dark" style={{marginTop: "30px"}}>추 가</Button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ProductDetail