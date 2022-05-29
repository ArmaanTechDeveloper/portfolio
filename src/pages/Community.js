import { useEffect, useState } from 'react';
import './pagesCss/Community.css';

// firebase function import
import { db } from '../firebase/config';
import {collection , onSnapshot , doc , updateDoc} from 'firebase/firestore';

export default function Community() {
    const [cards , setCards] = useState(null);
    const [fetchingData , setFetchingData] = useState('Fetching Data ...');
    const [alreadyLiked , setAlreadyLiked] = useState(false);
    const [liked , setLiked] = useState(false);

    useEffect(()=>{
        const ref = collection(db , 'community');
        onSnapshot(ref , (snapshot) =>{
                    let results = [];
                    snapshot.docs.forEach(doc => {
                    results.push({id: doc.id , ...doc.data()})
                });
                setCards(results);
            })
            setFetchingData(null);
    },[]);

    function handleLikes(id , card){
        const docRef = doc(db , 'community' , id);
        updateDoc(docRef , {
            likes: card.likes + 1,
        });
        setLiked(true);
        setAlreadyLiked(true);
    }

  return (
    <div id="community">
        {fetchingData && <h1>{fetchingData}</h1>}
        {cards && cards.map((card)=>(
            <div key={card.id}>
                <h3>{card.title}</h3>
                <div className="dateAuthor">
                    <p>{card.date}</p>
                    <p>- By {card.name}</p>
                </div>
                <p>{card.content}</p>
                <div className="likes">
                    <button className={liked?'green' : 'purple'} 
                    onClick={() => {
                        if(!alreadyLiked) {
                          handleLikes(card.id , card);
                        }
                      }}
                    >Like</button>
                    <p>{card.likes}</p>
                </div>
            </div>
        ))}
        {/* for testing purposes  */}
        {/* <div>
            <h3>Let's talk about twitter</h3>
            <div class="dateAuthor">
                <p>23/05/2022</p>
                <p>- By Armaan Singh</p>
            </div>
            <p>Twitter has been taken over by elon musk what can be the probability that twitter will grow in time or not . If elon puts real effors twitter can become the world's largest platform too</p>
            <div class="likes">
                <button class="purple">Like</button>
                <p>1001</p>
            </div>
        </div> */}
    </div>
  )
}
