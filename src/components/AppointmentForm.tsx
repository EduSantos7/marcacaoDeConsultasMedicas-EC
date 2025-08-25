// Lista de médicos hardcoded
const doctors: Doctor[] = [
    {
        id: '1',
        name: 'Dr. João Silva',
        specialty: 'Cardiologista',
        image: 'https://mighty.tools/mockmind-api/content/human/91.jpg',
    },
    // ... mais médicos fixos
];

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSubmit }) => {
    const [selectedDoctor, setSelectedDoctor] = useState<string>('');
    const [dateInput, setDateInput] = useState('');
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [description, setDescription] = useState('');

    // Renderização direta dos médicos mockados
    return (
        <Container>
            <Title>Selecione o Médico</Title>
            <DoctorList>
                {doctors.map((doctor) => (  // ← Lista fixa
                    <DoctorCard key={doctor.id}>
                        {/* ... */}
                    </DoctorCard>
                ))}
            </DoctorList>
            {/* ... resto do formulário */}
        </Container>
    );