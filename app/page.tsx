
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { services } from '@/data'
import { GetServerSidePropsContext } from 'next'
import ServiceCard from '@/components/servicecard'

const inter = Inter({ subsets: ['latin'] })

// https://www.youtube.com/watch?v=Ppvmwkx5fbg&list=PLQKg8mIgoxKpvIWyxMM-Nn6s_iww0KX53&index=3

export default function Home() {
  
  return (
    <div className='flex flex-col px-6 pt-1 flex-grow'>
    <h5 className='my-3 font-medium'>    
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!
      </h5>
      <div className='p-4 mt-5 bg-gray-400 flex-grow' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
        <div className='grid lg:grid-cols-2 gap-6'>
          {
            
            services.map(service => ( 
            <div className='bg-gray-200 rounded-lg lg:col-span-1'>
              <ServiceCard service={service}  />
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

// export const getServerSideProps = async (context:GetServerSidePropsContext)=>{

//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();
//   console.log("Server");

//   return {
//     props: {
//       services: data.services

//     }
//   }

// }
