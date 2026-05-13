document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 네비게이션 스무스 스크롤
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // 네비게이션바 높이(60px) + 여유공간(20px) 만큼 빼고 스크롤
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. 검색창 기능 (현재는 알림만 띄움)
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    function handleSearch() {
        const query = searchInput.value.trim();
        if (query === '') {
            alert('검색어를 입력해주세요! 😅');
            return;
        }
        alert(`"${query}"에 대한 검색 기능은 현재 준비 중입니다! 🛠️`);
        searchInput.value = ''; // 입력창 초기화
    }

    searchBtn.addEventListener('click', handleSearch);

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // 3. 모바일 메뉴 아이콘 클릭 시 (간단한 알림)
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            alert('모바일 전체 메뉴 열기 기능 준비 중입니다!');
        });
    }
});
