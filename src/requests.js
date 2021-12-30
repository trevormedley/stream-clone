const APIKEY = 'd7d7d16c0908a65ebd9c4df0ef78a4d5';

const requests = {
    fetchNetflix: `/discover/tv?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_networks=213`,
    fetchHulu: `/discover/tv?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_networks=453`,
    fetchDisney: `/discover/tv?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_networks=2739`,
    fetchHbo: `/discover/tv?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_networks=49`
}

export default requests;