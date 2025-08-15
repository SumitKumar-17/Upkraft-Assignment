'use client'; 
import FeedbackCard from "./components/FeedbackCard";
import Header from "./components/Header";
import PerformanceChart from "./components/PerformanceChart";
import ProfileCard from "./components/ProfileCard";
import ReferralCard from "./components/ReferralCard";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import UpcomingLessons from "./components/UpcomingLessons";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <ProfileCard />
                <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6">
                    <StatsCard title="Total Active Students" value="30" />
                    <StatsCard title="Total Active Students" value="30" />
                    <StatsCard title="Tutor CSAT Score" value="80%" />
                    <StatsCard title="Tutor CSAT Score" value="80%" />
                    <StatsCard title="Assignment Completion Rate" value="15%" />
                    <StatsCard title="Assignment Completion Rate" value="15%" />
                </div>
              </div>
              <UpcomingLessons />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <PerformanceChart title="Overall Course Performance" score={7.6} />
                <PerformanceChart title="Overall Student Performance" score={6.6} />
              </div>
            </div>

            <div className="lg:col-span-1 flex flex-col gap-6">
              <ReferralCard />
              <FeedbackCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
