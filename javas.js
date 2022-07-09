document.getElementById('btn').addEventListener("copy" ,(event) => message(event) )
function message(event) {
    event.clipboardData.setData('text' , "عایا منتغی نیست ؟");
    event.preventDefault();
}
