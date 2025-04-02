import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isWeekend, isSameDay } from 'date-fns';
import { FaChevronLeft, FaChevronRight, FaClock, FaCalendarCheck } from 'react-icons/fa';

const Timesheet = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample attendance data mapped by date
  const attendanceDataByDate = {
    [format(new Date(), 'yyyy-MM-dd')]: {
      date: format(new Date(), 'dd'),
      shift: '09:30 to 18:30',
      shiftCode: 'GEN',
      scheme: 'General Scheme',
      firstIn: '09:19',
      lastOut: '17:57',
      lateIn: '-',
      earlyOut: '00:32',
      totalWorkHrs: '08:38',
      breakHrs: '00:51',
      actualWorkHrs: '07:47',
      status: 'P', // P for Present
      sessions: [
        { id: 1, timing: '09:30 - 14:30', firstIn: '09:19', lastOut: '-' },
        { id: 2, timing: '14:31 - 18:30', firstIn: '-', lastOut: '17:57' }
      ]
    }
  };

  // Status indicators and their meanings
  const statusIndicators = {
    P: { label: 'Present', color: 'text-green-600', bgColor: 'bg-green-50' },
    A: { label: 'Absent', color: 'text-red-600', bgColor: 'bg-red-50' },
    H: { label: 'Holiday', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    WO: { label: 'Week Off', color: 'text-gray-600', bgColor: 'bg-gray-50' },
    L: { label: 'Leave', color: 'text-yellow-600', bgColor: 'bg-yellow-50' }
  };

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const getDaysInMonth = () => {
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);
    return eachDayOfInterval({ start, end });
  };

  const getDateStatus = (date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    if (attendanceDataByDate[dateStr]) {
      return attendanceDataByDate[dateStr].status;
    }
    if (isWeekend(date)) return 'WO';
    return null;
  };

  const renderCalendar = () => {
    const days = getDaysInMonth();
    const firstDayOfMonth = startOfMonth(currentDate).getDay();
    const blanks = Array(firstDayOfMonth).fill(null);

    return [...blanks, ...days].map((day, index) => {
      if (!day) return <div key={`blank-${index}`} className="h-24 border border-gray-200"></div>;
      
      const isSelected = format(selectedDate, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd');
      const isToday = format(new Date(), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd');
      const status = getDateStatus(day);
      const statusStyle = status ? statusIndicators[status] : null;

      return (
        <div
          key={day}
          onClick={() => setSelectedDate(day)}
          className={`h-24 border border-gray-200 p-2 cursor-pointer transition-colors
            ${isSelected ? 'border-blue-500 ring-1 ring-blue-500' : ''}
            ${statusStyle ? statusStyle.bgColor : ''}
            hover:bg-gray-50`}
        >
          <div className="flex justify-between">
            <span className={`text-sm ${isToday ? 'font-bold' : ''}`}>
              {format(day, 'd')}
            </span>
            <span className="text-xs text-gray-500">GEN</span>
          </div>
          {status && (
            <div className={`text-xs ${statusStyle.color} mt-1 flex items-center gap-1`}>
              <span>{status}</span>
              {status === 'P' && <FaCalendarCheck className="w-3 h-3" />}
            </div>
          )}
        </div>
      );
    });
  };

  const getSelectedDateData = () => {
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    return attendanceDataByDate[dateStr] || null;
  };

  const selectedDateData = getSelectedDateData();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Calendar Header */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePrevMonth}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <FaChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <h2 className="text-xl font-semibold">
                {format(currentDate, 'MMMM yyyy')}
              </h2>
              <button
                onClick={handleNextMonth}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <FaChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="flex gap-4">
              {Object.entries(statusIndicators).map(([key, value]) => (
                <div key={key} className="flex items-center gap-1">
                  <span className={`w-3 h-3 rounded-full ${value.bgColor} border ${value.color.replace('text', 'border')}`}></span>
                  <span className="text-xs text-gray-600">{value.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-4">
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-sm font-medium text-gray-600">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {renderCalendar()}
            </div>
          </div>
        </div>

        {/* Attendance Details */}
        {selectedDateData ? (
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">
                    {format(selectedDate, 'dd')} {format(selectedDate, 'MMMM yyyy')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedDateData.shift} ({selectedDateData.shiftCode})
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{selectedDateData.scheme}</p>
                  <p className="text-xs text-gray-500">
                    Processed on {format(new Date(), 'do MMM')} at {format(new Date(), 'HH:mm')}
                  </p>
                </div>
              </div>
            </div>

            {/* Time Details */}
            <div className="p-4">
              <div className="grid grid-cols-7 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">First In</p>
                  <p className="font-medium">{selectedDateData.firstIn}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Last Out</p>
                  <p className="font-medium">{selectedDateData.lastOut}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Late In</p>
                  <p className="font-medium">{selectedDateData.lateIn}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Early Out</p>
                  <p className="font-medium">{selectedDateData.earlyOut}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Total Work Hrs</p>
                  <p className="font-medium">{selectedDateData.totalWorkHrs}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Break Hrs</p>
                  <p className="font-medium">{selectedDateData.breakHrs}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Actual Work Hrs</p>
                  <p className="font-medium">{selectedDateData.actualWorkHrs}</p>
                </div>
              </div>

              {/* Session Details */}
              <div className="border rounded-lg">
                <div className="p-3 bg-gray-50 border-b">
                  <h4 className="font-medium">Session Details</h4>
                </div>
                <div className="p-4">
                  <table className="w-full">
                    <thead>
                      <tr className="text-sm text-gray-600">
                        <th className="text-left pb-3">Session</th>
                        <th className="text-left pb-3">Session Timing</th>
                        <th className="text-left pb-3">First In</th>
                        <th className="text-left pb-3">Last Out</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedDateData.sessions.map(session => (
                        <tr key={session.id} className="text-sm">
                          <td className="py-2">Session {session.id}</td>
                          <td className="py-2">{session.timing}</td>
                          <td className="py-2">{session.firstIn}</td>
                          <td className="py-2">{session.lastOut}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
            No attendance data available for the selected date
          </div>
        )}
      </div>
    </div>
  );
};

export default Timesheet;