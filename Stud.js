window.onload = function () {
    console.log('Загрузилось')
    let personElem = document.getElementById('S')
    let content = ''
    for (let i = 0; i < userData.length; i++) {
        content += `</div>
                    <legend id="stud_number"> Студент 1</legend>
                    <img id="stud_photo" src="1.jpg" style="float:left" width="95px" height="120px">
                    <ul class="demo">  
                        <li id="name"><b id="b">ФИО: </b>Ясевича Лидия Трофимовна </li>
                        <li id="b-day"><b id="b">Дата рождения: </b>08.10.2001</li>  
                        <li id="con"> <b>Контакты:</b>
                            <ul id=con_in style="list-style-type: none;">
                                <li id="email">E-mail: <a id=link_email href="mailto:lidia080808@gmail.com"style=text-decoration:none;>lidia080808@gmail.com</a> </li>
                                <li id="phone">Телефон: +7925-252-89-10</li>
                            </ul>
                        </li>
                    </ul>` 
    }
    personElem.innerHTML = content
}

console.log('Старт')
