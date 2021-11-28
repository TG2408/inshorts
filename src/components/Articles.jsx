import { useEffect, useState } from "react";

import { getNews } from "../service/api";

// Components import
import Article from "./Article";

const Articles = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        dailyNews();
    }, [])

    const dailyNews = async() => {
        let response = await getNews();
        setNews( response.data);
        console.log(response);
    }

    return (
        news?.length>0 && news.map( article => (
            <div>
                <Article article={article}/>
            </div>
        ))
    )
}

export default Articles;