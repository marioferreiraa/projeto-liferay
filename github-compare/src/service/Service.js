import axios from 'axios';

const Service = {

    addRepositoryByName (name) {
        let url = `https://api.github.com/repos/${name}`;
        return axios.get(url)
    }

}

export default Service;