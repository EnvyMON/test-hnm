import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router'
import ProductAll from './page/ProductAll'
import Login from './page/Login'
import ProductDetail from './page/ProductDetail'
import Navbar from './component/Navbar'
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  
	const [isLogin, setIsLogin] = useState(false);



	return (
		<div>
			<Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
			
			<Routes>
				<Route path="/" element={<ProductAll />}/>
				<Route path="/login" element={<Login setIsLogin={setIsLogin}/>}/>
				<Route 
					path="/product/:id" 
					element={<PrivateRoute page={<ProductDetail />} isLogin={isLogin} />}
				/>
			</Routes>
		</div>
	)
}

export default App
