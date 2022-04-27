import Image from 'react-bootstrap/Image'
import starWarsWallpaper from '../img/star-wars-wallpaper.jpg'


const HomePage = () => {
	return (
		<div className='wallpaperWrapper'>
			<div className='wallpaper'>
				<Image src={starWarsWallpaper} />
			</div>	
		</div>
		
	)
}

export default HomePage