import React, {useState, useEffect} from 'react'
import { FaTwitter, FaInstagram } from "react-icons/fa";
import axios from "axios"

const Quotes = () => {
  const url = "https://api.api-ninjas.com/v1/quotes?category=happiness";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchInfo = async () => {
    try{
      setIsLoading(true);
      const response = await axios.get(url, { 
      headers: {
        'X-Api-Key': 'TUIIvDgsg4CGYm4jVES3xQ==XyavOw8NwWX4lUTW'
      }
    });
    setData(response.data);
    } catch(error){
      console.log('Error fetching dog image', error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div id="quote-box">
      <div id="quote-text">
        <p>{isLoading ? 'Loading quote...': data[0]?.quote}</p>
      </div>
      <div id="quote-author">
        <p>{isLoading ? '' : `- ${data[0]?.author}`}</p>
      </div>
      <div className='button-wrapper'>
        <div id="icon-wrapper">
          <a href="twitter.com/intent/tweet" className='icon' target='_blank'><FaTwitter /></a>
          <a href='' className='icon' target='_blank'><FaInstagram /></a>
        </div>
        <button className='button' onClick={fetchInfo}>New Quote</button>
      </div>
    </div>
  )
}

export default Quotes