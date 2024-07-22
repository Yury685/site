document.addEventListener('DOMContentLoaded', () => {
    function showTab(tabId) {
        const tabs = document.querySelectorAll('.tab-content');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        const activeTab = document.getElementById(tabId);
        if (activeTab) {
            activeTab.classList.add('active');
        }
    }

    // Show the first tab by default
    showTab('cr7');
});
