import axios from "axios";

export default async function handler(req, res) {
    
    try{
        
       const data = await axios.post('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=description&rawcontinue=1&titles='+Object.values(req.body))
        //res.status(200).json({result: Object.values(data.data.query.pages)[0]})
        res.status(200).redirect('/searchResult')
       // return ({result: Object.values(data.data.query.pages)[0]})
     } catch (error) {
        console.error(error)
        
      }}