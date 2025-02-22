import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const PrivateRoute = ({page, isLogin}) => {

	const navigate = useNavigate();

	useEffect(()=>{
		if (isLogin == false) {
			navigate('/login')
		}
	}, [isLogin])

	return isLogin ? page : null;

}

export default PrivateRoute