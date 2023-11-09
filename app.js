let tbody = document.querySelector('#newTable');
        let userID =0;
        let totallAmount =0;
        let fetchData;
        document.querySelector('#addExpense').addEventListener('click',()=>{
            userID++;
            let editBtn = document.createElement('button');
            editBtn.innerHTML = '<i onclick="edith(this)" class="fa-regular fa-pen-to-square"></i>'
            editBtn.setAttribute('class','editd')
            let deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<i onclick="deleteed(this)" class="fa-solid fa-delete-left"></i>'
            deleteBtn.setAttribute('class','deleteed')
        const userData  = [
        document.getElementsByTagName('tr').firstChild = 'EMS ' + userID,
        document.querySelector('#text').value,
        +document.querySelector('#amount').value,
        document.querySelector('#date').value,
        ""
    ];
    tr = document.createElement('tr');
    for (let i = 0; i < userData.length; i++) {
        td = document.createElement('td');
        let tdText = document.createTextNode(userData[i]); // Tt can be used tdText.textContent = userData[i];
        td.appendChild(tdText);

        td.appendChild(editBtn);
        td.appendChild(deleteBtn);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    document.querySelector('#total_Id').innerHTML ='Total :'+ userID;
    totallAmount += Number(td.parentElement.children[2].textContent)
    document.querySelector('#total_amount').innerHTML ='Total Amount :'+ totallAmount
    // console.log(td.parentElement.children[2])
    document.querySelector('#text').value = " "
        document.querySelector('#amount').value = " "
        document.querySelector('#date').value = " "
        })
        let edith=(e)=>{
            document.querySelector('#popup').style.visibility ='visible';
            document.querySelector('#popup').style.zIndex =1;
            document.querySelector('#popup').style.opacity =1;
            fetchData = e;
            // console.log(e.parentElement.parentElement.parentElement.children[0])
        }
        document.querySelector('#update').addEventListener('click',()=>{
            fetchData.parentElement.parentElement.parentElement.children[1].textContent = document.querySelector('#utext').value;
            fetchData.parentElement.parentElement.parentElement.children[2].textContent = document.querySelector('#uammount').value;
            fetchData.parentElement.parentElement.parentElement.children[3].textContent = document.querySelector('#udate').value;
            document.querySelector('#popup').style.visibility ='hidden';
            document.querySelector('#popup').style.zIndex =-1;
            document.querySelector('#popup').style.opacity =0;
            // console.log(fetchData.parentElement.parentElement.parentElement.children[1])
        })
let deleteed =(e)=>{
    e.parentElement.parentElement.parentElement.remove();
    document.querySelector('#total_Id').innerText ='Total :'+ --userID
    
}
document.querySelector('#profile').addEventListener('click',()=>{
    document.querySelector('.profile').style.visibility ='visible'
    document.querySelector('.profile').style.zIndex = 1;
    document.querySelector('.profile').style.opacity =1;
    document.querySelector('.profile').style.display ='block';
})
document.querySelector('#closeModulas').addEventListener('click',()=>{
    document.querySelector('.profile').style.visibility ='hidden'
    document.querySelector('.profile').style.zIndex = -1;
    document.querySelector('.profile').style.opacity =0;
    document.querySelector('.profile').style.display= 'none'
})
