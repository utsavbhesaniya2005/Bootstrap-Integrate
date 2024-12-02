import { useEffect, useState } from 'react';
import './Counter.css'

const counters = [
    {
        id: 1,
        count: 54,
        data: "Active Students"
    },
    {
        id: 2,
        count: 98,
        data: "Faculty Courses"
    },
    {
        id: 3,
        count: 651,
        data: "Best Professors"
    },
    {
        id: 4,
        count: 24,
        data: "Award Achieved"
    }
];

const Counter = () => {

    const [currentCounts, setCurrentCounts] = useState(
        counters.map(counter => ({ id: counter.id, count: 0 }))
    );

    useEffect(() => {

        counters.forEach(counter => {
            let counterValue = 0;
            const interval = setInterval(() => {
                if(counterValue < counter.count){
                    counterValue += Math.ceil(counter.count / 100); 
                    setCurrentCounts(prevCounts => prevCounts.map(item =>
                        item.id === counter.id
                        ? { ...item, count: counterValue }
                        : item
                    )
                    );
                }else{
                    clearInterval(interval); 
                }
            }, 40); 
        });
    }, []);

    return(
        <>
            <section className="count my-100">
                <div className="container">
                    <div className="row p-5 justify-content-between rounded-5" style={{ backgroundColor: '#282568'}}>
                       
                        {
                            counters.map((counter, id) => (
                                <div key={id} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                    <div className="first-count position-relative text-center">
                                        <div className="counter d-flex align-items-center justify-content-center">
                                            <h2>{currentCounts.find(item => item.id === counter.id)?.count || 0}</h2>
                                            <span>K+</span>
                                        </div>
                                        <span>{counter.data}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default Counter;