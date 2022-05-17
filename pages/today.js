import axios from "axios";
import bodyParser from "body-parser";
import { promisify } from "util";
import Header from "../components/header";

const getBody = promisify(bodyParser.urlencoded());

export async function getServerSideProps({ req, res }) {
    await getBody(req, res);
    try{
        const day = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const data = await axios.get('https://byabbe.se/on-this-day/'+month+'/'+day+'/events.json')
        const result = data.data.events;
        return {
            props: {
              events: result
            }
    }

    } catch (error) {
         console.error(error)
        }
}

export default function IndexPage({events}) {
  return (
    <>
    <Header />
    
    <div className="pb-20 pt-10 bg-primary rounded-b-[10%] flex flex-col justify-center items-center gap-4">
        <div className="bg-white rounded-lg w-3/4 flex flex-col items-center divide-y divide-primary p-5 px-10">
            {
            events.map(events => {
                return(
                <div className="flex flex-col justify-center items-center py-4 w-full">
                    <h1 className="font-bold text-2xl text-secondary">{events.year}</h1>
                    <h2 className="font-bold text-lg">{events.description}</h2>
                </div>
                )
            })
            }
        </div>
    </div>
    </>
  );
}