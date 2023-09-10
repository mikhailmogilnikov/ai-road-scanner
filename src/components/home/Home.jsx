import { NavLink } from 'react-router-dom'
import AiAnimation from '../../animations/AiAnimation'
import AttachAnimation from '../../animations/AttachAnimation'
import MapAnimation from '../../animations/MapAnimation'
import '../../styles/home.scss'

export const Home = () => {
	return (
		<div className='home-wrapper'>
			<div className='big-letters-wrapper'>
				<h2 className='big-letters'>
					Распознаёт дефекты дорожного покрытия при помощи искуственного
					интеллекта.
				</h2>
			</div>

			<div className='button-wrapper'>
				<NavLink to={'/presentation'} className='button select-zoom'>
					<p>Презентация проекта</p>
				</NavLink>
				<NavLink to={'/map'} className='button premier-button select-zoom'>
					<p>Открыть карту</p>
				</NavLink>
			</div>

			<h2 className='text-mini-title'>Как это работает?</h2>

			<div className='line-wrapper'>
				<div className='line-header-green'></div>
				<div className='line-green'></div>
			</div>

			<div className='card-wrapper'>
				<div className='card-head' style={{ paddingRight: '1em' }}>
					<AttachAnimation />
				</div>
				<div className='card-text-wrapper'>
					<h2>Сбор данных</h2>
					<p className='low-opacity'>
						Специальный робот при помощи датчиков, камер и LiDAR фиксирует всю
						информацию о дорожном полотне.
					</p>
				</div>
			</div>

			<div className='line-wrapper'>
				<div className='line-blue'></div>
				<div className='line-header-blue'></div>
				<div className='line-blue-dashed'>
					<div className='line-fader'></div>
				</div>
			</div>

			<div className='card-wrapper'>
				<div className='card-head'>
					<AiAnimation />
				</div>
				<div className='card-text-wrapper'>
					<h2>Анализ проблем</h2>
					<p className='low-opacity'>
						Нейросеть обрабатывает изображения с камер в поисках проблемных мест
						и фиксирует координаты поврежденных участков.
					</p>
				</div>
			</div>

			<div className='line-wrapper'>
				<div className='line-orange-dashed'>
					<div className='line-fader'></div>
				</div>
				<div className='line-header-orange'></div>
			</div>

			<div className='card-wrapper'>
				<div className='card-head'>
					<MapAnimation />
				</div>
				<div className='card-text-wrapper'>
					<h2>Визуализация</h2>
					<p className='low-opacity'>
						В результате выстраивается карта местности с отметками, на которых
						были замечены дефекты дорожного покрытия.
					</p>
				</div>
			</div>

			<div className='mid-text-wrapper'>
				<h2>Исследовать.</h2>
			</div>

			<div className='button-wrapper' style={{ paddingBottom: '4em' }}>
				<NavLink to={'/presentation'} className='button select-zoom'>
					<p>Презентация проекта</p>
				</NavLink>
				<NavLink to={'/map'} className='button premier-button select-zoom'>
					<p>Открыть карту</p>
				</NavLink>
			</div>
		</div>
	)
}
