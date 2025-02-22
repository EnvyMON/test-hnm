import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Login = ({setIsLogin}) => {

	const navigate = useNavigate();

	const loginUser = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const email = formData.get('email');
		const password = formData.get('pwd');

		if (email == "test" && password == "qwe123") {
			alert("Login Success");
			setIsLogin(true);
			navigate('/')

		} else {
			console.log("login fail")
			alert("Login Fail");
			setIsLogin(false);
		}
	}	


	return (
		<div 
			className="container mt-5"
			style={{ maxWidth: '600px' }}
		>
			<Form onSubmit={(e)=>{loginUser(e)}}>
				{/* 이메일 입력 */}
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>이메일 주소</Form.Label>
					<Form.Control type="text" placeholder="이메일을 입력하세요" name='email'/>
				</Form.Group>

				{/* 비밀번호 입력 */}
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>비밀번호</Form.Label>
					<Form.Control type="password" placeholder="비밀번호를 입력하세요" name='pwd'/>
				</Form.Group>

				{/* 제출 버튼 */}
				<Button variant="danger" type="submit">
				로그인
				</Button>
			</Form>
		</div>
	)
}

export default Login