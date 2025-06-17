import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLikedProfiles } from '../contexts/LikedProfilesContext';

function ChatScreen() {
  const { id } = useParams();
  const { friends } = useLikedProfiles();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const friend = friends.find(f => f.id === id);

  useEffect(() => {
    // Load messages from localStorage 
    const savedMessages = localStorage.getItem(`chat-${id}`);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, [id]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const updatedMessages = [
        ...messages,
        {
          id: Date.now(),
          text: newMessage,
          sender: 'me',
          timestamp: new Date().toISOString()
        }
      ];
      setMessages(updatedMessages);
      localStorage.setItem(`chat-${id}`, JSON.stringify(updatedMessages));
      setNewMessage('');
    }
  };

  if (!friend) {
    return <div>Friend not found</div>;
  }

  return (
    <div className="chat-screen">
      <div className="chat-header">
        <h2>Chat with {friend.name}</h2>
      </div>
      <div className="chat-messages">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatScreen;