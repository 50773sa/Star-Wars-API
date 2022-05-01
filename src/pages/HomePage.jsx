import { Link } from "react-router-dom"

const HomePage = () => {

	console.log(Link)
	return (
		<div className='homepageBtnsWrapper'>
			<Link to={`/films`}>
				<div className="homepageBtns homepageBtnsOne">
					<h2>Films</h2>
				</div>
			</Link>

			<Link to={`/people`}>
				<div className="homepageBtns homepageBtnsTwo">
					<h2>People</h2>
				</div>
			</Link>
		</div>
	)
}

export default HomePage