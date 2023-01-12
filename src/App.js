import { useState } from 'react'
import './styles.css'
import android from './assets/android.png'
import expand from './assets/expand.png'

const App = () => {


  const form = <form>

    <div>
      <h1>Gig Fort  - A simple, comprehensive gig guide for live music in Poneke - Wellington</h1>
      <h2>Kia Ora! Josh here.</h2>
      <p>I'm currently building a mobile app called Gig Fort, the aim of which is to provide a simple, comprehensive
      gig guide for live music in Wellington. Because I want to build the best app possible, I'd love to get your feedback
      on a prototype app I've built. So below is a survey with a few simple questions - please feel free to be as blunt as possible.

      Thanks!
      </p>
    </div>

    <div>
    <h1>General questions</h1>
      <fieldset>
        <legend>How do you normally find out about live music in Wellington?</legend>
          <div>
            <input type = "checkbox" name = "facebook"/>
            <label for = "facebook">Facebook</label>
          </div>
          <div>
            <input type = "checkbox" name = "Instagram"/>
            <label for = "Instagram">Instagram</label>
          </div>
          <div>
            <input type = "checkbox" name = "The Image04"/>
            <label for = "The Image04">The Image04</label>
          </div>
          <div>
            <input type = "checkbox" name = "Eventfinder"/>
            <label for = "Eventfinder">Eventfinder</label>
          </div>
          <div>
            <input type = "checkbox" name = "underTheRadar"/>
            <label for = "underTheRadar">Under The Radar</label>
          </div>
          <div>
            <input type = "checkbox" name = "venueWesbites"/>
            <label for = "venueWesbites">Venue Websites</label>
          </div>
          <div>
            <input type = "checkbox" name = "wordOfMouth"/>
            <label for = "wordOfMouth">Word of mouth</label>
          </div>
          <div>
            <input type = "checkbox" name = "other"/>
            <label for = "other">Other (please specify):</label>
            <input type = "text"/>
          </div>
      </fieldset>
    </div>

    <div>
      <fieldset>
        <legend>Do the above gig guides make it easy to find what gigs are happening on a given night in Wellington? </legend>
        <div>
          <input type = "checkbox" name = "yes"/>
          <label for = "yes">Yes</label>
        </div>
        <div>
          <input type = "checkbox" name = "sortOf"/>
          <label for = "sortOf">Sort of</label>
        </div>
        <div>
          <input type = "checkbox" name = "no"/>
          <label for = "no">No</label>
        </div>
        <p>If you answered 'Sort of' or 'no', what could be improved about current gig guides? For example, better user interface, improved user experience, 
          a more comprehensive list of gigs
        </p>
        <textarea/>
      </fieldset>
    </div>

    <div>
      <fieldset>
        <legend>
          How do you figure out which gigs you're going to attend?
        </legend>
        <div>
          <input type = "checkbox" name = "last-minute"/>
          <label for = "last-minute">In a spur-of-the-moment kind of way, by finding out what gigs are happening on the current day/night </label>
        </div>
        <div>
          <input type = "checkbox" name = "plan-ahead"/>
          <label for = "plan-ahead">I like to plan out which gigs I'm going to ahead of time </label>
        </div>
        <div>
          <input type = "checkbox" name = "both"/>
          <label for = "both">I go to gigs both as a last minute decision, and also sometimes as something I plan in advance </label>
        </div>
      </fieldset>
    </div>

    <div className='gigFort_review_section'>
        <h1>Gig Fort review</h1>

        <div className='instructions'>
          <p>This section will require you to review a demo of the Gig Fort app. To access the demo:</p>
          <p>1. Go to the demo <a target="_blank" href = 'https://snack.expo.dev/@joshsimon/gig-fort---app-demo?platform=android' >website</a></p>
            <div className='instructions_textAndImage'>
              <p>2. Once in the demo, click on the "Android" button in the right hand panel:</p>
              <img src = {android}/>
            </div>
            <div className='instructions_textAndImage'>
              <p>3. Click on the expand icon:</p>
              <img src = {expand}/>
            </div>
            <p>4. Click the "Tap to play" button to run app</p>
        </div>

        <div className='gigFort_review_form'>
          <fieldset>
              <legend>Upon opening the app, you'll see a map showing the location of gigs. Is this map easy to understand and navigate?</legend>
              <div>
                <input type = "checkbox" name = "yes"/>
                <label for = "yes">Yes</label>
              </div>
              <div>
                <input type = "checkbox" name = "somewhat"/>
                <label for = "somewhat">Somewhat</label>
              </div>
              <div>
                <input type = "checkbox" name = "no"/>
                <label for = "no">No</label>
              </div>
          </fieldset>
          <fieldset>
            <legend>
              Navigate to the gig list page by tapping the the 'List View' at the bottom of the map page.
              Is the list view easy to understand and navigate? If not, is there anything you'd change about it?
              Please enter answer below:
            </legend>
            <textarea/>
          </fieldset>
          <fieldset>
            <legend>
              Do you prefer the gig map or gig list as a way of displaying gigs?
            </legend>
            <div>
                <input type = "checkbox" name = "map"/>
                <label for = "map">Map</label>
            </div>
            <div>
                <input type = "checkbox" name = "list"/>
                <label for = "list">List</label>
            </div>
            <div>
                <input type = "checkbox" name = "both"/>
                <label for = "both">Both, depending on the circumstance</label>
            </div>               
          </fieldset>
          <fieldset>
            <legend>
              Is there anything about Gig Fort that made it difficult to understand or navigate?
              Please enter answer below:
            </legend>
            <textarea/>
          </fieldset>
          <fieldset>
            <legend>Are there any other functionalities you'd like to see added to Gig Fort?
              For example: Filtering gigs by whether they're free or not, the ability to connect with other users, and so on...
            </legend>
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
      {form}
    </div>
  );
}

export default App;
