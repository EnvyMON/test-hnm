import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router';

const ProductAll = () => {

	const [productList, setProductList] = useState(null);
	const [query, setQuery] = useSearchParams();

	const getProductAll = async() => {
		let findQuery = query.get("q");
		// let url = `http://localhost:3000/products`;
		let url = `https://my-json-server.typicode.com/EnvyMON/test-hnm/products`;
		let res = await fetch(url);
		let data = await res.json();

		// 검색된 데이터 중에서 title 에 findQuery 문자열이 포함되어있는걸 다시 필터링 하겟다
		if (findQuery) {
			data = data.filter(item => item.title.toLowerCase().includes(findQuery.toLowerCase()));
		}

		setProductList(data);
	}

	useEffect(()=>{
		getProductAll();
	}, [query])

	return (
		<div>
			<Container>
				<Row>
					{
						productList?.map((item, idx)=>(
							<Col lg={3} key={idx} style={{padding: "0 10px"}}>
								<ProductCard item={item}/>
							</Col>
						))
					}
				</Row>
			</Container>
		</div>
	)
}

export default ProductAll