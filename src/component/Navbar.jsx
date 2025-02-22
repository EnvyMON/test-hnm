import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const Navbar = ({isLogin, setIsLogin}) => {

	const menuList = ['Women', 'Men', 'Baby', 'Kids', 'Home', 'Sale'];
	const navigate = useNavigate();

	const goToLogin = () => {
		navigate('/login')
	}
	const goToHome = () => {
		navigate('/')
	}
	const goToLogout = () => {
		setIsLogin(false)
		goToLogin()
	}

	const search = (e) => {
		if (e.key === 'Enter'){
			let value = e.target.value;
			navigate(`/?q=${value}`)
		}
	}

  	return (
		<div>
			{/* 로그인 버튼 */}
			<div>
				<div className='login-button'>
					<FontAwesomeIcon icon={faUser} />
					{
						isLogin 
						? <div style={{marginLeft: "10px"}} onClick={goToLogout}>로그아웃</div>
						: <div style={{marginLeft: "10px"}} onClick={goToLogin}>로그인</div>
					}
				</div>
			</div>

			{/* 로고 */}
			<div className='nav-section'>
				<img 
					width={100} 
					src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg" 
					onClick={goToHome}	
					style={{
						cursor: "pointer"
					}}
				/>
			</div>

			{/* 가운데 메뉴 & 우측 검색창 */}
			<div className='menu-section'>
				<div className='menu-spacer' />
				<div className='menu-area'>
					<ul className='menu-list'>
						{
							menuList.map((menu, i) => (
								<li key={i}>{menu}</li>
							))
						}
					</ul>
				</div>

				<div className='search-area'>
					<div className='search-box'>
						<FontAwesomeIcon icon={faSearch} />
						<input type='text' onKeyDown={search} />
					</div>
				</div>
			</div>
		</div>
  	)
}

export default Navbar