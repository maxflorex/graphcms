import { gql, GraphQLClient } from 'graphql-request'
import { useState } from 'react'
import Footer from '../../components/Footer'
import { FaPlay } from 'react-icons/fa';


export const getServerSideProps = async (pageContext) => {

    const url = process.env.ENDPOINT

    const graphQLCLient = new GraphQLClient(url, {
        headers: {
            'Authorization': `Bearer ${process.env.MY_TOKEN}`
        }
    })

    const pageSlug = pageContext.query.slug

    const query = gql`
        query($pageSlug: String!) {
            video(where: {
            slug : $pageSlug
            }) {
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


    const variables = {
        pageSlug,
    }


    const data = await graphQLCLient.request(query, variables)
    const video = data.video



    return {
        props: {
            video
        }
    }

}

const changeToSeen = async (slug) => {
    await fetch('/api/changeToSeen', {
        method: 'POST',
        headers: {
            "content-Type": 'application/json'
        },
        body: JSON.stringify({ slug })
    })
}

const Video = ({ video }) => {

    const [watching, setWatching] = useState(false)

    return (
        <>
            {!watching && <>
                < img src={video.thumbnail.url} alt="Video picture" className='absolute top-0 w-full h-full object-cover opacity-20 blur' />

                <div div className='relative flex flex-col justify-center h-[100vh] w-full lg:w-1/2 p-32'>
                    <h1 className='text-4xl font-semibold pb-8'>{video.title}</h1>
                    <div className="flex gap-4 py-4">
                        {video.tags.map((data, index) => (
                            <h1 key={index} className='py-2 px-3 bg-slate-800/50 backdrop-blur-sm rounded-md hover:scale-110 cursor-pointer duration-110 transition-all'>{data}</h1>
                        ))}
                    </div>
                    <p className='text-lg leading-8'>{video.description}</p>
                    <div className="flex items-start bg-white rounded-md mr-auto py-4 px-6 mt-8 cursor-pointer hover:scale-110 duration-300 active:scale-100 gap-2 text-black" onClick={() => setWatching(!watching)}>
                        <FaPlay className="text-xl mx-auto" />
                        <h1 className='font-semibold uppercase'>Play Trailer</h1>
                    </div>
                </div>
            </>}

            {
                watching && (<>
                    <video width={'100%'} controls className='max-h-[85vhclear
                    ]' >
                        <source src={video.mp4.url} type='video/mp4' />
                    </video>
                    <div className='text-center font-semibold text-2xl px-3 py-2 cursor-pointer mt-16 hover:text-amber-500 duration-300'
                        onClick={() => setWatching(!watching)}
                    >Go back 🏃</div>
                </>
                )
            }
            <Footer />
        </>
    )
}

export default Video