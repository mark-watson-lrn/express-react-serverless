import isoFetch from 'isomorphic-fetch'

 const fetchUserData = () => {
    return isoFetch('https://jsonplaceholder.typicode.com/users').then(data => data.json())
}

export default fetchUserData;
