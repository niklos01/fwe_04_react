import React, { useEffect, useState } from 'react'
import table from '../components/table'

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
      <table persons={tableData} />
    </div >
  )
}

export default Personen
