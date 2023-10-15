import React from 'react'

export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className={`flex ${value.name === "Bryan Tam (he/him)" ? 'bg-amber-100/70 pl-2 pr-2 pt-2 pb-2 rounded-full' : ''}`} key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />
            
                            <div className="info">
                                <h3 className='name text-dark-olive'>{value.name}</h3>
                            </div>                
                        </div>
                        <div className="item text-dark-olive">
                            <span>{'$' + value.total}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}