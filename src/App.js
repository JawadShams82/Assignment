import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import ToggleButton from "./components/button";
import Profile from "./components/profile";
import Status from "./components/status";
import Pagination from "./components/pagination";
import "./App.css";

// 12 dummy articles = 4 pages (3 per page)
const dummyArticles = [
  { title: "About Aust Life", status: "published", lastEdited: "2 days ago" },
  { title: "Learning Data Structure", status: "draft", lastEdited: "1 week ago" },
  { title: "Productivity Hacks", status: "published", lastEdited: "2 weeks ago" },
  { title: "Exploring Carnival in Aust", status: "draft", lastEdited: "3 weeks ago" },
  { title: "Being a Listener", status: "published", lastEdited: "1 month ago" },
  { title: "Learning Communication Skill", status: "draft", lastEdited: "2 months ago" },
  { title: "C Programming Basics", status: "published", lastEdited: "3 months ago" },
  { title: "Web Dev Roadmap", status: "draft", lastEdited: "4 months ago" },
  { title: "Database Design Tips", status: "published", lastEdited: "5 months ago" },
  { title: "Machine Learning Intro", status: "draft", lastEdited: "6 months ago" },
  { title: "AI in Daily Life", status: "published", lastEdited: "7 months ago" },
  { title: "Blockchain Basics", status: "draft", lastEdited: "8 months ago" },
];

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [view, setView] = useState("articles");
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 3;
  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = dummyArticles.slice(indexOfFirst, indexOfLast);

  return (
    <div className="app">
      <Sidebar isOpen={isOpen} onSelect={setView} />
      <div className="main">
        <ToggleButton toggle={() => setIsOpen(!isOpen)} />

        {view === "profile" && <Profile />}

        {view === "articles" && (
          <div>
            <h2>My Articles</h2>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Last Edited</th>
                </tr>
              </thead>
              <tbody>
                {currentArticles.map((article, idx) => (
                  <tr key={idx}>
                    <td>{article.title}</td>
                    <td><Status type={article.status} /></td>
                    <td>{article.lastEdited}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(dummyArticles.length / articlesPerPage)}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
