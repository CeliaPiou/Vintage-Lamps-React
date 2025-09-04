import React, { useState, useEffect } from 'react';

const AnimatedCounter = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCount(prevCount => {

        if (prevCount < 216) {
          return prevCount + 1;
        }
        else {
          clearInterval(interval);
          return 216;
        }
      });
    }, 5);

    // Clean up
    return () => clearInterval(interval);
  }, []);

  const [ avis, setAvis ] = useState(0);

  useEffect(() => {

    const avisInterval = setInterval(() => {

      setAvis(prevAvis => {

        if (prevAvis < 112) {
          return prevAvis + 1;
        }
        else {
          clearInterval(avisInterval);
          return 112;
        }

      })

    }, 10)

    return () => clearInterval(avisInterval)

  }, [])

  return (
    <section
    className='flex w-80 mt-big'
    id='compteurs'>

      <div className='flex column align-center'>
        <p style={{ fontSize: '3rem', margin: "0", fontWeight: 'bold' }}>+ {count}</p>
        <p>Sales on ETSY</p>
      </div>

      <div id='separative-line'></div>

      <div className='flex column align-center'>
        <p style={{ fontSize: '3em', margin: "0",  fontWeight: 'bold' }}>+ {avis}</p>
        <p>Reviews on ETSY</p>
      </div>

    </section>
  );
};

export default AnimatedCounter;
