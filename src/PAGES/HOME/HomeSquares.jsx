import React from 'react'


const HomeSquares = () => {

  return (

    <div id="squares" className='flex'>

        <div className='square'>
            <img
            width={500}
            src='https://i.etsystatic.com/16538771/r/il/32410e/6583043325/il_794xN.6583043325_93ad.jpg'></img>
        </div>
        <div className='square one flex justify-center column'>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000"><path d="M480-120q-66 0-113-47t-47-113H200q-33 0-56.5-23.5T120-360q0-140 92-241.5T440-718v-122h80v122q136 15 228 116.5T840-360q0 33-23.5 56.5T760-280H640q0 66-47 113t-113 47ZM200-360h560q0-116-82-198t-198-82q-116 0-198 82t-82 198Zm280 160q33 0 56.5-23.5T560-280H400q0 33 23.5 56.5T480-200Zm0-80Z"/></svg></p>
            <p>Make your indoor style shine, <br/> with our timeless lighting</p>
        </div>
        <div className='square'>
            <img
            width={300}
            src='https://i.etsystatic.com/16538771/r/il/417656/5681630832/il_794xN.5681630832_lbes.jpg'></img>
        </div>

        <div className='square two flex justify-center column'>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#ffffff"><path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z"/></svg></p>
            <p>Light up your ideas, illuminate your choices</p>
        </div>
        <div className='square'>
            <img
            width={300}
            src='https://i.etsystatic.com/16538771/r/il/7a629d/6610309460/il_794xN.6610309460_brsn.jpg'></img>
        </div>
        <div className='square three flex justify-center column'>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000"><path d="M440-200v-320H240q-20 0-32-16t-6-36l78-252q8-25 29-40.5t47-15.5h248q26 0 47 15.5t29 40.5l78 252q6 20-6 36t-32 16H520v320h-80ZM294-600h372l-62-200H356l-62 200Zm26 520v-80h320v80H320Zm160-620Z"/></svg></p>
        <p>Add a warm touch to your home</p>
        </div>

    </div>
  )
}

export default HomeSquares