import { useState } from 'react';
import FormInput from './form/FormInput';

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
            <FormInput
                label="Vorname"
                id="vorname"
                value={vorname}
                onChange={(e) => setVorname(e.target.value)}
                placeholder="Vorname eingeben"
            />
            <FormInput
                label="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name eingeben"
            />
            <FormInput
                label="Firma"
                id="firma"
                value={firma}
                onChange={(e) => setFirma(e.target.value)}
                placeholder="Firma eingeben"
            />
            <FormInput
                label="Abteilung"
                id="abteilung"
                value={abteilung}
                onChange={(e) => setAbteilung(e.target.value)}
                placeholder="Abteilung eingeben"
            />
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}

export default Form;
