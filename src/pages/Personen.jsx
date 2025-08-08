import React, { useEffect, useState } from 'react'

const Personen = () => {
  const [tableData, useTableData] = useState([])

  useEffect(() => {
    fetch('https://wiwa.uni-trier.de/personenapi/personen')
      .then(response => response.json())
      .then(data => useTableData(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])


  if (!tableData.length) {
    return <div>Loading...</div>
  }

  return (
    <div className="Personen">
      <h1>hier perosn</h1>
      {tableData.map((person, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body"> 
            <h5 className="card-title">{person.vorname} {person.nachname}</h5>
            <p className="card-text">Email: {person.email}</p>
            <p className="card-text">Telefon: {person.telefon}</p>
            <p className="card-text">Fachbereich: {person.fachbereich}</p>
            <p className="card-text">Position: {person.position}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Personen
