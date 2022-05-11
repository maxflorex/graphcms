import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'

export const getStaticProps = async () => {

  const url = process.env.ENDPOINT

  const graphQLCLient = new GraphQLClient(url, {
    headers: {
      'Authorization': `Bearer ${process.env.MY_TOKEN}`
    }
  })


  const query = gql`
  query {
    videos {
      createdAt,
      id,
      title,
      description,
      seen,
      slug,
      tags,
      thumbnail{
        url
      },
      mp4 {
        url
      }
    }
  }
`
  const data = await graphQLCLient.request(query)
  const videos = data.videos

  return {
    props: {
      videos,
    }
  }
}

const Home = ({ videos }) => {

  // GET RANDOM IMAGE
  const randomVideo = (videos) => {
    return videos[Math.floor(Math.random() * videos.length)]
  }

  console.log(videos)
  return (
    <>
      <div className='app'>
        <div className="main-video">
          <img src={randomVideo(videos).thumbnail.url} alt={randomVideo(videos).title} />
        </div>
      </div>
      <div className="video-feed">
        
      </div>
    </>
  )
}

export default Home
