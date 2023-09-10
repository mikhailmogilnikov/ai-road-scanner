import { Route, Routes } from 'react-router-dom'
import { Home } from './components/home/Home'
import Presentation from './components/presentation/Presentation'
import Map from './components/map/Map'

export const ProjectRoutes = () => {
	return (
		<main className='content-wrapper'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/presentation' element={<Presentation />} />
				<Route path='/map' element={<Map />} />
			</Routes>
		</main>
	)
}
