import { Link } from "react-router-dom"

const HomePage = ({ films }) => {

	console.log(Link)
	return (
		<div className='homepageBtnsWrapper'>
				<div className="homepageBtns homepageBtnsOne">
					<Link to={`/films`}>
						<h2>Films</h2>
					</Link>
				</div>
			
				<div className="homepageBtns homepageBtnsTwo">
					<Link to={`/people`}>
						<h2>People</h2>
					</Link>
				</div>
		</div>
		
	)
}

export default HomePage