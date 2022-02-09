import './App.css';
import CardGit from './components/CardGit';
import NavBar from './components/NavBar';
import Mock from './MockTemporario';
import { useState, useEffect } from 'react';
import React  from 'react';
import ModalDelete from './components/ModalDelete';
import EmptyPage from './components/DefaultPage';
import ListGit from './components/ListGit';
import Service from './service/Service'

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

	const [repositories, setRepositories] = useState([]);
	const [onRequestError, setOnRequestError] = useState(false);
	const [onRequestWarning, setOnRequestWarning] = useState(false);
	const [githubNameList, setGithubNameList] = useState([]);

	const addCardInDashbord = () => {
		
		let repositoryName = document.getElementById("basicInputText").value;
		
		if(githubNameList.length && githubNameList.indexOf(repositoryName) != -1){
			setOnRequestWarning(true);
			return;
		}

		Service.addRepositoryByName(repositoryName)
		.then((response) => {
			console.log("then")
            console.log(response)
			setOnRequestError(false);
			setOnRequestWarning(false);

			setGithubNameList([...githubNameList, response.data.full_name]);

			let githubCard = { 
				stars: response.data.stargazers_count,
				forks: response.data.forks_count,
				openIssues: response.data.open_issues_count,
				age: getYearsByCreatedAt(response.data.created_at),
				lastCommit: getTimeByUpdatedAt(response.data.updated_at),
				license: response.data.license.url || "N/A",
				language:response.data.language,
				name: response.data.full_name,
				logo: response.data.owner.avatar_url,
				id: response.data.id
			}

			setRepositories([...repositories, githubCard]);
			console.log("repositories");
			console.log(repositories);

        })
		.catch((error) => {
            console.log({error: true});
			console.log(error)
			setOnRequestError(true);
        });
		
	}

	return (
		<div className="App">
			<NavBar callbackAdd={addCardInDashbord} 
				onRequestError={onRequestError} 
				onRequestWarning={onRequestWarning}
				setOnRequestError={setOnRequestError}
				setOnRequestWarning={setOnRequestWarning}/>
			{!!repositories.length ? 
				<div className="container mt-5">
					<div className="row">
						{!!repositories.length && repositories.map((item) => (
							<div className="col-md-4" key={item.id}>
								<CardGit language={item.language}
									logo={item.logo}
									name={item.name}
									age={item.age}
									openIssues={item.openIssues}
									forks={item.forks}
									stars={item.stars}
									license={item.license.url}
									lastCommit={item.lastCommit}
									></CardGit>
							</div>
						))}
					</div>
				</div>
			: 
				<EmptyPage
					Title={"There is still nothing here"}
					Description={"Add some repositories by clicking add new repository"}
					buttonName={""}
					showButton={false}
					callbackButton={() => alert("teste")}
				></EmptyPage>	
			}
			<ModalDelete></ModalDelete>
		</div>
	);
}

export default App;
