import { CloudArrowUp, WebhooksLogo } from '@phosphor-icons/react'

const Scale = () => {
	return (
		<div className='wrapper'>
			<h2 className='text-mini-title'>Масштабируемость</h2>
			<div className='scale-wrapper'>
				<div className='scale-item'>
					<CloudArrowUp weight='bold' className='icon-big'/>
					<p>Использование значений не с одного робота, а с нескольких. Карта местности при этом будет общая.</p>
				</div>
				<div className='scale-item'>
					<WebhooksLogo weight='bold' className='icon-big'/>
					<p>Создание АПИ для легкой интеграции с другими сервисами.</p>
				</div>
			</div>
		</div>
	)
}

export default Scale
