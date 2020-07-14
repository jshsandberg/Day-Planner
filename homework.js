const cont = document.querySelector(`.container`);



const today = new Date();

const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const seconds = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const dateTime = date+' '+seconds;

document.querySelector(`#currentDay`).innerHTML = dateTime;

const date2 = new Date();
const hour = date2.getHours()-8;
const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : {}

  

let tick = [`8am`, `9am`, `10am`, `11am`, `12pm`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`]


for(let i =0; i<tick.length;i++){
    $(".container").append(`
    <div class="row time-block">
        <div class="hour col-2">${tick[i]}</div>
        <textarea class="description col-7 ${i<hour ? "past":i>hour? "future": "present"}">${todos[tick[i]] || ""}</textarea>
        <button class="saveBtn col-2">Save</button>
      </div>
    `)
}


$(`.saveBtn`).on(`click`, function(){
    let key = $(this).siblings(".hour").text();
    let value = $(this).siblings("textarea").val();
    todos[key] = value;
    console.log(todos)
    localStorage.setItem("todos", JSON.stringify(todos))
})

$(`.clearBtn`).on(`click`, function(){
    let key = $(this).siblings(".hour").text();
    let value = $(this).siblings("textarea").val();
    todos[key] = value;
    console.log(todos)
    localStorage.removeItem("todos", JSON.stringify(todos))
})