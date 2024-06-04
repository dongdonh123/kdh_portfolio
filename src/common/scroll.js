function scroll() {
  const handleMouseWheel = (event) => {
    event.preventDefault(); // 기본 스크롤 동작 방지
    let delta = 0; // delta는 휠의 이동량을 담는 변수

    if (!event) event = window.event;
    if (event.wheelDelta) { //event.wheelDelta 이 있는경우 
      delta = event.wheelDelta / 120; // delta는 event.wheelDelta/ 120 의 값 
    } else if (event.detail) delta = -event.detail / 3; // event.detail이 있는경우 delta는 -event.detail / 3 값

    let moveTop = window.scrollY; // moveTop 변수를 선언하고 현재 스크롤 위치를 저장합니다.
    const elm = document.querySelectorAll('.section'); //클래스 이름이 section인 모든 요소를 선택하여 elm에 저장합니다.
    const elmCount = elm.length; //elm 요소의 개수를 저장합니다.
    const index = Array.from(elm).findIndex( // 현재 이벤트가 발생한 요소의 인덱스를 찾습니다.
      (item) => item === event.currentTarget
    );

    if (delta < 0) { //마우스 휠이 아래로 이동한 경우:
      if (index !== elmCount - 1) { //현재 요소가 마지막 요소가 아닌 경우
        try {
          moveTop =
            window.pageYOffset + elm[index + 1].getBoundingClientRect().top; //moveTop을 다음 요소의 상단 위치로 업데이트합니다
        } catch (e) {}
      }
    } else {
      if (index !== 0) { //마우스 휠이 위로 이동한 경우:
        try {
          moveTop =
            window.pageYOffset + elm[index - 1].getBoundingClientRect().top; //moveTop을 이전 요소의 상단 위치로 업데이트합니다
        } catch (e) {}
      }
    }

    const body = document.querySelector('html');
    window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' }); //스크롤을 부드럽게 이동시킵니다.
  };

  const sections = document.querySelectorAll('.section'); //클래스 이름이 section인 모든 요소를 선택하여 sections에 저장합니다.
  sections.forEach((section) => {
    section.addEventListener('mousewheel', handleMouseWheel); //마우스 휠 이벤트가 발생했을 때 handleMouseWheel 함수를 호출합니다.
  });

  return () => {
    // Cleanup: remove event listeners when the component unmounts
    sections.forEach((section) => {
      section.removeEventListener('mousewheel', handleMouseWheel);
    });
  };
}

export default scroll;
