const studData=[
    {
        st_number:,
        st_photo:,
        st_name:,
        st_birth:,
        st_email:, 
        st_phone:,

    }]
window.onload = function () {
    console.log('Загрузилось')
    let studElem = document.getElementById('S')
    let content = ''
    for (let i = 0; i < userData.length; i++) {
        content += `</div>
                    <legend> ${studData[i].st_number}</legend>
                    <img ${studData[i].st_photo} style="float:left" width="95px" height="120px">
                    <ul>  
                        <li><b>ФИО: </b>${studData[i].st_name}</li>
                        <li><b>Дата рождения: </b>${studData[i].st_birth}</li>  
                        <li> <b>Контакты:</b>
                            <ul style="list-style-type: none;">
                                <li>E-mail: <a id=link_email href="mailto:${studData[i].st_email}"style=text-decoration:none;>${studData[i].st_email}</a> </li>
                                <li>Телефон:${studData[i].st_phone}</li>
                            </ul>
                        </li>
                    </ul>` 
    }
    studElem.innerHTML = content
}

console.log('Старт')
