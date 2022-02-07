import './App.css';
import CardGit from './components/CardGit';
import NavBar from './components/NavBar';
import Mock from './MockTemporario';
import React  from 'react';

let { stargazers_count: stars,
	forks_count: forks,
	open_issues_count: openIssues,
	created_at: createdDate,
	updated_at: updatedDate,
	license,
	language,
	full_name: name} = Mock;

let logo = Mock.owner.avatar_url;

const getYearsByCreatedAt = (createdAt) => {
	return new Date().getFullYear() - new Date(createdAt).getFullYear();
}

const getTimeByUpdatedAt = (updatedAt) => {
	
	let now = new Date(),
		past = new Date(updatedAt),
		difference = Math.abs(now - past),
		hours = Math.round(difference/(1000 * 3600 ));

	let formattedString = `${hours} hours ago`;
	
	if(hours >= 168){
		formattedString = `${past.toString().substring(4,7)} ${past.getDate()}, ${past.getFullYear()}`
	}

	if(hours > 24){
		let aux = Math.round(hours / 24)
		formattedString = `${aux} days ago`
	}

	return formattedString;
} 

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-4">
						<CardGit language={language}
							logo={logo}
							name={name}
							age={getYearsByCreatedAt(createdDate)}
							openIssues={openIssues}
							forks={forks}
							stars={stars}
							license={license.url}
							lastCommit={getTimeByUpdatedAt(updatedDate)}
							></CardGit>
					</div>
					<div className="col-md-4">
						<CardGit language={language}
							logo={logo}
							name={name}
							age={getYearsByCreatedAt(createdDate)}
							openIssues={openIssues}
							forks={forks}
							stars={stars}
							license={license.url}
							lastCommit={getTimeByUpdatedAt(updatedDate)}
							></CardGit>
					</div>
					<div className="col-md-4">
						<CardGit language={language}
							logo={logo}
							name={name}
							age={getYearsByCreatedAt(createdDate)}
							openIssues={openIssues}
							forks={forks}
							stars={stars}
							license={license.url}
							lastCommit={getTimeByUpdatedAt(updatedDate)}
							></CardGit>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
