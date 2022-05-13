import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'
import Section from '../components/Section'
import Navbar from '../components/Navbar'
import Tags from '../components/Tags'
import UnSeen from '../components/UnSeen'

export const getStaticProps = async () => {

  const url = process.env.ENDPOINT

  const graphQLCLient = new GraphQLClient(url, {
    headers: {
      'Authorization': `Bearer ${process.env.MY_TOKEN}`
    }
  })


  const videosQuery = gql`
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

  const accountQuery = gql`
  query {
    account(where: {
      id: "cl31fzo04gmog0biq38mvmnwx" }) {
      username
      avatar {
        url
      }
    }
  }
`

  const platformQuery = gql`
  query {
    platforms {
      id,
      title,
      slug,
      logo {
        url
      }
    }
  }
`


  const data = await graphQLCLient.request(videosQuery)
  const videos = data.videos
  const accountData = await graphQLCLient.request(accountQuery)
  const account = accountData.account
  const platformsData = await graphQLCLient.request(platformQuery)
  const platform = platformsData.platforms

  return {
    props: {
      videos,
      account,
      platform
    }
  }
}

const Home = ({ videos, account, platform }) => {


  // GET RANDOM IMAGE
  const randomVideo = (videos) => {
    return videos[Math.floor(Math.random() * videos.length)]
  }

  // FILTER VIDEOS
  const filterVideos = (videos, genre) => {
    return videos.filter((video) => video.tags.includes(genre))
  }

  // SEEN VIDEOS
  const unSeenVideos = (videos) => {
    return videos.filter(video => video.seen == false || video.seen == null)
  }

  return (
    <>
      <Navbar account={account} />
      <div className='w-full'>
        <div className="w-full mb-16 overflow-hidden h-[50vh]">
          <img src={randomVideo(videos).thumbnail.url} alt={randomVideo(videos).title} className='w-full h-full object-cover blur-sm scale-110 overflow-hidden' />
        </div>
        <Tags videos={videos} platform={platform} />
      </div>
      <UnSeen genre={'Recommended for you'} videos={unSeenVideos(videos)} />
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden p-8 gap-8">
        <Section genre={'Family'} videos={filterVideos(videos, 'family')} />
        <Section genre={'Adventure'} videos={filterVideos(videos, 'adventure')} />
        <Section genre={'Heroic'} videos={filterVideos(videos, 'hero')} />
        <Section genre={'Star Wars'} videos={filterVideos(videos, 'starwars')} />
        <Section genre={'Disney'} videos={filterVideos(videos, 'disney')} />
      </div>
    </>
  )
}

export default Home
