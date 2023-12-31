import React from 'react'
import Nav from '../Nav';
import Banner from '../Banner';
import Row from '../Row'
import requests from '../Request';
function HomeScreen() {

    return (
        <div className='bg' >
            {/* Nav */}
            <Nav />
            {/* Banner */}
            <Banner />
            {/* Row */}
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHororMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

        </div>
    )
}

export default HomeScreen