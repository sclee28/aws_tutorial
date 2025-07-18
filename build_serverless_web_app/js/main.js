// 웹 페이지 로딩이 완료되면 실행될 함수
document.addEventListener('DOMContentLoaded', () => {
    console.log('Wild Rydes website loaded successfully!');

    // 예시: 버튼 클릭 시 메시지 표시
    const getStartedButton = document.querySelector('.button');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', (event) => {
            // 실제 웹사이트에서는 API 호출이나 다른 페이지로 이동 등의 로직이 들어갈 수 있습니다.
            alert('Unicorn ride request initiated!');
            // event.preventDefault(); // 기본 링크 이동을 막으려면 주석 해제
        });
    }
});