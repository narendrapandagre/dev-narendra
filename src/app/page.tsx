// src/app/page.tsx
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import ProjectsCard from './components/ProjectsCard';
import BlogCard from './components/BlogCard';
import ConnectCard from './components/ConnectCard';
import ForceGraph from './components/ForceGraph';

export default function HomePage() {
  return (
    <div className="container">
      <ProfileCard className="profile" />
      <Sidebar className="sidebar" />
      <ProjectsCard className="projects" />
      <BlogCard className="blog" />
      <ConnectCard className="connect" />
      <ForceGraph />
    </div>
  );
}
