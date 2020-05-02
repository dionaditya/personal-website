import React from 'react'
import UndrawIcon from '../assets/images/undraw.svg'
import AboutBox from '../components/About/AboutBox'
import about from '../data/About'
import { UserWrapper, UserTitle, UserDescription, DownloadButton, UserTopic } from '../styles/indexStyle.js'
import Layout from '../components/layout'

const IndexPage = () => {
  return <Layout>
  <UserWrapper>
    <UserTitle>Dion <span>Aditya</span></UserTitle>
    <UserDescription>
      <div>
        <p>
        Hello, I'm Dion Aditya welcome to my portfolio. I am a
        self taught front end developer based on Semarang, Indonesia
        </p>
        <DownloadButton href="https://github.com/dionaditya/personal-website/blob/master/Dion%20new%20CV%20Front%20enD.pdf"  download title="Resume">Download Resume</DownloadButton>
      </div>
      <img src={UndrawIcon} alt="rashmi self" style={{
        marginTop: '-12em'
      }} />
    </UserDescription>
    <UserTopic>
      {
        about.map(item => (<AboutBox key={item.id} info={item} />))
      }
    </UserTopic>
  </UserWrapper>
  </Layout>
}

export default IndexPage
