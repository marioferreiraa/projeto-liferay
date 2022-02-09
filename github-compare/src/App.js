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
	const [repositoriesAux, setRepositoriesAux] = useState([]);
	const [onRequestError, setOnRequestError] = useState(false);
	const [onRequestWarning, setOnRequestWarning] = useState(false);
	const [githubNameList, setGithubNameList] = useState([]);
	const [tagOrder, setTagOrder] = useState("");
	const [filterWithSearch, setFilterWithSearch] = useState("");

	const addCardInDashboard = () => {
		
		let repositoryName = document.getElementById("inputAdd").value;
		
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
				id: response.data.id,
				lastCommitDate: response.data.updated_at
			}

			setRepositories([...repositories, githubCard]);
			setRepositoriesAux([...repositoriesAux, githubCard]);
			console.log("repositories");
			console.log(repositories);
			document.getElementById("inputAdd").value = "";

        })
		.catch((error) => {
            console.log({error: true});
			console.log(error)
			setOnRequestError(true);
        });
		
	}

	const deleteCardFromDashboard = (name) => {
		console.log(`Deletar - ${name}`)
		setGithubNameList(githubNameList.filter(item => item !== name));
		setRepositories(repositories.filter(item => item.name !== name));
	}

	const orderArray = (tag) => {
		console.log(`tentando ordenar por ${tag}`);
		console.log("Old ====================")
		console.log(repositories)
		var newArray = repositories.sort((a,b) => {
			//return (a[`${tag}`] > b[`${tag}`]) ? 1 : ((b[`${tag}`] > a[`${tag}`]) ? -1 : 0)
			return b[`${tag}`] - a[`${tag}`]
		});
		
		console.log("New ====================")
		console.log(newArray)
		setRepositories(newArray);
	}

	useEffect(()=>{
		console.log(tagOrder);
		(tagOrder!="" ? orderArray(tagOrder) : console.log("tentou atualizar nada"))
	},[tagOrder])

	useEffect(()=>{
		if(filterWithSearch != ""){
			setRepositories(repositoriesAux.filter(item => item.name.indexOf(filterWithSearch) != -1))
		}else{
			setRepositories(repositoriesAux);
		}
	},[filterWithSearch])

	return (
		<div className="App">
			<NavBar callbackAdd={addCardInDashboard} 
				onRequestError={onRequestError} 
				onRequestWarning={onRequestWarning}
				setOnRequestError={setOnRequestError}
				setOnRequestWarning={setOnRequestWarning}
				orderArray={setTagOrder}
				setFilterWithSearch={setFilterWithSearch}/>
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
									deleteCardFromDashboard={deleteCardFromDashboard}
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
		</div>
	);
}

export default App;
