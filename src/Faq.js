import React, { useState } from 'react';

const Faq = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const handleQuestionClick = (questionNumber) => {
        setOpenQuestion(questionNumber === openQuestion ? null : questionNumber);
    };

    return (
        <div className='container px-20 '>
            <h2 className='text-5xl font-bold text-center py-12'>Frequently Asked Questions</h2>

            <div
                className={`question1   bg-slate-600  mx-32 flex justify-between px-12 py-3 my-2 hover:bg-slate-400 ${openQuestion === 1 ? 'open' : ''
                    }`}
                onClick={() => handleQuestionClick(1)}
            >
                <div className='left'>What is Netflix</div>
                <div className='right'>{openQuestion === 1 ? '-' : '+'}</div>
            </div>
            {openQuestion === 1 && (
                <div className='answer1'>
                    Netflix is a streaming service that offers a wide variety of award-winning TV
                    shows, movies, anime, documentaries, and more on thousands of internet-connected
                    devices.
                </div>
            )}

            <div
                className={`question2 bg-slate-600  mx-32 flex justify-between px-12 py-3 my-2 hover:bg-slate-400  ${openQuestion === 2 ? 'open' : ''
                    }`}
                onClick={() => handleQuestionClick(2)}
            >
                <div className='left'>How much does Netflix cost?</div>
                <div className='right'>{openQuestion === 2 ? '-' : '+'}</div>
            </div>
            {openQuestion === 2 && (
                <div className='answer2'>
                    Netflix is a streaming service that offers a wide variety of award-winning TV
                    shows, movies, anime, documentaries, and more on thousands of internet-connected
                    devices.
                </div>
            )}

            <div
                className={`question3  my-2  mx-32 bg-slate-600  flex justify-between px-12 py-3 hover:bg-slate-400 ${openQuestion === 3 ? 'open' : ''
                    }`}
                onClick={() => handleQuestionClick(3)}
            >
                <div className='left'>Where can I watch?</div>
                <div className='right'>{openQuestion === 3 ? '-' : '+'}</div>
            </div>
            {openQuestion === 3 && (
                <div className='answer3'>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly
                    on the web at netflix.com from your personal computer or on any
                    internet-connected device that offers the Netflix app, including smart TVs,
                    smartphones, tablets, streaming media players and game consoles. You can also
                    download your favorite shows with the iOS, Android, or Windows 10 app. Use
                    downloads to watch while you're on the go and without an internet connection.
                    Take Netflix with you anywhere.
                </div>
            )}

            <div
                className={`question4  my-2  mx-32 bg-slate-600  flex justify-between px-12 py-3 hover:bg-slate-400 ${openQuestion === 4 ? 'open' : ''
                    }`}
                onClick={() => handleQuestionClick(3)}
            >
                <div className='left'>Where can I watch?</div>
                <div className='right'>{openQuestion === 4 ? '-' : '+'}</div>
            </div>
            {openQuestion === 4 && (
                <div className='answer4'>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly
                    on the web at netflix.com from your personal computer or on any
                    internet-connected device that offers the Netflix app, including smart TVs,
                    smartphones, tablets, streaming media players and game consoles. You can also
                    download your favorite shows with the iOS, Android, or Windows 10 app. Use
                    downloads to watch while you're on the go and without an internet connection.
                    Take Netflix with you anywhere.
                </div>
            )}

            <div
                className={`question5  my-2  mx-32 bg-slate-600  flex justify-between px-12 py-3 hover:bg-slate-400 ${openQuestion === 5 ? 'open' : ''
                    }`}
                onClick={() => handleQuestionClick(5)}
            >
                <div className='left'>Where can I watch?</div>
                <div className='right'>{openQuestion === 5 ? '-' : '+'}</div>
            </div>
            {openQuestion === 5 && (
                <div className='answer5'>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly
                    on the web at netflix.com from your personal computer or on any
                    internet-connected device that offers the Netflix app, including smart TVs,
                    smartphones, tablets, streaming media players and game consoles. You can also
                    download your favorite shows with the iOS, Android, or Windows 10 app. Use
                    downloads to watch while you're on the go and without an internet connection.
                    Take Netflix with you anywhere.
                </div>
            )}

            <div
                className={`question6  my-2  mx-32 bg-slate-600  flex justify-between px-12 py-3 hover:bg-slate-400 ${openQuestion === 6 ? 'open' : ''
                    }`}
                onClick={() => handleQuestionClick(6)}
            >
                <div className='left'>Where can I watch?</div>
                <div className='right'>{openQuestion === 6 ? '-' : '+'}</div>
            </div>
            {openQuestion === 6 && (
                <div className='answer6'>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly
                    on the web at netflix.com from your personal computer or on any
                    internet-connected device that offers the Netflix app, including smart TVs,
                    smartphones, tablets, streaming media players and game consoles. You can also
                    download your favorite shows with the iOS, Android, or Windows 10 app. Use
                    downloads to watch while you're on the go and without an internet connection.
                    Take Netflix with you anywhere.
                </div>
            )}

            <div
                className={`question7  my-2  mx-32 bg-slate-600  flex justify-between px-12 py-3 hover:bg-slate-400 ${openQuestion === 7 ? 'open' : ''
                    }`}
                onClick={() => handleQuestionClick(7)}
            >
                <div className='left'>Where can I watch?</div>
                <div className='right'>{openQuestion === 7 ? '-' : '+'}</div>
            </div>
            {openQuestion === 7 && (
                <div className='answer7'>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly
                    on the web at netflix.com from your personal computer or on any
                    internet-connected device that offers the Netflix app, including smart TVs,
                    smartphones, tablets, streaming media players and game consoles. You can also
                    download your favorite shows with the iOS, Android, or Windows 10 app. Use
                    downloads to watch while you're on the go and without an internet connection.
                    Take Netflix with you anywhere.
                </div>
            )}

        <div className='text-center text-2xl my-10' >
                Ready to watch? Enter your email to create or restart your membership.
                
            

            </div>
            <div className='text-center flex justify-center item-center gap-5 my-5'>
                <input type='text' className='btn p-2 rounded-md bg-transparent border-slate-600 border-2 text-blue-900 placeholder-gray-400 ' placeholder='Email Address'/>
                <button className='btn bg-red-700 rounded-lg text-white px-4 py-2'>Get Started 
        {/* FontAwesomeIcon icon={faGreaterThan} /> */}
                </button>
            </div>
        </div>
    );
};

export default Faq;
