import Calendar from 'react-calendar';
import '../cssDesign/StudentCalendar.css'
const events = [
  {
    date: "21/09/2024",
    dailyCourses: [{
      professor: "John Doe",
      courseName: "Math",
      description: "Pritet të përsëritet tema e mëparshme dhe të fillohet një tema e integraleve",
      time: "10:00",
    },
    {
      professor: "Johnny Sins",
      courseName: "History",
      description: "Lufta e Ftohtë",
      time: "12:00",
    },
    {
      professor: "Jane Doe",
      courseName: "History",
      description: "Pritet të përsëritet tema e mëparshme dhe të fillohet një temë e re mbi luftën e dytë botërore",
      time: "12:00",
    },],
  },
  {
    date: "22/09/2024",
    dailyCourses: [{
      professor: "Mia Khalifa",
      courseName: "Math",
      description: "Teorema e Pitagorës",
      time: "10:00",
    },
    {
      professor: "Johnny Sins",
      courseName: "History",
      description: "Lufta e Ftohtë",
      time: "12:00",
    },],
  },
  {
    date: "23/09/2024",
    dailyCourses: [{
      professor: "Riley Reid",
      courseName: "Math",
      description: "Derivatet",
      time: "10:00",
    },
    {
      professor: "Lisa Ann",
      courseName: "History",
      description: "Ekonomia dhe Shoqëria ne Periudhen e Komunizmit në Shqipëri",
      time: "12:00",
    },],
  },
];

function StudentCalendar() {
  return (
    <div className="font-rajdhani">
      <h1 className='text-4xl'> Kalendari i Kurseve</h1>
      <Calendar className="font-rajdhani"/>
    </div>
  );
}
export default StudentCalendar;