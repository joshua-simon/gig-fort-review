import { useState } from 'react'
import './styles.css'
import android from './assets/android.png'
import expand from './assets/expand.png'
import gig_fort_logo from './assets/Gig_Fort_Logo_Gold_150x150.png'

const App = () => {




  const form = <form>

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
          <legend>1.) How do you normally find out about live music in Wellington?</legend>
            <div>
              <input type = "checkbox" name = "q1-facebook"/>
              <label for = "q1-facebook">Facebook</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1-Instagram"/>
              <label for = "q1-Instagram">Instagram</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1-The Image04"/>
              <label for = "q1-The Image04">The Image04</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1-Eventfinder"/>
              <label for = "q1-Eventfinder">Eventfinder</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1-underTheRadar"/>
              <label for = "q1-underTheRadar">Under The Radar</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1-venueWesbites"/>
              <label for = "q1-venueWesbites">Venue Websites</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1-wordOfMouth"/>
              <label for = "q1-wordOfMouth">Word of mouth</label>
            </div>
            <div>
              <input type = "checkbox" name = "q1-other"/>
              <label for = "q1-other">Other (please specify):</label>
              <input type = "text" name = "q1-other-long_answer"/>
            </div>
        </fieldset>
      </div>

     {/* Question 2 */}
      <div>
        <fieldset className='general-questions_fieldset'>
          <legend>2.) Do the above gig guides make it easy to find what gigs are happening on a given night in Wellington? </legend>
          <div>
            <input type = "checkbox" name = "q2-yes"/>
            <label for = "q2-yes">Yes</label>
          </div>
          <div>
            <input type = "checkbox" name = "q2-somewhat"/>
            <label for = "q2-somewhat">Somewhat</label>
          </div>
          <div>
            <input type = "checkbox" name = "q2-no"/>
            <label for = "q2-no">No</label>
          </div>
          <p>If you answered 'Somewhat' or 'no', what could be improved about current gig guides? For example, better user interface, improved user experience, 
            a more comprehensive list of gigs
          </p>
          <textarea name = "q2-long_answer" rows="4" cols="50"/>
        </fieldset>
      </div>


     {/* Question 3 */}
      <div>
        <fieldset className='general-questions_fieldset'>
          <legend>
           3.)  When do you normally make the decision to go to a gig?
          </legend>
          <div>
            <input type = "checkbox" name = "q3-last-minute"/>
            <label for = "q3-last-minute">In a spur-of-the-moment kind of way, by finding out what gigs are happening on the current day/night </label>
          </div>
          <div>
            <input type = "checkbox" name = "q3-plan-ahead"/>
            <label for = "q3-plan-ahead">I like to plan out which gigs I'm going to ahead of time </label>
          </div>
          <div>
            <input type = "checkbox" name = "q3-both"/>
            <label for = "q3-both">I go to gigs both as a last minute decision, and also sometimes as something I plan in advance </label>
          </div>
        </fieldset>
      </div>
    </div>



    <div className='gigFort_review_section'>
        <h2 className='heading'>Gig Fort review</h2>

        <div className='instructions'>
          <p>This section will require you to review a demo of the Gig Fort app. To access the demo:</p>
          <p>i) Go to the demo <a target="_blank" href = 'https://snack.expo.dev/@joshsimon/gig-fort---app-demo?platform=android' >website</a></p>
            <div className='instructions_textAndImage'>
              <p>ii) Once in the demo, click on the "Android" button in the right hand panel:</p>
              <img src = {android}/>
            </div>
            <div className='instructions_textAndImage'>
              <p>iii) Click on the expand icon:</p>
              <img src = {expand}/>
            </div>
            <p>iv) Click the "Tap to play" button to run app</p>
        </div>

        <div className='gigFort_review_form'>

           {/* Question 4 */}
          <fieldset className='gigFort_questions_fieldset'>
              <legend>4.) Upon opening the app, you'll see a map showing the location of gigs. Is this map easy to understand and navigate?</legend>
              <div>
                <input type = "checkbox" name = "q4-yes"/>
                <label for = "q4-yes">Yes</label>
              </div>
              <div>
                <input type = "checkbox" name = "q4-somewhat"/>
                <label for = "q4-somewhat">Somewhat</label>
              </div>
              <div>
                <input type = "checkbox" name = "q4-no"/>
                <label for = "q4-no">No</label>
              </div>
          </fieldset>

          {/* Question 5 */}
          <fieldset className='gigFort_questions_fieldset'>
            <legend>
             5.)  Navigate to the gig list page by tapping the the 'List View' at the bottom of the map page.
              Is the list view easy to understand and navigate? If not, is there anything you'd change about it?
              Please enter answer below:
            </legend>
            <textarea name = "q5-map_long_answer" rows="4" cols="50"/>
          </fieldset>

          {/* Question 6 */}
          <fieldset className='gigFort_questions_fieldset'>
            <legend>
             6.)  Do you prefer the gig map or gig list as a way of displaying gigs?
            </legend>
            <div>
                <input type = "checkbox" name = "q6-map"/>
                <label for = "q6-map">Map</label>
            </div>
            <div>
                <input type = "checkbox" name = "q6-list"/>
                <label for = "q6-list">List</label>
            </div>
            <div>
                <input type = "checkbox" name = "q6-both"/>
                <label for = "q6-both">Both, depending on the circumstance</label>
            </div>               
          </fieldset>

          {/* Question 7 */}
          <fieldset className='gigFort_questions_fieldset'>
            <legend>
             7.)  Is there anything about Gig Fort that made it difficult to understand or navigate?
              Please enter answer below:
            </legend>
            <textarea name = "q7-long_answer" rows="4" cols="50"/>
          </fieldset>

          {/* Question 8 */}
          <fieldset className='gigFort_questions_fieldset'>
            <legend> 8.) Are there any other functionalities you'd like to see added to Gig Fort?
              For example: Filtering gigs by whether they're free or not, the ability to connect with other users, and so on...
            </legend>
            <textarea name = "q8-long_answer" rows="4" cols="50"/>
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
