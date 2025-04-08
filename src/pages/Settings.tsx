
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

const SettingsPage: React.FC = () => {
  const handleSaveSettings = () => {
    toast.success('Settings saved successfully');
  };
  
  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your account settings and preferences
        </p>
      </div>
      
      <div className="space-y-6">
        {/* Account Settings */}
        <Card className="edufolio-card">
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your account information and security</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium">Email Notifications</h3>
                  <p className="text-sm text-gray-500">Receive email notifications about your portfolio</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <Switch />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-md font-medium">Change Password</h3>
              <Button variant="outline">Update Password</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Privacy Settings */}
        <Card className="edufolio-card">
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
            <CardDescription>Control who can see your portfolio and information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium">Public Profile</h3>
                  <p className="text-sm text-gray-500">Make your profile visible to everyone</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium">Show Email Address</h3>
                  <p className="text-sm text-gray-500">Display your email address on your public profile</p>
                </div>
                <Switch />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium">Show Social Links</h3>
                  <p className="text-sm text-gray-500">Display your social media links on your public profile</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Data Settings */}
        <Card className="edufolio-card">
          <CardHeader>
            <CardTitle>Data Management</CardTitle>
            <CardDescription>Control your data and account preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-md font-medium">Export Your Data</h3>
              <p className="text-sm text-gray-500">Download a copy of your portfolio data</p>
              <Button variant="outline" className="mt-2">Export Data</Button>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-md font-medium">Delete Account</h3>
              <p className="text-sm text-gray-500">Permanently delete your account and all associated data</p>
              <Button variant="destructive" className="mt-2">Delete Account</Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-end">
          <Button onClick={handleSaveSettings}>Save All Settings</Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
