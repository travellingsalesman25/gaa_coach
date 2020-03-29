import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { Navigation } from './components/navigation.js';
import './index.css';
import { NoticeBoard } from './components/noticeboard.js';
import { SearchPanel } from './components/searchpanel.js';

 
  class Main extends React.Component {
    render() {
      return (
        <div>
            <Header />
            <section>
                <Navigation />
                <SearchPanel />
                /*<NoticeBoard style='background-color:white;'/>*/
            </section>
            <Footer />
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );