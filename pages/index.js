import Head from 'next/head'
import Image from 'next/image'
import Info from '../components/Info'

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>salesforce</title>
        <link rel="ico" href='/favicon.ico'/>
      </Head>
    
    
    <Info/>
    <div className='scroll-block'>
   
   </div>
    </div>
    </>
  )
}
