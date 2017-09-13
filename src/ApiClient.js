const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=ebde9ff6d3e046223a9dcff3da143e1f&format=json';

function getArtists() {
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => ({
      id: artist.mbid,
      name: artist.name,
      image: artist.image[3]['#text'],
      comments: 140
    })))
}

export { getArtists }
