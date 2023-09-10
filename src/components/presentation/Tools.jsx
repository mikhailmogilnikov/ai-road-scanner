import ToolsCard from './ToolsCard'
import Yolo from '../../resources/images/yolo.png'
import ROS2 from '../../resources/images/ros2.png'
import Python from '../../resources/images/4e105f96750899.5eb54f337fb8e.png'
import WSL from '../../resources/images/wsl.jpg'

const Tools = () => {
	return (
		<div className='wrapper'>
			<h2 className='text-mini-title'>Инструменты</h2>

			<div className='problem-wrapper'>
				<ToolsCard
					name={'YOLOv4'}
					desc={
						'Инструмент для поиска объектов на изображении в реальном времени, который можно использовать в компьютерном зрении. Он работает быстро и эффективно и может обнаруживать несколько объектов на изображении одновременно.'
					}
					img={Yolo}
				/>
					<ToolsCard
					name={'ROS2'}
					desc={
						'Набор инструментов и библиотек, которые позволяют разрабатывать программное обеспечение для управления роботами. Он поддерживает разные языки программирования и платформы, включая работу в реальном времени, и предоставляет возможность для легкого обмена информацией между разными частями робота. ROS2 может быть полезен для создания сложных робототехнических систем.'
					}
					img={ROS2}
				/>
				<ToolsCard
					name={'Python'}
					desc={
						'Python - это высокоуровневый язык программирования, который широко используется для создания различных типов программ, включая веб-приложения, мобильные приложения, анализ данных, искусственный интеллект, научные и исследовательские проекты, и многое другое. Он отличается простотой, удобством и читаемостью кода.'
					}
					img={Python}
				/>
				<ToolsCard
					name={'WSL'}
					desc={
						'Подсистема операционной системы Windows, которая позволяет запускать исполняемые файлы Linux-приложений внутри Windows без необходимости установки отдельной виртуальной машины с Linux. WSL позволяет использовать командную строку Linux и утилиты непосредственно в Windows-среде, а также обмениваться файлами между системами.'
					}
					img={WSL}
				/>
			</div>
		</div>
	)
}

export default Tools
