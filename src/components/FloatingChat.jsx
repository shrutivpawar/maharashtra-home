// src/components/FloatingChat.jsx
import { useState, useRef, useEffect } from 'react';
import './FloatingChat.css';

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [workflow, setWorkflow] = useState('initial');
  const [userProfile, setUserProfile] = useState({});
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "नमस्कार! 👋 मी <strong>NavSahayak</strong> आहे.\nमहाराष्ट्र शासनाच्या सेवांबद्दल काहीही विचारा — ड्राइविंग लायसन्स, रेशन कार्ड, जात प्रमाणपत्र, पेन्शन, लग्न नोंदणी, अर्ज स्टेटस इ.",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      options: null,
      photos: null
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Driving License Workflow Data
  const dlImages = {
    process: 'https://images.unsplash.com/photo-1578562271051-f86b0f1f5e33?w=800',
    documents: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800',
    appointment: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    success: 'https://images.unsplash.com/photo-1621905267537-b85e80ee5ee3?w=800'
  };

  const addMessage = (text, sender = 'bot', options = null, photos = null) => {
    const newMsg = {
      id: messages.length + 1,
      text,
      sender,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      options,
      photos
    };
    setMessages(prev => [...prev, newMsg]);
  };

  const handleQuickOption = (action, value) => {
    addMessage(value, 'user');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      handleWorkflow(action, value);
    }, 1000);
  };

  const handleWorkflow = (action, value) => {
    switch (action) {
      case 'startDrivingLicense':
        setWorkflow('licenseType');
        addMessage(
          "✨ बहुतेक! तुम्ही ड्राइविंग लायसन्सच्या आवेदनासाठी सही जागेवर आहात.\n\n🚗 तुम्हाला कोणते लायसन्स हवे?",
          'bot',
          [
            { label: '🆕 नवीन लायसन्स (पहिल्यांदा)', action: 'setLicenseType', value: 'new' },
            { label: '🔄 नवीकरण (पुरानी लायसन्स)', action: 'setLicenseType', value: 'renewal' }
          ]
        );
        break;

      case 'setLicenseType':
        setUserProfile(prev => ({ ...prev, licenseType: value }));
        setWorkflow('category');
        addMessage(
          `✓ ${value === 'new' ? 'नवीन लायसन्स' : 'नवीकरण'} निवडले!\n\n🚗 आपण कोणत्या वाहनासाठी लायसन्स हवेत?`,
          'bot',
          [
            { label: '🏎️ हल्क्या वाहने (LMV)', action: 'setCategory', value: 'LMV' },
            { label: '🚌 व्यावसायिक वाहने (HMV)', action: 'setCategory', value: 'HMV' },
            { label: '🏍️ दुचाकी', action: 'setCategory', value: 'TW' }
          ],
          [dlImages.process]
        );
        break;

      case 'setCategory':
        setUserProfile(prev => ({ ...prev, category: value }));
        setWorkflow('documents');
        addMessage(
          `✅ ${value === 'LMV' ? 'हल्के वाहन' : value === 'HMV' ? 'व्यावसायिक वाहन' : 'दुचाकी'} निवडले!\n\n📋 आवश्यक कागदपत्रे:`,
          'bot'
        );
        
        setTimeout(() => {
          addMessage(
            `📄 <strong>आयु प्रमाण पत्र:</strong> जन्म प्रमाणपत्र / PAN / पासपोर्ट\n` +
            `📄 <strong>निवास प्रमाण पत्र:</strong> वीज बिल / जल बिल / मतदार कार्ड\n` +
            `📄 <strong>वैद्यकीय प्रमाणपत्र:</strong> फॉर्म 1A (सरकारी रुग्णालयातून)\n` +
            `📄 <strong>फोटो:</strong> पासपोर्ट आकाराचे (4 × 6 सेमी)\n` +
            `📄 <strong>डीएल-1 फॉर्म:</strong> भरलेला व स्वाक्षरी केलेला`,
            'bot',
            [
              { label: '✓ मी सर्व कागदपत्रे तयार केली', action: 'documentsReady', value: 'ready' },
              { label: '❓ मुझे मार्गदर्शन चाहिए', action: 'needGuidance', value: 'guidance' }
            ],
            [dlImages.documents]
          );
        }, 800);
        break;

      case 'documentsReady':
        setUserProfile(prev => ({ ...prev, documentsReady: true }));
        setWorkflow('upload');
        addMessage(
          "बहुत अच्छा! 📤 अब आप अपने दस्तावेजों को अपलोड कर सकते हैं।\n\n🔗 अपलोड लिंक: https://mvahp.mahaonline.gov.in\n\n✅ सभी दस्तावेज अपलोड करने के बाद, अगले चरण के लिए 'अगला' पर क्लिक करें।",
          'bot',
          [
            { label: '✅ अपलोड पूरा (सभी दस्तावेज)', action: 'uploadComplete', value: 'complete' }
          ]
        );
        break;

      case 'needGuidance':
        addMessage(
          "कोई चिंता नहीं! 🤝 मैं आपको प्रत्येक दस्तावेज के बारे में विस्तार से बताता हूँ:\n\n" +
          "🆔 <strong>आयु प्रमाण पत्र:</strong> यह साबित करता है कि आप 18 साल की उम्र पूरी कर चुके हैं\n" +
          "📍 <strong>निवास प्रमाण पत्र:</strong> यह साबित करता है कि आप महाराष्ट्र के स्थायी निवासी हैं\n" +
          "🏥 <strong>वैद्यकीय प्रमाणपत्र:</strong> आंख की जांच और शारीरिक फिटनेस की पुष्टि\n\n" +
          "अब तैयार हैं?",
          'bot',
          [
            { label: '✓ सभी दस्तावेज तैयार हैं', action: 'documentsReady', value: 'ready' }
          ]
        );
        break;

      case 'uploadComplete':
        setUserProfile(prev => ({ ...prev, uploadComplete: true }));
        setWorkflow('appointment');
        addMessage(
          "शानदार! 🎉 आपके दस्तावेज सफलतापूर्वक अपलोड हो गए।\n\n📅 अब अपनी परीक्षा के लिए एक सुविधाजनक तारीख और समय चुनें।",
          'bot'
        );

        setTimeout(() => {
          addMessage(
            "📍 <strong>परीक्षा स्थान:</strong> RTO कार्यालय, मुंबई / पुणे / नागपुर\n\n" +
            "निम्नलिखित उपलब्ध तारीखों में से एक चुनें:",
            'bot',
            [
              { label: '📅 15 दिसंबर 2024 - सुबह 9:00 AM', action: 'selectDate', value: '15_dec_9am' },
              { label: '📅 16 दिसंबर 2024 - दोपहर 2:00 PM', action: 'selectDate', value: '16_dec_2pm' },
              { label: '📅 18 दिसंबर 2024 - सुबह 10:00 AM', action: 'selectDate', value: '18_dec_10am' },
              { label: '📅 20 दिसंबर 2024 - दोपहर 3:00 PM', action: 'selectDate', value: '20_dec_3pm' }
            ],
            [dlImages.appointment]
          );
        }, 800);
        break;

      case 'selectDate':
        const dateMap = {
          '15_dec_9am': '15 दिसंबर 2024, सुबह 9:00 AM',
          '16_dec_2pm': '16 दिसंबर 2024, दोपहर 2:00 PM',
          '18_dec_10am': '18 दिसंबर 2024, सुबह 10:00 AM',
          '20_dec_3pm': '20 दिसंबर 2024, दोपहर 3:00 PM'
        };
        setUserProfile(prev => ({ ...prev, appointmentDate: dateMap[value] }));
        setWorkflow('review');
        addMessage(
          `✅ आपकी नियुक्ति तय की गई!\n\n📍 <strong>तारीख & समय:</strong> ${dateMap[value]}\n📍 <strong>स्थान:</strong> RTO कार्यालय, मुंबई\n\nअब मैं आपका सारांश दिखाता हूँ...`,
          'bot'
        );

        setTimeout(() => {
          showReview();
        }, 1200);
        break;

      case 'submitApplication':
        setWorkflow('success');
        setUserProfile(prev => ({ 
          ...prev, 
          applicationId: 'DL' + Math.random().toString(36).substr(2, 9).toUpperCase(),
          submittedAt: new Date().toLocaleString('hi-IN')
        }));
        
        addMessage("⏳ आपका आवेदन जमा किया जा रहा है...", 'bot');
        
        setTimeout(() => {
          showSuccessMessage();
        }, 1500);
        break;

      case 'trackApplication':
        addMessage(
          `📊 <strong>आवेदन स्थिति ट्रैकर</strong>\n\n` +
          `आवेदन ID: <strong>${userProfile.applicationId}</strong>\n\n` +
          `✅ दस्तावेज सत्यापित (10 दिसंबर 2024)\n` +
          `✅ परीक्षा तिथि निर्धारित (15 दिसंबर 2024)\n` +
          `⧗ लिखित परीक्षा की प्रतीक्षा में\n` +
          `◯ व्यावहारिक परीक्षा\n` +
          `◯ लाइसेंस मुद्रण\n\n` +
          `💬 कोई सवाल है?`,
          'bot',
          [
            { label: '❓ और सवाल पूछें', action: 'askQuestion', value: 'question' },
            { label: '🔄 नई सेवा चुनें', action: 'resetChat', value: 'reset' }
          ]
        );
        break;

      case 'resetChat':
        resetChat();
        break;

      default:
        break;
    }
  };

  const showReview = () => {
    addMessage(
      `<strong>📋 आपका आवेदन सारांश</strong>\n\n` +
      `🆔 <strong>लाइसेंस प्रकार:</strong> ${userProfile.licenseType === 'new' ? 'नवीन' : 'नवीकरण'}\n` +
      `🚗 <strong>वाहन श्रेणी:</strong> ${userProfile.category === 'LMV' ? 'हल्के वाहन' : userProfile.category === 'HMV' ? 'व्यावसायिक' : 'दुचाकी'}\n` +
      `📅 <strong>परीक्षा तारीख:</strong> ${userProfile.appointmentDate}\n` +
      `✓ <strong>दस्तावेज:</strong> अपलोड किया गया\n\n` +
      `सब कुछ सही है?`,
      'bot',
      [
        { label: '✅ हाँ, जमा करें', action: 'submitApplication', value: 'submit' },
        { label: '✏️ संपादित करें', action: 'resetChat', value: 'edit' }
      ],
      [dlImages.success]
    );
  };

  const showSuccessMessage = () => {
    const appId = userProfile.applicationId;
    addMessage(
      `🎉 <strong>बधाई हो!</strong> आपका आवेदन सफलतापूर्वक जमा हो गया!\n\n` +
      `📌 <strong>आवेदन ID:</strong> ${appId}\n` +
      `📅 <strong>परीक्षा तारीख:</strong> ${userProfile.appointmentDate}\n` +
      `📧 <strong>पुष्टि:</strong> आपके ईमेल को भेजी गई\n\n` +
      `✅ अगले चरण:\n` +
      `1️⃣ लिखित परीक्षा दें\n` +
      `2️⃣ व्यावहारिक परीक्षा दें\n` +
      `3️⃣ लाइसेंस प्राप्त करें\n\n` +
      `💡 आप अपना आवेदन ट्रैक कर सकते हैं।`,
      'bot',
      [
        { label: '📊 आवेदन ट्रैक करें', action: 'trackApplication', value: 'track' },
        { label: '📥 रसीद डाउनलोड करें', action: 'downloadReceipt', value: 'download' },
        { label: '🔄 नई सेवा', action: 'resetChat', value: 'reset' }
      ],
      [dlImages.success]
    );
  };

  const resetChat = () => {
    setWorkflow('initial');
    setUserProfile({});
    setMessages([
      {
        id: 1,
        text: "नमस्कार! 👋 मी <strong>NavSahayak</strong> आहे.\nमहाराष्ट्र शासनाच्या सेवांबद्दल काहीही विचारा।",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: null,
        photos: null
      }
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    addMessage(input.trim(), 'user');
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const text = input.toLowerCase();

      if (text.includes('ड्राइविंग') || text.includes('driving') || text.includes('लायसन्स') || text.includes('license')) {
        handleWorkflow('startDrivingLicense', '');
      } else if (text.includes('रेशन') || text.includes('ration')) {
        addMessage(
          "रेशन कार्डसाठी अर्ज कसा करावा:\n" +
          "1. https://aaplesarkar.mahaonline.gov.in वर जा\n" +
          "2. आवश्यक कागदपत्रे: आधार, निवासाचा पुरावा, उत्पन्न प्रमाणपत्र\n" +
          "3. साधारण वेळ: १५–३० दिवस\n\n" +
          "ड्राइविंग लायसन्स सेवा चाहिए?",
          'bot',
          [
            { label: '🚗 ड्राइविंग लायसन्स', action: 'startDrivingLicense', value: 'ड्राइविंग लायसन्स' }
          ]
        );
      } else {
        addMessage(
          "क्षमस्व, मी तुमचा प्रश्न नीट समजू शकलो नाही 😅\n\n" +
          "मी खाली दिलेल्या सेवांसाठी मदत करू शकतो:\n" +
          "• 🚗 ड्राइविंग लायसन्स\n" +
          "• 📋 रेशन कार्ड\n" +
          "• 🎓 जात प्रमाणपत्र\n" +
          "• 💍 लग्न नोंदणी",
          'bot',
          [
            { label: '🚗 ड्राइविंग लायसन्स', action: 'startDrivingLicense', value: 'ड्राइविंग लायसन्स' }
          ]
        );
      }
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="chat-bubble"
        onClick={() => setOpen(!open)}
        aria-label="Open NavSahayak chat"
        title="NavSahayak – Maharashtra Govt Services Assistant"
      >
        <span className="chat-icon">💬</span>
        <span className="chat-label">NavSahayak ला विचारा</span>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-left">
              <span className="bot-avatar">🤖</span>
              <div>
                <h4>NavSahayak</h4>
                <p>Smart Government Service Assistant</p>
              </div>
            </div>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>

          <div className="chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                {msg.sender === 'bot' && <span className="avatar bot-avatar">🤖</span>}
                
                {/* Photos if available */}
                {msg.photos && msg.photos.length > 0 && (
                  <div className="photo-container">
                    {msg.photos.map((photo, idx) => (
                      <img key={idx} src={photo} alt="Service guide" className="service-photo" />
                    ))}
                  </div>
                )}

                <div className="bubble">
                  <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }} />
                  <span className="timestamp">{msg.timestamp}</span>

                  {/* Quick Options */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="options-container">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          className="option-btn"
                          onClick={() => handleQuickOption(opt.action, opt.value)}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {msg.sender === 'user' && <span className="avatar user-avatar">👤</span>}
              </div>
            ))}

            {isTyping && (
              <div className="message bot">
                <span className="avatar bot-avatar">🤖</span>
                <div className="bubble typing">
                  <span className="typing-dots">
                    <span></span><span></span><span></span>
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {workflow === 'initial' && (
            <div className="quick-replies">
              <button onClick={() => handleQuickOption('startDrivingLicense', 'ड्राइविंग लायसन्स')}>
                🚗 ड्राइविंग लायसन्स
              </button>
              <button onClick={() => handleQuickOption('', '')}>
                📋 रेशन कार्ड
              </button>
              <button onClick={() => handleQuickOption('', '')}>
                🎓 जात प्रमाणपत्र
              </button>
              <button onClick={() => handleQuickOption('', '')}>
                💍 लग्न नोंदणी
              </button>
            </div>
          )}

          {/* Input Area */}
          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="तुमचा प्रश्न लिहा..."
              autoFocus
            />
            <button
              className="send-btn"
              onClick={handleSend}
              disabled={!input.trim()}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}