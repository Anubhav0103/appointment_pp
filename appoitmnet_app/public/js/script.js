document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-form');
    const userList = document.getElementById('user-list');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        try {
            await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, phone, email })
            });
            form.reset();
            loadUsers();
        } catch (err) {
            console.error('Error:', err);
        }
    });

    async function loadUsers() {
        try {
            const response = await fetch('/api/users');
            const users = await response.json();
            userList.innerHTML = '';
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name} - ${user.phone} - ${user.email}`;
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => deleteUser(user.id));
                li.appendChild(deleteButton);
                userList.appendChild(li);
            });
        } catch (err) {
            console.error('Error:', err);
        }
    }

    async function deleteUser(id) {
        try {
            await fetch(`/api/users/${id}`, {
                method: 'DELETE'
            });
            loadUsers();
        } catch (err) {
            console.error('Error:', err);
        }
    }

    loadUsers();
});
