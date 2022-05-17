import Header from '../components/header'
import { db } from '../components/lib/db'

export async function getServerSideProps() {
const facts = await db.select('*').from('facts');
var data = Object.values(JSON.parse(JSON.stringify(facts)))
  return {
   props:{ data
     
    }
  }
}



function Index({data}) {

  return (
  <div className='page'>
    <div className=''>
   <Header showBar={true} />
   </div>
   <div className='content py-20 bg-primary rounded-b-[10%]'>
     <div className='flex flex-wrap justify-around gap-8 w-full '>
       {data.map(entery => {
       return(
       <div key={entery.id} className='bg-white flex justify-between items-center rounded-lg w-[400px] h-[80px] px-5'>
         <div>
          <h1 className='font-extrabold text-xl'>{entery.fact_title}</h1>
          <h1 className='ml-5'>{entery.category}</h1>
          <h1 className='ml-5'>{entery.date}</h1>
         </div>
         <div>
          <h1 className='text-3xl flex justify-center text-white bg-secondary rounded-full w-[40px] h-[40px]'>{entery.id}</h1>
         </div>
       </div>)
     })}
     </div>
   </div>
   <div className='content'>
     
   </div>
  </div>

  )
}

export default Index
