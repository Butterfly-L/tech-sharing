document.addEventListener("DOMContentLoaded", function() {
    // 選定頁面中帶有 lazy class 名稱的那張圖片
    let lazyImage = document.querySelectorAll(".img")
    
    const lazyLoad = function() {
        for (let image of lazyImage) {
            // 確認圖片是否進到可視範圍
      if ((image.getBoundingClientRect().top <= window.innerHeight && image.getBoundingClientRect().bottom >= 0)) {
        // 確認有才加載圖片
        image.setAttribute('src', image.dataset.src)
        // lazyImage.src = lazyImage.dataset.src
        image.classList.add('load')
        // lazyImage.srcset = lazyImage.dataset.srcset
        // 完成後就註銷掉 scroll 事件監聽
        // document.removeEventListener("scroll", lazyLoad)
      }
        }
      
    }
  
    // 註冊 scroll 事件監聽器，使用者滑動頁面觸發 lazyLoad 
    document.addEventListener("scroll", lazyLoad)
  })