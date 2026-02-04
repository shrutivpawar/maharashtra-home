import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Bottom from './components/Bottom';
import './styles.css';

function App() {
  const [activeTab, setActiveTab] = useState('important');
  return (
    <>
      <Header />
      <Hero />

      <div className="cards">
        <div className="card">
          <img src="https://img.mathrubhumi.com/view/acePublic/alias/contentid/1ouxs6skkmffq5lqqbt/0/devendra-fadnavis-jpg.webp?f=3:2&q=0.75&w=900" />
          <h3>Shri. Devendra Fadnavis</h3>
          <p>Hon'ble Chief Minister</p>
        </div>

        <div className="card">
          <img src="https://cdnbbsr.s3waas.gov.in/s3a012869311d64a44b5a0d567cd20de04/uploads/2025/02/202502201224681398.png" />
          <h3>Dr. Pankaj Bhoyar</h3>
          <p>Hon'ble Minister of State, Home(Rural)</p>
        </div>

        <div className="card">
          <img src="https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/202412271839437941.png" />
          <h3>Shri. Yogesh Kadam</h3>
          <p>Hon'ble Minister of State, Home(Urban)</p>
        </div>

        <div className="card">
          <img src="https://cdnbbsr.s3waas.gov.in/s3ea80421fc06a2ed5c7adc1018e0026df/uploads/bfi_thumb/20250408182092872-r41njg8u8cyvnn6iixd0c5u1leveft1vi5df5di9wg.jpg" />
          <h3>Smt. Manisha Patankar – Mahaiskar, I.A.S.</h3>
          <p>Additional Chief Secretary (Home)</p>
        </div>
      </div>


      {/* Tabbed Info Section */}
      <div className="tabs-wrapper">
        <div className="tabs-header">
          <button 
            className={`tab-btn ${activeTab === 'important' ? 'active' : 'blue-btn'}`} 
            onClick={() => setActiveTab('important')}
          >
            Important
          </button>
          <button 
            className={`tab-btn ${activeTab === 'tenders' ? 'active' : 'blue-btn'}`} 
            onClick={() => setActiveTab('tenders')}
          >
            Tenders
          </button>
          <button 
            className={`tab-btn ${activeTab === 'recruitments' ? 'active' : 'blue-btn'}`} 
            onClick={() => setActiveTab('recruitments')}
          >
            Recruitments
          </button>
          <button 
            className={`tab-btn ${activeTab === 'notifications' ? 'active' : 'blue-btn'}`} 
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </button>
        </div>

        <div className="tabs-body">
          {activeTab === 'important' && (
            <ul>
              <li>Police Complaint Authority</li>
              <li>The Maharashtra Prevention and Eradication of Human Sacrifice Act, 2013</li>
              <li>Maharashtra Prohibition Act, 2022</li>
              <li>The Scheduled Caste and Scheduled Tribes (Prevention of Atrocities) Act, 1989</li>
            </ul>
          )}
          {activeTab === 'tenders' && <p>No posts to display</p>}
          {activeTab === 'recruitments' && <p>No posts to display</p>}
          {activeTab === 'notifications' && <p>No posts to display</p>}
        </div>
      </div>

            
      <Gallery />
      <Footer />
      <Bottom />
    </>
  );
}

export default App;