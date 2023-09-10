import { Clock } from '@phosphor-icons/react'
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
					<Clock weight='bold' className='icon-big low-opacity'/>
				</div>
			</div>
		</div>
	)
}

export default Map
