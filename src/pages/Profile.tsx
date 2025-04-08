
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pencil } from 'lucide-react';
import { toast } from 'sonner';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info('Profile update will be implemented in the next phase');
  };
  
  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your personal information
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Summary Card */}
        <Card className="edufolio-card lg:col-span-1">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-lg">Your Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="relative">
              <Avatar className="h-32 w-32">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
              <Button variant="secondary" size="icon" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                <Pencil className="h-4 w-4" />
              </Button>
            </div>
            <h2 className="text-xl font-bold mt-4">{user?.name}</h2>
            <p className="text-gray-500 mt-1">{user?.email}</p>
            
            <div className="w-full mt-6">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <h3 className="text-sm font-medium">About</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Student at Stanford University. Passionate about AI and machine learning.
                </p>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <h3 className="text-sm font-medium">Contact Information</h3>
                <div className="mt-2 text-sm text-gray-500">
                  <p>Email: {user?.email}</p>
                  <p className="mt-1">Phone: +1 (123) 456-7890</p>
                  <p className="mt-1">Location: San Francisco, CA</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <h3 className="text-sm font-medium">Social Profiles</h3>
                <div className="mt-2 text-sm">
                  <a href="#" className="text-edufolio-blue hover:underline block">GitHub</a>
                  <a href="#" className="text-edufolio-blue hover:underline block mt-1">LinkedIn</a>
                  <a href="#" className="text-edufolio-blue hover:underline block mt-1">Twitter</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Edit Profile Form */}
        <Card className="edufolio-card lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Edit Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue={user?.name?.split(' ')[0]} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue={user?.name?.split(' ')[1] || ''} />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={user?.email} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+1 (123) 456-7890" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="San Francisco, CA" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue="Student at Stanford University. Passionate about AI and machine learning."
                />
              </div>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-md font-medium mb-4">Social Profiles</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub URL</Label>
                    <Input id="github" defaultValue="https://github.com/username" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn URL</Label>
                    <Input id="linkedin" defaultValue="https://linkedin.com/in/username" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter URL</Label>
                    <Input id="twitter" defaultValue="https://twitter.com/username" />
                  </div>
                </div>
              </div>
              
              <div className="pt-4 flex justify-end">
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
