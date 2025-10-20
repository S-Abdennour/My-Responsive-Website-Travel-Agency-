  AOS.init({
    duration: 1000,
    offset: 100,
  });


    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }

    function closeSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }
     function closeSidebarmenu() {
        const sidebar = document.querySelector('.MenuImage');
        sidebar.style.display = 'none';
    }
    function showmenuico()
    {
       const sidebar = document.querySelector('.MenuImage');
        sidebar.style.display = 'flex';
    }
