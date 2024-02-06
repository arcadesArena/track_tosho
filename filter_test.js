const list_items = document.getElementsByClassName("home_list_entry")
const watching = ["Sousou no Frieren"]
const not_watching = ["Sasaki to P-chan"]
for (var i=0;i<list_items.length;i++){
    if(list_items[i].getElementsByClassName("link")[0].firstChild.innerHTML.includes("Dub")){
        list_items[i].style.display="none"
    }
    if(list_items[i].getElementsByClassName("link")[0].firstChild.innerHTML.includes("480p")){
        list_items[i].style.display="none"
    }
    if(not_watching.includes(list_items[i].getElementsByClassName("links")[0].getElementsByClassName("serieslink")[0].firstChild.innerHTML)){
        //check for no series link
        list_items[i].style.display="none"
    }
    if(watching.includes(list_items[i].getElementsByClassName("links")[0].getElementsByClassName("serieslink")[0].firstChild.innerHTML)){
        //check for no series link
        list_items[i].style.backgroundColor="yellow"
    }
}