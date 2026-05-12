const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const categoryDropdown = document.getElementById("category-dropdown");
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const viewCategoryBtn = document.getElementById("view-category-button"); 
const categoryList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");
const categoryName = document.querySelector(".category-name");



function getBookmarks() {
    const data = localStorage.getItem("bookmarks");
    
    if (!data) return [];

    try {
        const bookmarks = JSON.parse(data);


        if (!Array.isArray(bookmarks)) return [];
        const isValid = bookmarks.every(obj => 
            obj && 
            Object.hasOwn(obj, 'name') && 
            Object.hasOwn(obj, 'category') && 
            Object.hasOwn(obj, 'url')
        );

        return isValid ? bookmarks : [];

    } catch (e) {
        return [];
    }
}

function displayOrCloseForm() {
    mainSection.classList.toggle("hidden");
    formSection.classList.toggle("hidden")
}


addBookmarkBtn.addEventListener("click", () => { 
  const selectedItem = categoryDropdown.value;
  
  categoryName.innerText = selectedItem;
  
  displayOrCloseForm();
})

closeFormBtn.addEventListener("click", () => {
    displayOrCloseForm();
})

addBookmarkFormBtn.addEventListener("click", () =>{

  
  const existingBookmarks = JSON.parse(localStorage.getItem("bookmarks")) ? JSON.parse(localStorage.getItem("bookmarks")) : [];
  
  const bookmarkObj = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value
  }
  
  existingBookmarks.push(bookmarkObj)
  
  localStorage.setItem("bookmarks", JSON.stringify(existingBookmarks))
  
    nameInput.value = ''
    url.value = ''
    
  displayOrCloseForm();
  
})