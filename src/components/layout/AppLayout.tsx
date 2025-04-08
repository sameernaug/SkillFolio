
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  LayoutDashboard, 
  GraduationCap, 
  FolderKanban, 
  Award, 
  UserCircle, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const closeSidebarOnMobile = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };
  
  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Education', icon: GraduationCap, path: '/education' },
    { name: 'Projects', icon: FolderKanban, path: '/projects' },
    { name: 'Certifications', icon: Award, path: '/certifications' },
    { name: 'Profile', icon: UserCircle, path: '/profile' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];
  
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 z-50 flex flex-col w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out",
          isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <span className="text-xl font-bold text-edufolio-blue dark:text-edufolio-blue-light">
              MyEdufolio
            </span>
          </div>
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="ml-2">
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path);
                  closeSidebarOnMobile();
                }}
                className="flex items-center px-4 py-3 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group animate-slide-in"
              >
                <item.icon className="mr-3 h-5 w-5 text-edufolio-blue dark:text-edufolio-blue-light" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <img 
              src={user?.avatar || "https://ui-avatars.com/api/?name=User&background=4A6FA5&color=fff"} 
              alt="User avatar" 
              className="h-10 w-10 rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-medium">{user?.name || 'User'}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email || 'user@example.com'}</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </div>
      </aside>
      
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Main content */}
      <div className={cn(
        "flex-1 overflow-auto transition-all duration-300 ease-in-out",
        isMobile ? "ml-0" : "ml-64"
      )}>
        {/* Top header */}
        <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 border-b bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200 dark:border-gray-700">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <div className={cn("text-lg font-medium", isMobile ? "ml-4" : "")}>
            Dashboard
          </div>
          <div className="flex items-center space-x-2">
            {/* Add notification or other icons here */}
          </div>
        </header>
        
        {/* Page content */}
        <main className="p-6 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
