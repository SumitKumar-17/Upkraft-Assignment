const lessons = [
    { date: '21 July', time: '2:00 - 3:00 PM', course: 'Introduction to Piano', student: 'Eurica Robel & Arnold Hayes' },
    { date: '22 July', time: '4:00 - 5:00 PM', course: 'Finger Warmups', student: 'Eurica Robel & Arnold Hayes' },
    { date: '23 July', time: '3:00 - 4:00 PM', course: 'Simple Chords', student: 'Eurica Robel & Arnold Hayes' },
    { date: '24 July', time: '5:00 - 6:00 PM', course: 'Rhythm Basics', student: 'Eurica Robel & Arnold Hayes' },
    { date: '25 July', time: '2:00 - 3:00 PM', course: 'Simple Melodies', student: 'Eurica Robel & Arnold Hayes' },
    { date: '26 July', time: '7:00 - 8:00 PM', course: 'Treble & Bass Clef', student: 'Eurica Robel & Arnold Hayes' },
    { date: '24 July', time: '5:00 - 6:00 PM', course: 'Rhythm Basics', student: 'Eurica Robel & Arnold Hayes' },
    { date: '22 July', time: '4:00 - 5:00 PM', course: 'Finger Warmups', student: 'Eurica Robel & Arnold Hayes' },
];

const UpcomingLessons = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Upcoming Lessons</h2>
                <a href="#" className="text-violet-600 hover:underline text-sm font-medium">View All</a>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-400 text-sm border-b">
                            <th className="py-3 font-medium">Date</th>
                            <th className="py-3 font-medium">Time</th>
                            <th className="py-3 font-medium">Course</th>
                            <th className="py-3 font-medium">Student Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lessons.map((lesson, index) => (
                            <tr key={index} className="border-b last:border-none">
                                <td className="py-4 text-gray-600">{lesson.date}</td>
                                <td className="py-4 text-gray-600">{lesson.time}</td>
                                <td className="py-4 font-medium text-gray-800">{lesson.course}</td>
                                <td className="py-4 text-gray-600">{lesson.student}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpcomingLessons;
