import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, MessageSquare, Trash2, Reply, Eye, 
  Users, Calendar, BarChart3, Clock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Admin.css';

// Sample message type
interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

const Admin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('messages');
  
  // Sample messages data
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Web Development Project Inquiry",
      message: "Hi Charity, I'm interested in your web development services. My company needs a new website with e-commerce functionality. Could we discuss this project further? I'd like to know your rates and availability for the next month.",
      date: "2025-04-25T14:30:00",
      read: true
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      subject: "Virtual Assistant Position",
      message: "Hello, I'm looking for a virtual assistant for our startup. I saw your profile and was impressed with your skills. We need someone for approximately 20 hours per week to handle customer support and some administrative tasks. Are you available for a call to discuss details?",
      date: "2025-04-24T09:15:00",
      read: false
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "m.brown@example.com",
      subject: "Database Design Consultation",
      message: "Hi there, I need help with designing a database for my inventory management system. I've been trying to set it up myself but have run into some normalization issues. Would you be available for a consultation? I'd appreciate your expertise on this matter.",
      date: "2025-04-22T16:45:00",
      read: false
    },
  ]);
  
  // Stats data
  const stats = {
    totalMessages: messages.length,
    unreadMessages: messages.filter(m => !m.read).length,
    thisWeekMessages: 5,
    responseTime: "2 hours"
  };
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  const handleDeleteMessage = (id: number) => {
    setMessages(messages.filter(message => message.id !== id));
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>Manage your portfolio website, view messages, and update content.</p>
        </div>
        
        <div className="admin-nav">
          <button 
            className={activeTab === 'messages' ? 'active' : ''} 
            onClick={() => setActiveTab('messages')}
          >
            Messages
          </button>
          <button 
            className={activeTab === 'dashboard' ? 'active' : ''} 
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className="logout-btn" 
            onClick={handleLogout}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
        
        {activeTab === 'dashboard' && (
          <div className="dashboard-content">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon icon-primary">
                  <MessageSquare size={20} />
                </div>
                <div className="stat-number">{stats.totalMessages}</div>
                <div className="stat-label">Total Messages</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon icon-accent">
                  <Users size={20} />
                </div>
                <div className="stat-number">{stats.unreadMessages}</div>
                <div className="stat-label">Unread Messages</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon icon-success">
                  <Calendar size={20} />
                </div>
                <div className="stat-number">{stats.thisWeekMessages}</div>
                <div className="stat-label">This Week</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon icon-warning">
                  <Clock size={20} />
                </div>
                <div className="stat-number">{stats.responseTime}</div>
                <div className="stat-label">Avg. Response Time</div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'messages' && (
          <div className="messages-content">
            {messages.length > 0 ? (
              <div className="messages-list">
                {messages.map(message => (
                  <div 
                    key={message.id} 
                    className={`message-card ${!message.read ? 'unread' : ''}`}
                  >
                    <div className="message-header">
                      <div className="message-meta">
                        <span className="message-sender">{message.name}</span>
                        <span className="message-email">{message.email}</span>
                      </div>
                      <span className="message-date">{formatDate(message.date)}</span>
                    </div>
                    <div className="message-subject">{message.subject}</div>
                    <div className="message-content">{message.message}</div>
                    <div className="message-actions">
                      <button className="message-btn view-btn">
                        <Eye size={14} /> View
                      </button>
                      <button className="message-btn reply-btn">
                        <Reply size={14} /> Reply
                      </button>
                      <button 
                        className="message-btn delete-btn"
                        onClick={() => handleDeleteMessage(message.id)}
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-messages">
                <MessageSquare size={48} />
                <h3>No messages yet</h3>
                <p>When people contact you through your form, their messages will appear here.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;