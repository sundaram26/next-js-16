import React from 'react'

interface Album {
  userId: Number,
  id: Number,
  title: String
}

const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums = await response.json();
  return (
    <div className="text">
      {
        albums.map((album: Album, i: any) => (
          <div
            key={album ? album.userId : i}
          >
            {album.title}
          </div>
        ))
      }
    </div>
  )
}

export default Home