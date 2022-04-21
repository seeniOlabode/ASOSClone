const joinPage = document.getElementById("sign-in");
const signPage = document.getElementById("join-in");

const joinTabSelect = document.getElementById('join-select');
const signTabSelect = document.getElementById('sign-select');

const joinTabContainer = document.getElementById('join-container');
const signTabContainer = document.getElementById('sign-container')

const setJoin = () => {
    joinTabContainer.classList.remove('active');
    signTabContainer.classList.add('active');
    signPage.style.display = 'none';
    joinPage.style.display = 'block';

}

const setSign = () => {
    joinTabContainer.classList.add('active');
    signTabContainer.classList.remove('active');
    joinPage.style.display = 'none';
    signPage.style.display = 'block';
}

joinTabSelect.addEventListener('click', setSign);
signTabSelect.addEventListener('click', setJoin);