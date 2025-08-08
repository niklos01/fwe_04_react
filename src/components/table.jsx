function table({ persons }) {
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
                    {persons &&
                        persons.map((person, index) => (
                            <tr key={index}>
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

export default table;
