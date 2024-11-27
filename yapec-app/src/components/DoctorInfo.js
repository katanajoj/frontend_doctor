import React from 'react';

const DoctorInfo = ({ doctor, onShowPatients }) => {
    return (
        <div className="doctor-info">
            <h3>Информация о враче</h3>
            <p><strong>ФИО:</strong> {doctor.fullName}</p>
            <p><strong>Участок:</strong> {doctor.section}</p>
            <p><strong>Стаж:</strong> {doctor.experience} лет</p>
            <p><strong>Номер:</strong> {doctor.phone}</p>
            <button className="btn" onClick={onShowPatients}>Список пациентов</button>
        </div>
    );
};

export default DoctorInfo;
