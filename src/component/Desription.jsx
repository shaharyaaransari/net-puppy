import React from 'react'
  import image19 from "../assets/student.svg"
export const Desription = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px', borderRadius: '8px' }}>
    <div style={{ flex: '1', marginRight: '4px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', width:"50%" }}>
        <img src={image19} alt="School Image" />
      </div>
    </div>
    <div style={{ flex: '1' }}>
      <div style={{ marginBottom: '4px', width: '90%' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '36px', color: 'red', marginBottom: '2px' }}>At Tula’s, we ask, “How can we make school better?”</h1>
        <p style={{  color: '#000',
            fontFamily: 'TT Chocolates Trl',
            fontSize: '25px',
            fontStyle: 'normal',
            fontWeight: 300,
            lineHeight: 'normal',
            letterSpacing: '0.75px',
            marginBottom: '2px' }}>Using the latest research on how girls learn best, we designed an innovative modular schedule, personalized for each student. Our girls are focused, not overwhelmed. “Girls Rule” isn’t just a saying here. Develop leadership skills, build compassion, gain responsibility, and prepare to change the world.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '120px' }}>
    
      </div>
    </div>
  </div>
  )
}
