import axios from "axios";
import bodyParser from "body-parser";
import { promisify } from "util";
import Header from "../components/header";

const getBody = promisify(bodyParser.urlencoded());

export async function getServerSideProps({ req, res }) {
    await getBody(req, res);
    try{
        
        const data = await axios.post('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=description&rawcontinue=1&titles='+(req.body.searchTerm))
        const result = Object.values(data.data.query.pages)[0];
        if(result.description != undefined){
        return {
            props: {
              title: result.title,
              description: result.description
              
            }
        };
    } else return {
        props: {
            title: 'Not Found'
        }
    }

    } catch (error) {
         console.error(error+'gg')
        }
}

export default function IndexPage(props) {
  return (
    <>
    <Header />
    
    <div className="pb-20 pt-10 bg-primary rounded-b-[10%] flex flex-col justify-center items-center gap-4">
        <div className="w-full mb-10">
            <form className="flex px-4" method="post">
                <button type="submit" className="bg-gray-200 border border-black rounded-lg w-1/5 shadow-lg">Search</button>
                <input name="searchTerm" type={'search'} className="shadow-lg w-full rounded-lg bg-gray-200 border border-black" />
            </form>
        </div>
        <div className="bg-white rounded-lg w-3/4 flex flex-col items-center gap-4 p-5">
            <h1 className="font-bold text-4xl text-secondary">
                {props.title != 'Undefined' ? props.title : <></>}<br />
            </h1>
            <h2 className="text-lg font-bold">
                {props.title != 'Undefined' ? props.description : <></>}
            </h2>
        </div>
    </div>
    </>
  );
}