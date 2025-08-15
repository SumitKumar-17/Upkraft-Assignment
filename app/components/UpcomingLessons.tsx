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
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Upcoming Lessons</h2>
                <a href="#" className="text-indigo-600 hover:underline text-sm">View All</a>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-500 text-sm">
                            <th className="py-2 font-normal">Date</th>
                            <th className="py-2 font-normal">Time</th>
                            <th className="py-2 font-normal">Course</th>
                            <th className="py-2 font-normal">Student Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lessons.map((lesson, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-3">{lesson.date}</td>
                                <td className="py-3">{lesson.time}</td>
                                <td className="py-3 font-medium">{lesson.course}</td>
                                <td className="py-3">{lesson.student}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpcomingLessons;
