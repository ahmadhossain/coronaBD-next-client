import { useState,useEffect } from 'react'
import Skeleton from './Skeleton';

function Card({users}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = "https://disease.sh/v3/covid-19/countries/BD";

    return (
        loading ?  <Skeleton/ >  :
    (   <div className="flex w-screen justify-center">
        <div className="flex-col divide-y-2 px-7 py-7 space-y-3 shadow-xl rounded-2xl bg-white">
            <div className="divide-y-2 pl-20 pr-5 space-y-3">
                <div className="text-right">
                    <div className="text-fuchsia-900 text-6xl md:text-7xl">{users.todaycases}</div>
                    <div className="text-gray-600 text-lg md:text-xl">New Cases</div>
                </div>
                <div className="text-right">
                    <div className="text-red-500 text-6xl md:text-7xl">{users.todayDeaths}</div>
                    <div className="text-gray-600 text-lg md:text-xl">New Deaths</div>
                </div>
            </div>
            <div className="flex pt-3  divide-x-2">
                <div className="text-right pr-2">
                    <div className="text-fuchsia-900 text-2xl md:text-3xl">{users.cases}</div>
                    <div className="text-gray-600 text-sm md:text-base">Total Cases</div>
                </div>
                <div className="text-right pl-2">
                    <div className="text-red-500 text-2xl md:text-3xl">{users.deaths} </div>
                    <div className="text-gray-600 text-sm md:text-base">Total Deaths</div>
                </div>
            </div>
        </div>
        </div> )
    )
}
export async function getStaticProps(context) {

  const res = await fetch('https://disease.sh/v3/covid-19/countries/BD')
  const data = await res.json()
  console.log(data)

  return {
    props: {
      users: data,
    },
  }
}

export default Card;

