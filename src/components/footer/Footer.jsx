import { Scan } from '@phosphor-icons/react'
import '../../styles/footer.scss'
import HackatonLogo from '../../resources/svg/HackatonLogo'

export const Footer = () => {
	return (
		<footer className='footer-wrapper'>
			<div className='footer-content'>
				<div className='footer-item'>
					<div className='footer-title'>
						<Scan weight='bold' className='icon-big' />
						<h1>Сканер дорог</h1>
					</div>
					<div className='hackaton-footer'>
						<HackatonLogo />
					</div>
				</div>

				<div className='footer-item'></div>
			</div>
		</footer>
	)
}
