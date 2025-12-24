// apps/web/src/App.tsx
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FolderOpen, Briefcase } from 'lucide-react';

// Placeholder Components
const Dashboard = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Executive Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow border-t-4 border-primary">
        <h3 className="text-gray-500 text-sm">Total Revenue</h3>
        <p className="text-3xl font-bold">$124,500</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow border-t-4 border-secondary">
        <h3 className="text-gray-500 text-sm">Active Deals</h3>
        <p className="text-3xl font-bold">45</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow border-t-4 border-accent">
        <h3 className="text-gray-500 text-sm">Open Jobs</h3>
        <p className="text-3xl font-bold">12</p>
      </div>
    </div>
  </div>
);

const CRM = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">CRM & Sales</h1>
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left">Contact Name</th>
            <th className="py-3 px-4 text-left">Company</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4">Alice Johnson</td>
            <td className="py-3 px-4">TechCorp</td>
            <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Customer</span></td>
            <td className="py-3 px-4 text-blue-600 hover:underline cursor-pointer">View</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 px-4">Bob Smith</td>
            <td className="py-3 px-4">Innovate Inc</td>
            <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Lead</span></td>
            <td className="py-3 px-4 text-blue-600 hover:underline cursor-pointer">View</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const HRM = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">HRM & Recruitment</h1>
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {['Applied', 'Screening', 'Interview', 'Offer'].map((stage) => (
        <div key={stage} className="bg-gray-100 p-4 rounded-lg w-72 flex-shrink-0">
          <h3 className="font-bold mb-3">{stage}</h3>
          <div className="bg-white p-3 rounded shadow mb-2 cursor-pointer hover:shadow-md">
            <p className="font-semibold">Candidate #{Math.floor(Math.random() * 100)}</p>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
           <div className="bg-white p-3 rounded shadow mb-2 cursor-pointer hover:shadow-md">
            <p className="font-semibold">Candidate #{Math.floor(Math.random() * 100)}</p>
            <p className="text-sm text-gray-500">Product Manager</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DMS = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Documents (NextCloud)</h1>
    <div className="bg-white p-8 rounded-lg shadow text-center">
      <p className="text-gray-600 mb-4">
        Your NextCloud instance is running at <a href="http://localhost:8080" target="_blank" className="text-primary hover:underline">http://localhost:8080</a>
      </p>
      <div className="border-2 border-dashed border-gray-300 p-12 rounded-lg bg-gray-50">
        <FolderOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p>WebDAV Integration Module Ready</p>
        <p className="text-sm text-gray-500">Files for Client X would appear here.</p>
      </div>
    </div>
  </div>
);

function App() {
  const location = useLocation();

  const NavItem = ({ to, icon: Icon, label }: any) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`flex items-center space-x-3 px-6 py-3 hover:bg-blue-700 transition-colors ${
          isActive ? 'bg-blue-800 border-l-4 border-yellow-400' : ''
        }`}
      >
        <Icon size={20} />
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col shadow-xl z-10">
        <div className="p-6 border-b border-blue-600">
          <h1 className="text-2xl font-bold flex items-center">
             UEMS <span className="text-yellow-400 text-xs ml-2 border border-yellow-400 px-1 rounded">V1.0</span>
          </h1>
        </div>
        <nav className="flex-1 mt-6">
          <NavItem to="/" icon={LayoutDashboard} label="Dashboard" />
          <NavItem to="/crm" icon={Users} label="CRM & Sales" />
          <NavItem to="/hrm" icon={Briefcase} label="HRM" />
          <NavItem to="/dms" icon={FolderOpen} label="Documents" />
        </nav>
        <div className="p-4 border-t border-blue-600 text-sm text-blue-200">
          &copy; 2025 UEMS Project
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-700">Enterprise Portal</h2>
          <div className="flex items-center space-x-4">
             <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">A</div>
             <span className="text-sm text-gray-600">Admin User</span>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/hrm" element={<HRM />} />
          <Route path="/dms" element={<DMS />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
