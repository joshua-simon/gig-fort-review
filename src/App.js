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
      alert('Survey submitted! 🚀')
  }


  const form = <div>

Privacy Policy for Gig Fort <br></br>
<br></br>
This Privacy Policy applies to the Gig Fort mobile application (the "App"), which is operated by Joshua Simon.
<br></br>
<br></br>
What Information We Collect:<br></br>
The App does not require users to create an account or enter any personal information. We do not collect any information about your device or usage of the App.<br></br>
<br></br>
How We Use Your Information:<br></br>
Since we do not collect any information from our users, we do not use it for any purpose.<br></br>
<br></br>
How We Share Your Information:<br></br>
<br></br>
Since we do not collect any information from our users, we do not share it with anyone.
<br></br>
<br></br>
Changes to This Policy:<br></br>
We reserve the right to update or modify this Privacy Policy at any time without prior notice. Please review this policy periodically, and especially before you provide any information to us. This Privacy Policy was last updated on 21st Feburary 2023.
<br></br>
<br></br>
Contact Us
<br></br>
If you have any questions or concerns about this Privacy Policy, please contact us at gigfort.nz@gmail.com.
  </div>


  return (
    <div>
    <header> <img src = {gig_fort_logo}/></header>
      {form}
    </div>
  );
}

export default App;
