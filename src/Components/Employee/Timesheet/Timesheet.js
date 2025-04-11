import React, { useState } from 'react';
 
const Timesheet = () => {
  const [employeeInfo, setEmployeeInfo] = useState({
    month: '',
    name: '',
    employeeId: '',
    department: '',
    manager: '',
  });
 
  const [timesheet, setTimesheet] = useState([
    {
      date: '',
      day: '',
      shift: '',
      inTime1: '',
      outTime1: '',
      inTime2: '',
      outTime2: '',
      hoursCompleted: '',
      overtime: '',
      totalHours: '',
    },
  ]);
 
  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setEmployeeInfo({ ...employeeInfo, [name]: value });
  };
 
  const handleTimesheetChange = (index, field, value) => {
    const updatedSheet = [...timesheet];
    updatedSheet[index][field] = value;
    setTimesheet(updatedSheet);
  };
 
  const addRow = () => {
    setTimesheet([
      ...timesheet,
      {
        date: '',
        day: '',
        shift: '',
        inTime1: '',
        outTime1: '',
        inTime2: '',
        outTime2: '',
        hoursCompleted: '',
        overtime: '',
        totalHours: '',
      },
    ]);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Info:', employeeInfo);
    console.log('Timesheet:', timesheet);
    alert('Timesheet submitted successfully!');
    // Optionally reset
  };
 
  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-orange-500 mb-6">📅 Timesheet Submission</h1>
 
        {/* Employee Info */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Month</label>
              <input
                type="text"
                name="month"
                value={employeeInfo.month}
                onChange={handleInfoChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Employee Name</label>
              <input
                type="text"
                name="name"
                value={employeeInfo.name}
                onChange={handleInfoChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Employee ID</label>
              <input
                type="text"
                name="employeeId"
                value={employeeInfo.employeeId}
                onChange={handleInfoChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Department</label>
              <input
                type="text"
                name="department"
                value={employeeInfo.department}
                onChange={handleInfoChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Manager</label>
              <input
                type="text"
                name="manager"
                value={employeeInfo.manager}
                onChange={handleInfoChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
 
          {/* Timesheet Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-orange-100">
                <tr>
                  <th className="border px-3 py-2">Date</th>
                  <th className="border px-3 py-2">Day</th>
                  <th className="border px-3 py-2">Shift</th>
                  <th className="border px-3 py-2">In Time</th>
                  <th className="border px-3 py-2">Out Time</th>
                  <th className="border px-3 py-2">In Time</th>
                  <th className="border px-3 py-2">Out Time</th>
                  <th className="border px-3 py-2">Hours Completed</th>
                  <th className="border px-3 py-2">Overtime</th>
                  <th className="border px-3 py-2">Total Daily Hours</th>
                </tr>
              </thead>
              <tbody>
                {timesheet.map((row, index) => (
                  <tr key={index} className="bg-white">
                    <td className="border px-2 py-1">
                      <input
                        type="date"
                        value={row.date}
                        onChange={(e) => handleTimesheetChange(index, 'date', e.target.value)}
                        className="w-full"
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        type="text"
                        value={row.day}
                        onChange={(e) => handleTimesheetChange(index, 'day', e.target.value)}
                        className="w-full"
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        type="text"
                        value={row.shift}
                        onChange={(e) => handleTimesheetChange(index, 'shift', e.target.value)}
                        className="w-full"
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        type="time"
                        value={row.inTime1}
                        onChange={(e) => handleTimesheetChange(index, 'inTime1', e.target.value)}
                        className="w-full"
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        type="time"
                        value={row.outTime1}
                        onChange={(e) => handleTimesheetChange(index, 'outTime1', e.target.value)}
                        className="w-full"
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        type="time"
                        value={row.inTime2}
                        onChange={(e) => handleTimesheetChange(index, 'inTime2', e.target.value)}
                        className="w-full"
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        type="time"
                        value={row.outTime2}
                        onChange={(e) => handleTimesheetChange(index, 'outTime2', e.target.value)}
                        className="w-full"
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        type="text"
                        value={row.hoursCompleted}
                        onChange={(e) => handleTimesheetChange(index, 'hoursCompleted', e.target.value)}
                        className="w-full"
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        type="text"
                        value={row.overtime}
                        onChange={(e) => handleTimesheetChange(index, 'overtime', e.target.value)}
                        className="w-full"
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        type="text"
                        value={row.totalHours}
                        onChange={(e) => handleTimesheetChange(index, 'totalHours', e.target.value)}
                        className="w-full"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>  
 
          {/* Add Row & Submit */}
          <div className="mt-6 flex justify-between">
            <button
              type="button"
              onClick={addRow}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              ➕ Add Row
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
            >
              Submit Timesheet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default Timesheet;