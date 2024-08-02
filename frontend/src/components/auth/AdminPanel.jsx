import React from 'react';
import WorkshopPanel from './WorkshopPanel';
import CampaignPanel from './CampaignPanel';
import FiltrationPanel from './FiltrationPanel';

const AdminPanel = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Panel</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <WorkshopPanel />
                <CampaignPanel />
                <FiltrationPanel />
            </div>
        </div>
    );
};

export default AdminPanel;
