import { CircleNotch, Clock } from '@phosphor-icons/react'
import '../../styles/map.scss'

const Map = () => {
	return (
		<div className='presentation-wrapper'>
			<div className='map-wrapper'>
				<div className='map-header'>
					<h1>Карта дефектов дорожного покрытия г. Москва</h1>
					<p className='low-opacity'>Данные обновлены: сегодня</p>
				</div>

				<div className='map'>
					<CircleNotch weight='bold' className='icon-big loader low-opacity'/>
				</div>
			</div>
		</div>
	)
}

export default Map
