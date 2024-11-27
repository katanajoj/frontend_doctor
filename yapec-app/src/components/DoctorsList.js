import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorInfo from './DoctorInfo';
import PatientsList from './PatientsList';

const DoctorsList = ({ user }) => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [showPatients, setShowPatients] = useState(false);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/doctors');
                setDoctors(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchDoctors();
    }, []);

    return (
        <div className="doctors-list">
            <h2>Список врачей</h2>
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor.id} onClick={() => setSelectedDoctor(doctor)}>
                        {doctor.fullName}
                    </li>
                ))}
            </ul>
            {selectedDoctor && (
                <DoctorInfo doctor={selectedDoctor} onShowPatients={() => setShowPatients(true)} />
            )}
            {showPatients && selectedDoctor && (
                <PatientsList doctorId={selectedDoctor.id} onBack={() => setShowPatients(false)} />
            )}        
        </div>
        );
    };
    
    export default DoctorsList;
    