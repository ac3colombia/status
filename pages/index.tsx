import type { NextPage } from 'next'
import IncidentsSection from "../src/incidents"
import ServicesSection from "../src/services"

const Home: NextPage = () => {
  return (
    <div className='h-full w-full '>
      <div className="mt-20 absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="w-full h-40 absolute bg-light-purple dark:purple dark:bg-black">
        <div className="sm:ml-0 ml-5 mr-0 mt-3 md:pl-80 md:pr-80 sm:w-full h-full bg-purple-500 dark:bg-black flex items-center gap-4">
          <a href="https://www.ac3.org.co/" className="flex-shrink-0">
            <img 
              src="/AC3_logo.svg" 
              className="h-12 w-auto object-contain" 
              alt="AC3"
            />
          </a>
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            Estado de servicios de AC3
          </h1>
        </div>
      </div>
      <div className='mt-20 w-full absolute overflow-scroll	'>
        <ServicesSection />
        <div className="text-center text-base font-medium leading-7 text-gray-900">
          <a href="https://www.ac3.org.co/">AC3 - Asociación de Cartografía Colaborativa de Colombia (OpenStreetMap Colombia)</a><br/>
          Si ves un problema, puedes <a href="https://github.com/ac3colombia/status/issues">crear un incidente en GitHub</a>.
        </div>
      </div >
    </div>
  )
}

export default Home;
