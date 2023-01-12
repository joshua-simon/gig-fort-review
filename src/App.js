import { useState,useEffect } from 'react'
import './styles.css'
import android from './assets/android.png'
import expand from './assets/expand.png'
import gig_fort_logo from './assets/Gig_Fort_Logo_Gold_150x150.png'
import { doc, setDoc, addDoc,collection } from "firebase/firestore"
import { db } from './firebase'

const App = () => {

  const [ {
    q1_facebook,
    q1_Instagram,
    q1_TheImage04,
    q1_Eventfinder,
    q1_venueWesbites,
    q1_wordOfMouth,
    q1_other,
    q1_other_long_answer,
    q2_yes,
    q2_somewhat,
    q2_no,
    q2_long_answer,
    q3_last_minute,
    q3_plan_ahead,
    q3_both,
    q4_yes,
    q4_somewhat,
    q4_no,
    q5_map_long_answer,
    q6_map,
    q6_list,
    q6_both,
    q7_long_answer,
    q8_long_answer
  },setFormDetails ] = useState({
    q1_facebook:false,
    q1_Instagram:false,
    q1_TheImage04:false,
    q1_Eventfinder:false,
    q1_venueWesbites:false,
    q1_wordOfMouth:false,
    q1_other:false,
    q1_other_long_answer:'',
    q2_yes:false,
    q2_somewhat:false,
    q2_no:false,
    q2_long_answer:'',
    q3_last_minute:false,
    q3_plan_ahead:false,
    q3_both:false,
    q4_yes:false,
    q4_somewhat:false,
    q4_no:false,
    q5_map_long_answer:'',
    q6_map:false,
    q6_list:false,
    q6_both:false,
    q7_long_answer:'',
    q8_long_answer:''
  })

  const handleChange = (e) => {
    const { name,value } = e.target
    setFormDetails(prevState => ({
      ...prevState,
      [name]:value
    }))
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
      const postReview = async () => {
          const test =  doc(collection(db,"reviews"))
          await setDoc(test, {
            q1_facebook,
            q1_Instagram,
            q1_TheImage04,
            q1_Eventfinder,
            q1_venueWesbites,
            q1_wordOfMouth,
            q1_other,
            q1_other_long_answer,
            q2_yes,
            q2_somewhat,
            q2_no,
            q2_long_answer,
            q3_last_minute,
            q3_plan_ahead,
            q3_both,
            q4_yes,
            q4_somewhat,
            q4_no,
            q5_map_long_answer,
            q6_map,
            q6_list,
            q6_both,
            q7_long_answer,
            q8_long_answer})
      }
      postReview()

  }


  const form = <form onSubmit={HandleSubmit}>

    <div className='intro'>
      <h1>Gig Fort App  -  Survey</h1>
      <h2>Kia Ora! Josh here.</h2>
      <p>I'm currently building a mobile app called Gig Fort, the aim of which is to provide a simple, comprehensive
      gig guide for live music in Wellington. <br></br> Because I want to build the best app possible, I'd love to get your feedback
      on a prototype app I've built. So below is a survey with a few simple questions - please feel free to be as blunt as possible. <br></br>
      Thanks!
      </p>
    </div>

    <div className='general-questions'>
      <div>
      <h2 className='heading'>General questions</h2>

      {/* Question 1 */}
        <fieldset className='general-questions_fieldset'>
          <legend>1. How do you normally find out about live music in Wellington?</legend>
            <div>
              <input type = "checkbox" name = "q1_facebook" onChange={handleChange}/>
              <label for = "q1_facebook">Facebook</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1_Instagram" onChange={handleChange}/>
              <label for = "q1_Instagram">Instagram</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1_TheImage04" onChange={handleChange}/>
              <label for = "q1_TheImage04">The Image04</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1_Eventfinder"onChange={handleChange} />
              <label for = "q1_Eventfinder">Eventfinder</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1_underTheRadar" onChange={handleChange}/>
              <label for = "q1_underTheRadar">Under The Radar</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1_venueWesbites" onChange={handleChange} />
              <label for = "q1_venueWesbites">Venue Websites</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1_wordOfMouth" onChange={handleChange} />
              <label for = "q1_wordOfMouth">Word of mouth</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1_other" onChange={handleChange} />
              <label for = "q1_other">Other (please specify):</label>
              <input type = "text" name = "q1_other_long_answer" onChange={handleChange}/>
            </div>
        </fieldset>
      </div>

     
     {/* Question 2 */}
      <div>
        <fieldset className='general-questions_fieldset'>
          <legend>2. Do the above gig guides make it easy to find what gigs are happening on a given night in Wellington? </legend>
          <div>
            <input type = "checkbox" name = "q2_yes" onChange={handleChange}/>
            <label for = "q2_yes">Yes</label>
          </div>
          <div>
            <input type = "checkbox" name = "q2_somewhat" onChange={handleChange}/>
            <label for = "q2_somewhat">Somewhat</label>
          </div>
          <div>
            <input type = "checkbox" name = "q2_no" onChange={handleChange}/>
            <label for = "q2_no">No</label>
          </div>
          <p>If you answered 'Somewhat' or 'no', what could be improved about current gig guides? For example, better user interface, improved user experience, 
            a more comprehensive list of gigs
          </p>
          <textarea name = "q2_long_answer" onChange={handleChange} rows="4" cols="50"/>
        </fieldset>
      </div>



     {/* Question 3 */}
      <div>
        <fieldset className='general-questions_fieldset'>
          <legend>
           3.  When do you normally make the decision to go to a gig?
          </legend>
          <div>
            <input type = "checkbox" name = "q3_last_minute" onChange={handleChange}/>
            <label for = "q3_last_minute">In a spur-of-the-moment kind of way, by finding out what gigs are happening on the current day/night </label>
          </div>
          <div>
            <input type = "checkbox" name = "q3_plan_ahead" onChange={handleChange}/>
            <label for = "q3_plan_ahead">I like to plan out which gigs I'm going to ahead of time </label>
          </div>
          <div>
            <input type = "checkbox" name = "q3_both" onChange={handleChange}/>
            <label for = "q3_both">I go to gigs both as a last minute decision, and also sometimes as something I plan in advance </label>
          </div>
        </fieldset>
      </div>
    </div>



    <div className='gigFort_review_section'>
        <h2 className='heading'>Gig Fort review</h2>

        <div className='instructions'>
          <p>This section will require you to review a demo of the Gig Fort app. To access the demo:</p>
          <p>i. Go to the demo <a target="_blank" href = 'https://snack.expo.dev/@joshsimon/gig-fort---app-demo?platform=android' >website</a></p>
            <div className='instructions_textAndImage'>
              <p>ii. Once in the demo, click on the "Android" button in the right hand panel:</p>
              <img src = {android}/>
            </div>
            <div className='instructions_textAndImage'>
              <p>iii. Click on the expand icon:</p>
              <img src = {expand}/>
            </div>
            <p>iv. Click the "Tap to play" button to run app</p>
        </div>

        <div className='gigFort_review_form'>



           {/* Question 4 */}
          <fieldset className='gigFort_questions_fieldset'>
              <legend>4. Upon opening the app, you'll see a map showing the location of gigs. Is this map easy to understand and navigate?</legend>
              <div>
                <input type = "checkbox" name = "q4_yes" onChange={handleChange}/>
                <label for = "q4_yes">Yes</label>
              </div>
              <div>
                <input type = "checkbox" name = "q4_somewhat" onChange={handleChange}/>
                <label for = "q4_somewhat">Somewhat</label>
              </div>
              <div>
                <input type = "checkbox" name = "q4_no" onChange={handleChange}/>
                <label for = "q4_no">No</label>
              </div>
          </fieldset>

          {/* Question 5 */}
          <fieldset className='gigFort_questions_fieldset'>
            <legend>
             5.  Navigate to the gig list page by tapping the the 'List View' at the bottom of the map page.
              Is the list view easy to understand and navigate? If not, is there anything you'd change about it?
              Please enter answer below:
            </legend>
            <textarea name = "q5_map_long_answer" rows="4" cols="50" onChange={handleChange}/>
          </fieldset>


          {/* Question 6 */}
          <fieldset className='gigFort_questions_fieldset'>
            <legend>
             6. Do you prefer the gig map or gig list as a way of viewing gigs?
            </legend>
            <div>
                <input type = "checkbox" name = "q6_map" onChange={handleChange}/>
                <label for = "q6_map">Map</label>
            </div>
            <div>
                <input type = "checkbox" name = "q6_list" onChange={handleChange}/>
                <label for = "q6_list">List</label>
            </div>
            <div>
                <input type = "checkbox" name = "q6_both" onChange={handleChange}/>
                <label for = "q6_both">Both, depending on the circumstance</label>
            </div>               
          </fieldset>

          {/* Question 7 */}
          <fieldset className='gigFort_questions_fieldset'>
            <legend>
             7.  Is there anything about Gig Fort that made it difficult to understand or navigate?
              Please enter answer below:
            </legend>
            <textarea name = "q7_long_answer" onChange={handleChange} rows="4" cols="50"/>
          </fieldset>

          {/* Question 8 */}
          <fieldset className='gigFort_questions_fieldset'>
            <legend> 8.) Are there any other functionalities you'd like to see added to Gig Fort?
              For example: Filtering gigs by whether they're free or not, the ability to connect with other users, and so on...
            </legend>
            <textarea name = "q8_long_answer" onChange={handleChange} rows="4" cols="50"/>
          </fieldset>
        </div>

    </div>

    <h1>Thank you for taking the time to complete this survey!</h1> 
    <p>Once completed, hit the 'Submit' button below to send us your answers.
      We'll carefully go through what you've said and use it to build the best app possible. <br></br>
      -Josh and Nina
    </p>
      
      
      <button type = "submit">Submit</button>

  </form>


  return (
    <div>
    <header> <img src = {gig_fort_logo}/></header>
      {form}
    </div>
  );
}

export default App;
