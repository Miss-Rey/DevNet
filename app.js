const save = document.getElementById('save');
const onboarding = document.getElementById('onboarding');


save.addEventListener('click', (e) => {
    e.preventDefault();
    const topics = document.querySelectorAll('.topic');
    topics.forEach(topic => {

        localStorage.setItem('topic', topic);

        window.location.href = 'index.html';
        onboarding.style.display = 'none';

    })
})

const cancel = document.getElementById('Cancel');
cancel.addEventListener('click', (e) => {
    e.preventDefault
    window.location.href = 'index.html';
    onboarding.style.display = 'none';
})

const topics = document.querySelectorAll('.topic');
topics.forEach(topic => {
    topic.addEventListener('click', (e) => {
        e.preventDefault();
        topic.style.border = '1px solid red';
        topic.style.backgroundColor = '#b3b3b3';
    })


})

// const loginbtn = document.getElementById('login');
const auth = document.getElementById('authentication');
const loginWindow = document.getElementById('loginWindow');
const loginBtnNav = document.getElementById('loginBtnNav');
const uploadBtn = document.getElementById('uploadBtn');

loginBtnNav.addEventListener('click', (e) => {
    e.preventDefault();
    auth.style.display = 'flex';
    loginWindow.style.display = 'flex';
})

uploadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.style.display = 'flex';
    loginWindow.style.display = 'flex';
})

// loginbtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     auth.style.display = 'flex';
//    loginWindow.style.display = 'flex';
// })

const signupLnk = document.getElementById('signupLnk');
const signupWindow = document.getElementById('signupWindow');

signupLnk.addEventListener('click', (e) => {
    e.preventDefault();
    auth.style.display = 'flex';
    loginWindow.style.display = 'none';
    signupWindow.style.display = 'flex';
})

const loginLnk = document.getElementById('loginLnk');

loginLnk.addEventListener('click', (e) => {
    e.preventDefault();
    auth.style.display = 'flex';
    loginWindow.style.display = 'flex';
    signupWindow.style.display = 'none';
})


const username = document.getElementById('username');
const password = document.getElementById('password');

loginbtn.addEventListener('click', (e) => {
    if (username.value === '' || password.value === '') {
        alert('Please enter your username and password');
    } else {
        localStorage.setItem('username', username.value);
        username.value = '';
        password.value = '';
        auth.style.display = 'none';
        window.location.href = 'index.html';
    }
})

const signupbtn = document.getElementById('signupbtn');
const signupUsername = document.getElementById('signupUsername');
const signuPassword = document.getElementById('signuPassword');
const confirmpassword = document.getElementById('confirmpassword');

signupbtn.addEventListener('click', (e) => {
    if (signupUsername.value === '' || signuPassword.value === '') {
        alert('Please enter your username and password');
    } else if (signuPassword.value === confirmpassword.value) {
        localStorage.setItem('username', signupUsername.value);
        signupUsername.value = '';
        signuPassword.value = '';
        confirmpassword.value = '';
        auth.style.display = 'none';
        onboarding.style.display = 'flex';
    } else {
        alert('Passwords do not match');
    }
})

const like = document.getElementById('like');
const fa = document.getElementById('fa');
const likes = document.getElementById('likes');
const fa_thumbs_up = document.getElementById('fa-thumbs-up');


like.addEventListener('click', (e) => {
    e.preventDefault();
    fa_thumbs_up.style.color = 'blue';

    let count = 0;
    count++;

    likes.innerText = ''
    likes.innerText = count;

})


const saved = document.getElementById('saved');
const saves = document.getElementById('saves');
const fa_bookmark = document.getElementById('fa-bookmark');


saved.addEventListener('click', (e) => {
    e.preventDefault();
    fa_bookmark.style.color = 'blue';

    let count = 0;
    count++;

    saves.innerText = ''
    saves.innerText = count;

})

const comments = document.getElementById('comments');
const comment = document.getElementById('comment');
const fa_comment = document.getElementById('fa-comment');

comments.addEventListener('click', (e) => {
    e.preventDefault();
    fa_comment.style.color = 'blue';

    let count = 0;
    count++;

    comment.innerText = ''
    comment.innerText = count;

})

const shrare = document.getElementById('shrare');
const shares = document.getElementById('shares');
const fa_share = document.getElementById('fa-share');

shrare.addEventListener('click', (e) => {
    e.preventDefault();
    fa_share.style.color = 'blue';

    let count = 0;
    count++;

    shares.innerText = ''
    shares.innerText = count;

})
