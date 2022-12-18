
window.onload = function () {
    console.log('Загрузилось')
    let studElem = document.getElementById('S')
    let content = ''
    for (let i = 0; i < studData.length; i++) {
        content += ` <fieldset class="S">
        <legend> ${studData[i].st_number}</legend>
        <img src=${studData[i].st_photo} style="float:left" width="95px" height="120px">
        <ul class="demo">  
        <li><b>ФИО: </b>${studData[i].st_name}</li>
        <li><b>Дата рождения: </b>${studData[i].st_birth}</li>  
        <li> <b>Контакты:</b>
            <ul style="list-style-type: none;">
                <li>E-mail: <a id=link_email href="mailto:${studData[i].st_email}"style=text-decoration:none;>${studData[i].st_email}</a> </li>
                <li>Телефон:${studData[i].st_phone}</li>
            </ul>
        </li> 
        </ul>
        </fieldset>` 
    }
    studElem.innerHTML = content
    $('.S:even').css('background-color','rgb(213, 245, 227)')//светло-зелённый
    $('.S:odd').css('background-color','rgb(250, 219, 216)')//светло-красный
    $('.S').on('click',function(e){
        $(e.target).css('background-color','rgb(214, 219, 223)')//серый
    })
}

console.log('Старт')
const studData=[
    {
        st_number: "Студент 1",
        st_photo:"1.jpg",
        st_name:"Ясевича Лидия Трофимовна",
        st_birth:"08.10.2001",
        st_email:"lidia080808@gmail.com", 
        st_phone:"+7925-252-89-10",
    },
    {
        st_number: "Студент 2",
        st_photo:"2.jpg",
        st_name:"Зуева Ольга Борисовна",
        st_birth:"29.05.2002",
        st_email:"oliga7474125@gmail.com", 
        st_phone:"+7917-454-87-55",
    },
    {
        st_number: "Студент 3",
        st_photo:"3.jpg",
        st_name:"Зотова Елена Васильевна",
        st_birth:"18.11.1999",
        st_email:"elena19991118@gmail.com", 
        st_phone:"+7920-184-03-19",
    },
    {
        st_number: "Студент 4",
        st_photo:"4.jpg",
        st_name:"Иванов Сергей Петрович",
        st_birth:"23.09.2001",
        st_email:"sergey230905@gmail.com", 
        st_phone:"+7945-895-18-23",
    },
    {
        st_number: "Студент 5",
        st_photo:"5.jpg",
        st_name:"Петров Семен Игоревич",
        st_birth:"18.02.2000",
        st_email:"semen180200@gmail.com", 
        st_phone:"+7989-15-97-15",
    },
    {
        st_number: "Студент 6",
        st_photo:"6.jpg",
        st_name:"Осипов Роман Антонович",
        st_birth:"03.10.1997",
        st_email:"roman031019@gmail.com", 
        st_phone:"+7292-33-04-21",
    }
]