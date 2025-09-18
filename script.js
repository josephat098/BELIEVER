<script>
        // Modal functionality
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
        }
        
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }
        
        // Close modal when clicking outside of it
        window.onclick = function(event) {
            var modals = document.getElementsByClassName('modal');
            for (var i = 0; i < modals.length; i++) {
                if (event.target == modals[i]) {
                    modals[i].style.display = 'none';
                }
            }
        }
        
        // Tab functionality
        function openTab(tabId) {
            // For demonstration, we'll just show an alert
            // In a real application, this would show the appropriate content
            alert('Navigating to ' + tabId.replace(/-/g, ' ') + '. In a real application, this would show the appropriate content.');
        }
        
        // Mobile menu functionality
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });
        
        // Mobile dropdown functionality
        if (window.innerWidth <= 768) {
            var dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(function(dropdown) {
                dropdown.querySelector('a').addEventListener('click', function(e) {
                    if (e.target.nodeName !== 'A' || e.target.parentNode.nodeName !== 'A') {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                    }
                });
            });
        }
    </script>