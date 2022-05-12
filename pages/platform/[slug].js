import { gql, GraphQLClient } from 'graphql-request'
import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import PlatformHero from '../../components/PlatformHero'


export const getServerSideProps = async (pageContext) => {

    // CONNECT TO GRAPHCMS
    const url = process.env.ENDPOINT

    const graphQLCLient = new GraphQLClient(url, {
        headers: {
            'Authorization': `Bearer ${process.env.MY_TOKEN}`
        }
    })

    // GET PAGE SLUG NAME
    const pageSlug = pageContext.query.slug

    // GET ALL VIDEOS
    const query = gql`
        query {
            videos {
            createdAt
            id
            title
            description
            seen
            slug
            tags
            platform {
                id
            }
            thumbnail {
            url
            }
            mp4 {
            url
            }
        }
       }
      `
    // GET CURRENT PLATFORM
    const queryPlatform = gql`
     query($pageSlug: String!) {
    platform(where: {
        slug: $pageSlug
        }) {
            id,
            logo {
                 url
            }        
        }
    }
    `

    const variables = {
        pageSlug,
    }

    const data = await graphQLCLient.request(query)
    const videos = data.videos
    const dataPlat = await graphQLCLient.request(queryPlatform, variables)
    const videoPlat = dataPlat.platform
    const PlatformId = videoPlat.id
    const logoUrl = videoPlat.logo.url

    return {
        props: {
            videos,
            PlatformId,
            pageSlug,
            logoUrl
        }
    }
}

const Platform = ({ videos, PlatformId, pageSlug, logoUrl }) => {
    const [watching, setWatching] = useState('')
    const [random, setRandom] = useState('');

    // FUNCTION - FILTER VIDEOS
    const filterVideos = (videos, id) => { return videos.filter((video) => video.platform.id.includes(id)) }

    // FILTER ITEMS
    const filtered = filterVideos(videos, PlatformId)

    // GET RANDOM IMAGE
    const length = Math.random() * filtered.length;

    useEffect(() => {
        const rounded = Math.floor(length);
        setRandom(filtered[rounded]);
    }, []);

    return (
        <div>
            {!watching && <>
                <PlatformHero pageSlug={pageSlug} logo={logoUrl} setWatching={setWatching} watching={watching} random={random} />
                <div className="grid grid-cols-2 md:grid-cols-4 xl-grid-cols-6 2xl:grid-cols-6 gap-4 xl:gap-8 rounded-full p-4 md:p-8">
                    {filtered.map((video) => (
                        <a key={video.id} href={`/video/${video.slug}`}>
                            <Card thumbnail={video.thumbnail} title={video.title} />
                        </a>
                    ))}
                </div>
            </>
            }
            {
                watching && (<>
                    <video width={'100%'} controls>
                        <source src={random.mp4.url} type='video/mp4' />
                    </video>
                    <div className='text-center font-semibold text-2xl px-3 py-2 cursor-pointer mt-16 hover:text-amber-500 duration-300'
                        onClick={() => setWatching(!watching)}
                    >Go back 🏃</div>
                </>
                )
            }
            <Footer />
        </div>
    )
}

export default Platform