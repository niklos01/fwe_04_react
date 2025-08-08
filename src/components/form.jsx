import { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [vorname, setVorname] = useState('');
    const [firma, setFirma] = useState('');
    const [abteilung, setAbteilung] = useState('');

    const sendToApi = (e) => {
        e.preventDefault();
        const person = { name, vorname, firma, abteilung };
        fetch('https://wiwa.uni-trier.de/personenapi/createperson', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(person),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setName('');
                setVorname('');
                setFirma('');
                setAbteilung('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <form onSubmit={sendToApi}>
            <div className="mb-3">
                <label htmlFor="vorname" className="form-label">
                    Vorname
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="vorname"
                    value={vorname}
                    onChange={(e) => setVorname(e.target.value)}
                    placeholder="Enter vorname"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="firma" className="form-label">
                    Firma
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="firma"
                    value={firma}
                    onChange={(e) => setFirma(e.target.value)}
                    placeholder="Enter firma"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="abteilung" className="form-label">
                    Abteilung
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="abteilung"
                    value={abteilung}
                    onChange={(e) => setAbteilung(e.target.value)}
                    placeholder="Enter abteilung"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}

export default Form;
