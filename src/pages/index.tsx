import { Home } from '../components/Home'
import { GetStaticProps, NextPage } from 'next'
import { client } from '../graphql/client'
import { GET_MISSIONS_OVERVIEW } from '../graphql/queries/getMissionsOverview'
import { HomePageProps } from './types'

const HomePage: NextPage<HomePageProps> = ({ missions }) => {
  return <Home missions={missions} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_MISSIONS_OVERVIEW
  })

  const TEN_MINUTES_IN_SECONDS = 600

  return {
    props: {
      missions: data.missions
    },
    revalidate: TEN_MINUTES_IN_SECONDS
  }
}

export default HomePage
