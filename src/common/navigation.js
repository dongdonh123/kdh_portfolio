import React from 'react';
import Nav from 'react-bootstrap/Nav';

function TabsExample() {
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId); // 해당 섹션 요소를 가져옵니다.
    if (section) {
      const moveTop = section.offsetTop; // 섹션의 상단 위치를 가져옵니다.
      window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' }); // 해당 위치로 부드럽게 스크롤합니다.
    }
  };

  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link onClick={() => handleNavClick('Intro')}>Intro</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => handleNavClick('Profile')}>Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => handleNavClick('Project')}>Project</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => handleNavClick('Outro')}>Outro</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => handleNavClick('Admin')}>Admin</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TabsExample;