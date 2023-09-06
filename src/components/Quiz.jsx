 
import React, { useState,useEffect } from 'react'
import EasyQuiz from '../data/Easy.json'

function Quiz() {
        const [questions, setQuestions] = useState(null);
        const [qstChoice,setQstChoice]=useState('')
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
        const [lost,setlost]=useState(true)

        const [TmpChoice,setTmpChoice]=useState('');
        const [contenu,setContenu]=useState(null)
        function choice(e){
                e.stopPropagation();
                const targetElement = e.target;
                console.log(targetElement.tagName);
            
                if(targetElement.tagName!='DIV'){
                     
                                // Traverse up the DOM tree to find the parent div
                                const parentDiv = e.target.closest('.card');
                            
                                if (parentDiv) {
                                  // Get the class of the parent div
                                  const parentDivClass = parentDiv.className;
                                  setTmpChoice(parentDiv.getAttribute('data-choice'));
                                }
                              
                }else{
                        const choiceValue = targetElement.getAttribute('data-choice');
                       
                        setTmpChoice(choiceValue);
            
                }
                
        }
    
        function back(){
                 
                setTmpChoice(null)
                setQuestions(null)
                setQstChoice(null)
               setCurrentQuestionIndex(0)
        }
 

        console.log(lost)
 
        function solution(e){
                e.stopPropagation();
                
 
                var targetElement = e.target;
             
                console.log(targetElement)
                if(targetElement.tagName!='DIV'){
                     
                        // Traverse up the DOM tree to find the parent div
                        const parentDiv = e.target.closest('.card2');
                    
                        if (parentDiv) {
                          // Get the class of the parent div
                          const parentDivClass = parentDiv.className;
                           targetElement=parentDiv
                        }
                      
                } 
                const targetClassName=targetElement.className;

                const listsolutions=document.querySelectorAll('.card2')
                const filter='contrast-200'
                //RESET FILTER
                listsolutions.forEach(element => {
                        element.classList.remove(filter)
                })
                //Start filter
                targetElement.classList.add(filter)
                //console.log(targetElement.textContent.split('-')[1]);
                var choice=targetElement.textContent.split(')')[0]
                var solution=questions[currentQuestionIndex].reponse
                
                if(choice.toLowerCase()===solution.toLowerCase()){
                        console.log(currentQuestionIndex) 
                        if(currentQuestionIndex+1<questions.length){
                           
                                setCurrentQuestionIndex(currentQuestionIndex + 1);
                                targetElement.classList.remove(filter)
                              
                        }else{
                          
                                setContenu(<div className='text-red-800  w-full h-full flex justify-center items-center text-2xl'>Fin votre score est {currentQuestionIndex+1}<span className='text-xl text-blue-800 underline  cursor-pointer 'onClick={back} >,return</span></div>)
                        }
                   
                }else{
                        console.log(solution)     
                         console.log(choice)
                        setlost(true)
                        setContenu(<div className='text-red-800  w-full h-full flex justify-center items-center text-2xl'>Fin votre score est {currentQuestionIndex+1}<span className='text-xl text-blue-800 underline  cursor-pointer 'onClick={back} >,return</span></div>)
                }
                
                
                /*
                listsolutions.forEach(element => {
                        element.classList.remove('bg-EasyBg-300')
                        element.classList.add('bg-red-800')
                        console.log(element)
                });
                e.classList.remove('bg-red-800')*/
                //boucler sur tous les card ajouter un tawilindcss quand on click sure la carte apres n temps afficher le resultat
        } 
        //for question and contenu
        useEffect(()=>{
                //console.log(qstChoice)
                let contentToRender=null
                if(questions!=null){
 
                                if(qstChoice==='Easy' ){
                                contentToRender =(
                                <div className='bg-EasyBg-100 w-full h-full'>
                                        <div className='flex justify-center items-center gap-4 mt-10 relative'>
                                                <svg   onClick={back} className='absolute left-32 cursor-pointer' width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path  d="M37.1177 50.5386L37.1173 50.5383L35.3899 48.8125H58.4375C59.4072 48.8125 60.3372 48.4273 61.0229 47.7416C61.7085 47.0559 62.0938 46.1259 62.0938 45.1562V34.5312C62.0938 33.5616 61.7085 32.6316 61.0229 31.9459C60.3372 31.2602 59.4072 30.875 58.4375 30.875C57.4678 30.875 56.5378 31.2602 55.8521 31.9459C55.1665 32.6316 54.7812 33.5616 54.7812 34.5312V41.5H35.3899L37.1173 39.7742L37.1177 39.7739C37.8036 39.0879 38.189 38.1576 38.189 37.1875C38.189 36.2174 37.8036 35.2871 37.1177 34.6011C36.4317 33.9151 35.5013 33.5298 34.5312 33.5298C33.5612 33.5298 32.6308 33.9151 31.9448 34.6011L23.9765 42.5695C23.9764 42.5696 23.9762 42.5697 23.9761 42.5698C23.6363 42.9093 23.3668 43.3124 23.1829 43.7561C22.9989 44.2 22.9042 44.6758 22.9042 45.1562C22.9042 45.6367 22.9989 46.1125 23.1829 46.5564C23.3668 47.0001 23.6363 47.4032 23.9761 47.7427C23.9762 47.7428 23.9764 47.7429 23.9765 47.743L31.9448 55.7114C32.2845 56.0511 32.6877 56.3205 33.1315 56.5043C33.5753 56.6881 34.0509 56.7827 34.5312 56.7827C35.0116 56.7827 35.4872 56.6881 35.931 56.5043C36.3748 56.3205 36.778 56.0511 37.1177 55.7114C37.4573 55.3718 37.7267 54.9685 37.9106 54.5247C38.0944 54.081 38.189 53.6053 38.189 53.125C38.189 52.6447 38.0944 52.169 37.9106 51.7253C37.7267 51.2815 37.4573 50.8782 37.1177 50.5386ZM13.2812 14.2812H71.7188C72.8625 14.2812 73.9594 14.7356 74.7681 15.5444C75.5769 16.3531 76.0312 17.45 76.0312 18.5938V66.4062C76.0312 67.55 75.5769 68.6469 74.7681 69.4556C73.9594 70.2644 72.8625 70.7188 71.7188 70.7188H13.2812C12.1375 70.7188 11.0406 70.2644 10.2319 69.4556C9.4231 68.6469 8.96875 67.55 8.96875 66.4062V18.5938C8.96875 17.45 9.4231 16.3531 10.2319 15.5444C11.0406 14.7356 12.1375 14.2812 13.2812 14.2812Z" fill="#F8F8F8" stroke="#00A0E3" strokeWidth="2"/>
                                                </svg>
                                                <svg width="90" height="90" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M70.5 0C31.5135 0 0 31.725 0 70.5C0 89.1978 7.42766 107.13 20.649 120.351C27.1955 126.898 34.9674 132.091 43.5208 135.634C52.0743 139.176 61.2418 141 70.5 141C89.1978 141 107.13 133.572 120.351 120.351C133.572 107.13 141 89.1978 141 70.5C141 61.2418 139.176 52.0743 135.634 43.5208C132.091 34.9674 126.898 27.1955 120.351 20.649C113.805 14.1024 106.033 8.90945 97.4792 5.36649C88.9257 1.82354 79.7582 0 70.5 0ZM95.175 42.3C97.9797 42.3 100.669 43.4142 102.653 45.3973C104.636 47.3805 105.75 50.0703 105.75 52.875C105.75 55.6797 104.636 58.3695 102.653 60.3527C100.669 62.3359 97.9797 63.45 95.175 63.45C92.3703 63.45 89.6805 62.3359 87.6973 60.3527C85.7141 58.3695 84.6 55.6797 84.6 52.875C84.6 50.0703 85.7141 47.3805 87.6973 45.3973C89.6805 43.4142 92.3703 42.3 95.175 42.3ZM45.825 42.3C48.6297 42.3 51.3195 43.4142 53.3027 45.3973C55.2859 47.3805 56.4 50.0703 56.4 52.875C56.4 55.6797 55.2859 58.3695 53.3027 60.3527C51.3195 62.3359 48.6297 63.45 45.825 63.45C43.0203 63.45 40.3305 62.3359 38.3473 60.3527C36.3641 58.3695 35.25 55.6797 35.25 52.875C35.25 50.0703 36.3641 47.3805 38.3473 45.3973C40.3305 43.4142 43.0203 42.3 45.825 42.3ZM70.5 109.275C54.0735 109.275 40.1145 98.982 34.4745 84.6H106.526C100.815 98.982 86.9265 109.275 70.5 109.275Z" fill="#57B5DC" />
                                                </svg>
                                                <h3 className='text-white   text-8xl font-outline-blue uppercase self-center'>easy</h3>
                
                                        </div>
                                      {lost===false &&
                                        <div className='quiz-question mt-20 flex flex-col items-center gap-20'>
                                                <h3 className='question text-gray-900 text-5xl'>{questions[currentQuestionIndex].question}</h3>
                
                                                <div className='suggestion grid grid-cols-2 w-2/3 gap-10 justify-center'>
                                                
                                                        <div className='card2  choice0 h-32 bg-EasyBg-300 hover:bg-EasyBg-300 ' onClick={(e)=>solution(e)}>
                                                                <h3 className='text-gray-900 text-2xl'>{questions[currentQuestionIndex].propositions.a}</h3>
                                                        </div>
                                                        <div className='card2 choice1 h-32   bg-EasyBg-300 hover:bg-EasyBg-300'  onClick={(e)=>solution(e)}>
                                                                <h3 className='text-gray-900 text-2xl'>{questions[currentQuestionIndex].propositions.b}</h3>
                                                        </div>
                
                                                        <div className='card2 choice2 h-32  bg-EasyBg-300 hover:bg-EasyBg-300' onClick={(e)=>solution(e)}>
                                                                <h3 className='text-gray-900 text-2xl'>{questions[currentQuestionIndex].propositions.c}</h3>
                                                        </div>
                
                                                        <div className='card2 choice3  h-32 bg-EasyBg-300 hover:bg-EasyBg-300' onClick={(e)=>solution(e)}>
                                                                <h3 className='text-gray-900 text-2xl'>{questions[currentQuestionIndex].propositions.d}</h3>
                                                        </div>
                                                </div>
                                                <h3 className='text-Pblue'>{currentQuestionIndex+1}/{questions.length}</h3>
                                        </div>}
                                </div>
                                )
                                }

                  setContenu(contentToRender)          
                }    

                },[questions,currentQuestionIndex])
        //basic contenu and affection new question
        useEffect(() => {
   
                //console.log(TmpChoice)
                switch (TmpChoice) {
                        case 'choice-Easy':
                                setQstChoice('Easy')
                                setQuestions(EasyQuiz)
                                setlost(false)

                                break;
                        
                        default:
                                setContenu(            
                                <><h3 className="text-Pblack text-5xl mt-14">
                                                Choisissez la difficulté de le Quiz
                                        </h3><div className="card-container grid grid-cols-2 w-2/3 gap-4 mt-40">

                                                        <div className="card choice-Easy bg-EasyBg-100 hover:bg-EasyBg-200" data-choice="choice-Easy" onClick={(e) => choice(e)}>
                                                                <svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M70.5 0C31.5135 0 0 31.725 0 70.5C0 89.1978 7.42766 107.13 20.649 120.351C27.1955 126.898 34.9674 132.091 43.5208 135.634C52.0743 139.176 61.2418 141 70.5 141C89.1978 141 107.13 133.572 120.351 120.351C133.572 107.13 141 89.1978 141 70.5C141 61.2418 139.176 52.0743 135.634 43.5208C132.091 34.9674 126.898 27.1955 120.351 20.649C113.805 14.1024 106.033 8.90945 97.4792 5.36649C88.9257 1.82354 79.7582 0 70.5 0ZM95.175 42.3C97.9797 42.3 100.669 43.4142 102.653 45.3973C104.636 47.3805 105.75 50.0703 105.75 52.875C105.75 55.6797 104.636 58.3695 102.653 60.3527C100.669 62.3359 97.9797 63.45 95.175 63.45C92.3703 63.45 89.6805 62.3359 87.6973 60.3527C85.7141 58.3695 84.6 55.6797 84.6 52.875C84.6 50.0703 85.7141 47.3805 87.6973 45.3973C89.6805 43.4142 92.3703 42.3 95.175 42.3ZM45.825 42.3C48.6297 42.3 51.3195 43.4142 53.3027 45.3973C55.2859 47.3805 56.4 50.0703 56.4 52.875C56.4 55.6797 55.2859 58.3695 53.3027 60.3527C51.3195 62.3359 48.6297 63.45 45.825 63.45C43.0203 63.45 40.3305 62.3359 38.3473 60.3527C36.3641 58.3695 35.25 55.6797 35.25 52.875C35.25 50.0703 36.3641 47.3805 38.3473 45.3973C40.3305 43.4142 43.0203 42.3 45.825 42.3ZM70.5 109.275C54.0735 109.275 40.1145 98.982 34.4745 84.6H106.526C100.815 98.982 86.9265 109.275 70.5 109.275Z" fill="#57B5DC" />
                                                                </svg>
                                                                <h3 className='text-5xl font-outline-blue'>easy</h3>
                                                        </div>

                                                        <div className='card bg-MedBg-100  hover:bg-MedBg-200 '>
                                                                <svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M70.5 141C89.1978 141 107.13 133.572 120.351 120.351C133.572 107.13 141 89.1978 141 70.5C141 51.8022 133.572 33.8703 120.351 20.649C107.13 7.42766 89.1978 0 70.5 0C51.8022 0 33.8703 7.42766 20.649 20.649C7.42766 33.8703 0 51.8022 0 70.5C0 89.1978 7.42766 107.13 20.649 120.351C33.8703 133.572 51.8022 141 70.5 141ZM48.5789 48.4688C50.9161 48.4688 53.1576 49.3972 54.8103 51.0499C56.463 52.7025 57.3914 54.944 57.3914 57.2812C57.3914 59.6185 56.463 61.86 54.8103 63.5126C53.1576 65.1653 50.9161 66.0938 48.5789 66.0938C46.2417 66.0938 44.0002 65.1653 42.3475 63.5126C40.6949 61.86 39.7664 59.6185 39.7664 57.2812C39.7664 54.944 40.6949 52.7025 42.3475 51.0499C44.0002 49.3972 46.2417 48.4688 48.5789 48.4688ZM83.8289 57.2812C83.8289 54.944 84.7574 52.7025 86.41 51.0499C88.0627 49.3972 90.3042 48.4688 92.6414 48.4688C94.9786 48.4688 97.2201 49.3972 98.8728 51.0499C100.525 52.7025 101.454 54.944 101.454 57.2812C101.454 59.6185 100.525 61.86 98.8728 63.5126C97.2201 65.1653 94.9786 66.0938 92.6414 66.0938C90.3042 66.0938 88.0627 65.1653 86.41 63.5126C84.7574 61.86 83.8289 59.6185 83.8289 57.2812ZM44.0625 92.5312H96.9375C99.3609 92.5312 101.344 94.5141 101.344 96.9375C101.344 99.3609 99.3609 101.344 96.9375 101.344H44.0625C41.6391 101.344 39.6562 99.3609 39.6562 96.9375C39.6562 94.5141 41.6391 92.5312 44.0625 92.5312Z" fill="#52B750" />
                                                                </svg>
                                                                <h3 className='text-5xl font-outline-green'>medium</h3>
                                                        </div>

                                                        <div className='card bg-HardBg-100 hover:bg-yellow-200 '>
                                                                <svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M70.5 0C56.5564 0 42.926 4.13475 31.3323 11.8814C19.7387 19.628 10.7025 30.6386 5.36652 43.5208C0.0305462 56.403 -1.36559 70.5782 1.35467 84.2538C4.07493 97.9295 10.7894 110.491 20.649 120.351C30.5086 130.211 43.0705 136.925 56.7462 139.645C70.4218 142.366 84.597 140.969 97.4792 135.633C110.361 130.298 121.372 121.261 129.119 109.668C136.865 98.074 141 84.4436 141 70.5C141 51.8022 133.572 33.8703 120.351 20.649C107.13 7.42766 89.1978 0 70.5 0ZM110.156 54.1087C110.156 55.6774 109.691 57.2108 108.82 58.5151C107.948 59.8194 106.709 60.836 105.26 61.4363C103.811 62.0366 102.216 62.1936 100.678 61.8876C99.1392 61.5816 97.726 60.8262 96.6168 59.717C95.5076 58.6078 94.7522 57.1946 94.4462 55.656C94.1401 54.1175 94.2972 52.5228 94.8975 51.0736C95.4978 49.6243 96.5144 48.3856 97.8186 47.5141C99.1229 46.6426 100.656 46.1775 102.225 46.1775C104.329 46.1775 106.346 47.0131 107.833 48.5005C109.321 49.9879 110.156 52.0052 110.156 54.1087ZM41.6391 62.04C40.0704 62.04 38.537 61.5748 37.2327 60.7033C35.9284 59.8318 34.9119 58.5931 34.3116 57.1439C33.7113 55.6946 33.5542 54.0999 33.8602 52.5614C34.1663 51.0229 34.9216 49.6097 36.0308 48.5005C37.1401 47.3913 38.5533 46.6359 40.0918 46.3299C41.6303 46.0239 43.225 46.1809 44.6742 46.7812C46.1235 47.3815 47.3622 48.3981 48.2337 49.7024C49.1052 51.0067 49.5703 52.5401 49.5703 54.1087C49.5706 55.1653 49.3598 56.2112 48.9502 57.1852C48.5406 58.1591 47.9406 59.0414 47.1854 59.7802C46.4301 60.5191 45.5348 61.0995 44.5521 61.4876C43.5694 61.8757 42.5191 62.0635 41.4628 62.04H41.6391ZM103.327 95.219C104.028 96.1539 104.329 97.3291 104.164 98.4859C103.998 99.6428 103.38 100.687 102.445 101.388C101.51 102.089 100.335 102.39 99.1784 102.225C98.0216 102.059 96.9777 101.441 96.2766 100.507C93.369 96.6151 89.5834 93.4655 85.2281 91.3142C80.8728 89.1628 76.071 88.0706 71.2136 88.1264C66.3563 88.1823 61.5808 89.3846 57.2761 91.6355C52.9714 93.8863 49.2592 97.1222 46.4419 101.079C45.7641 102.032 44.7357 102.676 43.583 102.87C42.4303 103.064 41.2476 102.793 40.2952 102.115C39.3428 101.437 38.6986 100.409 38.5044 99.2559C38.3102 98.1032 38.5819 96.9205 39.2597 95.9681C42.8812 90.8808 47.6529 86.7206 53.1863 83.8262C58.7198 80.9319 64.8585 79.3853 71.1028 79.3123C77.3471 79.2393 83.5203 80.642 89.1199 83.4061C94.7195 86.1703 99.5872 90.2178 103.327 95.219Z" fill="#C0D639" />
                                                                </svg>
                                                                <h3 className='text-5xl font-outline-yell'>hard</h3>
                                                        </div>

                                                        <div className='card bg-VeryHardBg-100 hover:bg-red-300 '>
                                                                <svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M22.137 109.769C22.137 102.225 30.456 88.125 39.2685 76.2105C48.081 88.125 56.4 102.225 56.4 109.769C56.4 112.018 55.9569 114.246 55.0959 116.324C54.235 118.403 52.9731 120.291 51.3823 121.882C49.7915 123.473 47.9029 124.735 45.8244 125.596C43.746 126.457 41.5182 126.9 39.2685 126.9C29.8215 126.9 22.137 119.215 22.137 109.769ZM141 70.5C141 89.1978 133.572 107.13 120.351 120.351C107.13 133.572 89.1978 141 70.5 141C64.014 141 57.669 140.013 51.6765 138.391C57.265 135.978 62.0251 131.982 65.3699 126.896C68.7147 121.81 70.498 115.856 70.5 109.769C70.5 106.596 69.7245 102.93 68.3145 98.7H70.5C79.3125 98.7 86.856 102.225 90.0285 107.371L100.04 97.3605C93.6945 89.676 82.8375 84.6 70.5 84.6C67.6095 84.6 64.7895 84.882 62.1105 85.446C59.079 80.088 55.3425 74.2365 50.6895 67.8915L47.3055 63.45C52.311 62.5335 56.4 58.0215 56.4 52.875C56.4 47.235 51.465 42.3 45.825 42.3C40.185 42.3 35.25 47.235 35.25 52.875C35.25 54.2145 35.532 55.4835 36.0255 56.682L27.918 67.8915C16.92 82.8375 10.575 95.175 8.6715 104.41C3.1725 94.329 0 82.767 0 70.5C0 51.8022 7.42766 33.8703 20.649 20.649C33.8703 7.42766 51.8022 0 70.5 0C79.7582 0 88.9257 1.82354 97.4792 5.36649C106.033 8.90945 113.804 14.1024 120.351 20.649C126.898 27.1955 132.091 34.9674 135.634 43.5208C139.176 52.0743 141 61.2418 141 70.5ZM105.75 52.875C105.75 47.235 100.815 42.3 95.175 42.3C89.535 42.3 84.6 47.235 84.6 52.875C84.6 58.515 89.535 63.45 95.175 63.45C100.815 63.45 105.75 58.515 105.75 52.875Z" fill="#C81741" />
                                                                </svg>
                                                                <h3 className='text-5xl font-outline-red'>very hard</h3>
                                                        </div>

                                                </div>
                                </>)
                                break;
                }
              }, [TmpChoice]);


  return (
    <div className='bg-white w-full h-screen mt-80 flex justify-center relative '>
        <div className=' w-11/12 absolute bottom-pos h-2xfull bg-white  flex flex-col items-center'>
            <h1 className='text-Pblue text-9xl font-medium pt-14 mb-10'>
                QUIZ WEB
            </h1>
            {contenu}

        </div>
    </div>
  )
}

export default Quiz