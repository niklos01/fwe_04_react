import React from 'react';

function Table({ persons }) {
    if (!persons || persons.length === 0) {
        return <div>Keine Daten verfügbar</div>;
    }

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Vorname</th>
                        <th scope="col">Name</th>
                        <th scope="col">Firma</th>
                        <th scope="col">Abteilung</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person) => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.vorname}</td>
                            <td>{person.name}</td>
                            <td>{person.firma}</td>
                            <td>{person.abteilung}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
