document.addEventListener("DOMContentLoaded", function () {
  // Handle search functionality (simple for now)
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', function () {
    console.log("Searching for:", searchInput.value);
  });

  // Pagination logic
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  
  let currentPage = 1;
  
  prevButton.addEventListener('click', function () {
    if (currentPage > 1) {
      currentPage--;
      updatePage();
    }
  });
  
  nextButton.addEventListener('click', function () {
    currentPage++;
    updatePage();
  });

  function updatePage() {
    console.log("Current Page:", currentPage);
    // You can update content based on page
  }
});
