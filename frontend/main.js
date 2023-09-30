window.addEventListener('DOMContentLoaded' , (event) =>{
    getVisitCount();
})

const functionApi = ' ';

const getVisitCount = () => {
    let count = 30;
    fetch(functionapi).then(response => {
        return response.json()
    }).then(respons =>{
        console,log("Website called function API.");
        count = response.count;
        doucument.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;

}