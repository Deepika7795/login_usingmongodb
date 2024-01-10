const registerbtnlink = document.querySelector('.registerbtn-link');
const loginbtnlink = document.querySelector('.loginbtn-link');
const wrapper = document.querySelector('.wrapper');

registerbtnlink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

loginbtnlink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
function test(){
 let user = document.getElementById("name").value;
 let password = document.getElementById("lock").value;
 let email = document.getElementById("gmail").value;
 
//localStorage.setItem("uid",user);
//localStorage.setItem("pw",password);
//localStorage.setItem("mail",mail);

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{
    return v.email==email
})){
    alert("Duplicate Data");
}
else{
    user_records.push({
        "name":user,
        "email":email,                                                                                                            
        "password":password
    })
    localStorage.setItem("users",JSON.stringify(user_records));
    {
        alert("Registered Successfully");
    }
}
}
</script>
</body>
</html>