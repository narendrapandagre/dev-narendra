// src/app/page.tsx
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import ProjectsCard from './components/ProjectsCard';
import BlogCard from './components/BlogCard';
import ConnectCard from './components/ConnectCard';

export default function HomePage() {
  return (
    <div className='container'>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <ProfileCard />
        <div style={{ display: 'flex', gap: '20px' }}>
          <ProjectsCard />
          <BlogCard />
        </div>
        <ConnectCard />
      </div>
    </div>
  );
}
