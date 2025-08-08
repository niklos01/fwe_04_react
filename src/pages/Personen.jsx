import React, { useEffect, useState } from 'react'
import Table from '../components/table'

const Personen = () => {
  const [tableData, setTableData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://wiwa.uni-trier.de/personenapi/personen')
      .then(response => {
        if (!response.ok) {
          throw new Error('Netzwerk-Antwort war nicht in Ordnung')
        }
        return response.json()
      })
      .then(data => {
        setTableData(data)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setIsLoading(false)
        console.error('Error fetching data:', error)
      })
  }, [])

  if (isLoading) {
    return <div className="text-center mt-4">Laden...</div>
  }

  if (error) {
    return <div className="text-center mt-4 text-danger">Fehler: {error}</div>
  }

  return (
    <div className="Personen">
      <h1 className="mb-4">Personenliste</h1>
      <Table persons={tableData} />
    </div>
  )
}

export default Personen
