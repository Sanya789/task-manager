import React from 'react'
import logo from '.././assets/img/7479646_questionnaire_survey_checklist_list_clipboard_icon.png'

const User = () => {
  return (
    <div className='user'>
      <div>
        <img className='logo' src={logo} alt='logo'/>
      </div>
      <div className='info'>
        <p>WomanUP</p>
      </div>
    </div>
  )
}

export default User
